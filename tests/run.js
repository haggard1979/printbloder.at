/*
 * Prüfungen für printbloder.at
 *
 *   npm test                 alle Prüfungen
 *   npm run test:update      wie oben, speichert aber die Text-Schnappschüsse neu
 *                            (nach gewollten Text- oder Preisänderungen)
 *
 * Abschnitte:
 *   1. Daten        data/*.js und data/preise/*.js: Aufbau, Übersetzungen, Bilder
 *   2. HTML         Pflichtangaben, Links/Bilder vorhanden, Sprachversionen, Platzhalter
 *   3. Browser      keine Fehler, kein seitliches Scrollen, Tabellen nicht abgeschnitten,
 *                   Kopfzeile einzeilig, Darkmode, Sprachumschalter, Menü
 *   4. Sprachen     en/sl/uk haben gleiche Tabellen, Links und Preise wie Deutsch
 *   5. Schnappschuss sichtbarer Text jeder Seite == tests/snapshots/
 *
 * Voraussetzung: npm install (einmalig), lokal ggf. npx playwright install chromium
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const {chromium} = require('playwright');
const server = require('./static-server');

// Die Website selbst liegt in site/
const ROOT = path.resolve(__dirname, '..', 'site');
const LANGS = ['de', 'en', 'sl', 'uk'];
const SNAPSHOTS = path.join(__dirname, 'snapshots');
const UPDATE = process.argv.includes('--update-snapshots');

const errors = [];
const warnings = [];
const fail = (section, msg) => errors.push(`[${section}] ${msg}`);
const warn = (section, msg) => warnings.push(`[${section}] ${msg}`);

const langDir = lang => (lang === 'de' ? '' : lang + '/');
const pageFile = (lang, page) => path.join(ROOT, langDir(lang), page + '.html');
const read = file => fs.readFileSync(file, 'utf8');

const PAGES = fs.readdirSync(ROOT)
    .filter(f => f.endsWith('.html') && f !== 'index.html')
    .map(f => f.slice(0, -5))
    .sort();

/* ---------------------------------------------------------------- 1. Daten */

function loadScript(file) {
    const sandbox = {window: {}};
    vm.runInNewContext(read(file), sandbox, {filename: file});
    return sandbox.window;
}

function isLocalized(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value) && !('p' in value)
        && Object.keys(value).sort().join() === [...LANGS].sort().join()
        && LANGS.every(l => typeof value[l] === 'string' && value[l].trim() !== '');
}

const isText = value => (typeof value === 'string' && value.trim() !== '') || isLocalized(value);
const isPrice = value => typeof value === 'number' && Number.isFinite(value) && value >= 0;

function checkPriceCell(value) {
    if (value === null || isPrice(value) || isText(value)) {
        return true;
    }
    return typeof value === 'object' && isPrice(value.p)
        && Object.keys(value).every(k => ['p', 'plus', 'unit'].includes(k))
        && (value.plus === undefined || typeof value.plus === 'boolean')
        && (value.unit === undefined || isLocalized(value.unit));
}

const priceData = {};

function checkData() {
    const S = 'Daten';
    for (const f of fs.readdirSync(path.join(ROOT, 'data')).filter(f => f.endsWith('.js'))) {
        let win;
        try {
            win = loadScript(path.join(ROOT, 'data', f));
        } catch (e) {
            fail(S, `data/${f}: nicht lesbar: ${e.message}`);
            continue;
        }
        if (!Array.isArray(win.PRODUCTS) || !win.PRODUCTS.length) {
            fail(S, `data/${f}: window.PRODUCTS fehlt oder ist leer`);
            continue;
        }
        win.PRODUCTS.forEach((p, i) => {
            const where = `data/${f} Produkt ${i + 1}`;
            if (!(typeof p.name === 'string' ? p.name.trim() : isLocalized(p.name))) {
                fail(S, `${where}: name fehlt oder nicht in allen Sprachen (${LANGS.join(', ')})`);
            }
            if (!p.image || !fs.existsSync(path.join(ROOT, p.image))) {
                fail(S, `${where}: Bild fehlt: ${p.image}`);
            }
            if (!isPrice(p.price) || p.price === 0) {
                fail(S, `${where}: ungültiger Preis ${p.price}`);
            }
            for (const [k, v] of Object.entries(p.specs || {})) {
                if (typeof v !== 'string' || !v.trim()) {
                    fail(S, `${where}: Angabe "${k}" ist leer`);
                }
            }
            for (const [k, v] of Object.entries(p.extras || {})) {
                if (!isPrice(v)) {
                    fail(S, `${where}: Zusatzpreis "${k}" ist keine Zahl`);
                }
            }
        });
    }

    for (const f of fs.readdirSync(path.join(ROOT, 'data', 'preise')).filter(f => f.endsWith('.js'))) {
        let win;
        try {
            win = loadScript(path.join(ROOT, 'data', 'preise', f));
        } catch (e) {
            fail(S, `data/preise/${f}: nicht lesbar: ${e.message}`);
            continue;
        }
        const tables = win.PRICE_TABLES;
        priceData[f.slice(0, -3)] = {tables: tables || [], values: win.PRICE_VALUES || {}};
        if (!Array.isArray(tables) || !tables.length) {
            fail(S, `data/preise/${f}: window.PRICE_TABLES fehlt oder ist leer`);
            continue;
        }
        tables.forEach((t, ti) => {
            const where = `data/preise/${f} Tabelle ${ti + 1}`;
            if (t.caption !== undefined && !isText(t.caption)) {
                fail(S, `${where}: Überschrift fehlt oder nicht in allen Sprachen`);
            }
            if (!Array.isArray(t.columns) || !t.columns.length || !t.columns.every(isText)) {
                fail(S, `${where}: Spaltenköpfe fehlen oder nicht in allen Sprachen`);
                return;
            }
            (t.rows || []).forEach((row, ri) => {
                if (!Array.isArray(row) || row.length !== t.columns.length) {
                    fail(S, `${where} Zeile ${ri + 1}: ${row && row.length} Werte, erwartet ${t.columns.length}`);
                    return;
                }
                if (!isText(row[0])) {
                    fail(S, `${where} Zeile ${ri + 1}: Zeilenbeschriftung fehlt oder nicht in allen Sprachen`);
                }
                row.slice(1).forEach((cell, ci) => {
                    if (!checkPriceCell(cell)) {
                        fail(S, `${where} Zeile ${ri + 1} Spalte ${ci + 2}: ungültiger Wert ${JSON.stringify(cell)}`);
                    }
                });
            });
        });
        for (const [k, v] of Object.entries(win.PRICE_VALUES || {})) {
            if (!isPrice(v)) {
                fail(S, `data/preise/${f}: PRICE_VALUES.${k} ist keine Zahl`);
            }
        }
    }
}

/* ----------------------------------------------------------------- 2. HTML */

function checkHtml() {
    const S = 'HTML';
    for (const dir of LANGS.filter(l => l !== 'de')) {
        for (const f of fs.readdirSync(path.join(ROOT, dir)).filter(f => f.endsWith('.html'))) {
            if (!PAGES.includes(f.slice(0, -5))) {
                fail(S, `${dir}/${f}: keine deutsche Seite ${f} vorhanden`);
            }
        }
    }
    for (const lang of LANGS) {
        for (const page of PAGES) {
            const file = pageFile(lang, page);
            const name = langDir(lang) + page + '.html';
            if (!fs.existsSync(file)) {
                fail(S, `${name}: Sprachversion fehlt`);
                continue;
            }
            const src = read(file);
            const check = (ok, msg) => ok || fail(S, `${name}: ${msg}`);
            check(new RegExp(`<html lang="${lang}"`).test(src), `<html lang="${lang}"> fehlt`);
            check(/<meta charset="utf-8">/i.test(src), 'meta charset fehlt');
            check(/<meta name="viewport"/.test(src), 'meta viewport fehlt');
            check(/<title>[^<]+<\/title>/.test(src), 'title fehlt');
            check(/<meta name="description" content="[^"]+"/.test(src), 'meta description fehlt');
            check((src.match(/<h1[\s>]/g) || []).length === 1, 'nicht genau ein <h1>');
            check(src.includes('<site-header></site-header>') && src.includes('<site-footer></site-footer>'),
                'site-header/site-footer fehlt');
            check(!/bootstrap|includeHTML|w3-include|j_id/.test(src), 'Reste des alten Designs');
            if (/\sstyle="/.test(src)) {
                warn(S, `${name}: Inline-Style`);
            }

            for (const img of src.match(/<img\b[^>]*>/g) || []) {
                check(/\salt="/.test(img), `Bild ohne alt: ${img}`);
            }
            for (const [, attr, ref] of src.matchAll(/\s(src|href)="([^"]*)"/g)) {
                if (/^(https?:|mailto:|tel:|#|data:)/.test(ref)) {
                    continue;
                }
                const target = path.resolve(path.dirname(file), ref.split('#')[0]);
                check(fs.existsSync(target), `${attr}="${ref}" zeigt auf nichts`);
            }

            const placeholders = [...src.matchAll(/data-table="(\d+)"/g)].map(m => Number(m[1]));
            if (placeholders.length) {
                const data = priceData[page];
                check(data, `Preistabellen ohne data/preise/${page}.js`);
                check(src.includes(`data/preise/${page}.js`) && src.includes('assets/js/prices.js'),
                    'Skripte für Preistabellen nicht eingebunden');
                if (data) {
                    check(placeholders.join() === data.tables.map((_, i) => i).join(),
                        `Platzhalter ${placeholders.join()} passen nicht zu ${data.tables.length} Tabellen in den Daten`);
                }
            }
            for (const [, key] of src.matchAll(/data-price="([^"]+)"/g)) {
                check(priceData[page] && isPrice(priceData[page].values[key]),
                    `data-price="${key}" fehlt in data/preise/${page}.js (PRICE_VALUES)`);
            }
            if (src.includes('id="product-list"')) {
                check(/data\/[a-z-]+\.js/.test(src) && src.includes('assets/js/products.js'),
                    'Produktliste ohne Daten-Datei oder products.js');
            }
        }
    }
}

/* -------------------------------------------------------------- 3. Browser */

const AMOUNT = {
    de: '\\d{1,3}(?:\\.\\d{3})*(?:,\\d{1,2})?',
    en: '\\d{1,3}(?:,\\d{3})*(?:\\.\\d{1,2})?'
};

// Alle Euro-Beträge eines Texts als sortierte Liste ("0.90", "12.00", ...)
function amounts(text, lang) {
    const num = lang === 'en' ? AMOUNT.en : AMOUNT.de;
    // nur Leerzeichen zwischen Zahl und €, kein Tabulator (Tabellenspalten)
    const re = new RegExp(`€[ \\u00a0\\u202f]?(${num})|(${num})[ \\u00a0\\u202f]?€`, 'g');
    const out = [];
    for (const m of text.matchAll(re)) {
        const raw = m[1] || m[2];
        const value = lang === 'en' ? raw.replace(/,/g, '') : raw.replace(/\./g, '').replace(',', '.');
        out.push(Number(value).toFixed(2));
    }
    return out.sort();
}

async function inspect(page) {
    return page.evaluate(() => {
        const main = document.querySelector('main');
        const count = sel => main.querySelectorAll(sel).length;
        const navLinks = [...document.querySelectorAll('.nav a')];
        const header = document.querySelector('.header');
        return {
            text: main.innerText,
            counts: {tr: count('tr'), td: count('td'), li: count('li'), img: count('img'), h1: count('h1'), product: count('.product')},
            links: [...main.querySelectorAll('a[href]')].map(a => a.getAttribute('href'))
                .filter(h => !h.startsWith('mailto:') && !h.startsWith('#')).sort(),
            emptyTables: [...document.querySelectorAll('table[data-table]')].filter(t => !t.querySelector('tbody tr')).length,
            emptyPrices: [...document.querySelectorAll('[data-price]')].filter(e => !e.textContent.trim()).length,
            emptyProducts: !!document.getElementById('product-list') && !document.querySelector('#product-list .product'),
            navWrapped: header && !header.classList.contains('is-compact')
                && (new Set(navLinks.map(a => a.offsetTop)).size > 1 || navLinks.some(a => a.offsetHeight > 48)),
            truncatedTables: [...document.querySelectorAll('.price-box')]
                .filter(b => b.scrollWidth > b.clientWidth + 1)
                .map(b => (b.querySelector('caption') || {}).textContent || 'ohne Überschrift'),
            overflow: document.documentElement.scrollWidth > window.innerWidth
        };
    });
}

const WIDE_FONT = '* { font-family: "DejaVu Sans", Verdana, sans-serif !important; }';

// Größenänderung abwarten (der Browser meldet sie erst beim nächsten Bildaufbau)
async function resize(page, width, height) {
    await page.setViewportSize({width, height});
    await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
}

async function checkBrowser(browser, base) {
    const S = 'Browser';
    const results = {};
    const page = await browser.newPage({viewport: {width: 1280, height: 900}});
    let problems = [];
    page.on('pageerror', e => problems.push('JavaScript-Fehler: ' + e.message));
    page.on('console', m => m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())
        && problems.push('Konsole: ' + m.text()));
    page.on('response', r => r.status() >= 400 && !r.url().includes('favicon')
        && problems.push(`HTTP ${r.status()}: ${r.url().replace(base, '')}`));

    for (const lang of LANGS) {
        for (const name of PAGES) {
            const label = langDir(lang) + name + '.html';
            problems = [];
            await resize(page, 1280, 900);
            await page.goto(base + label, {waitUntil: 'load'});
            // Breiten immer mit einer breiten Schrift messen (ungünstigster Fall),
            // damit das Ergebnis nicht von den installierten Schriften abhängt
            await page.addStyleTag({content: WIDE_FONT});
            const r = await inspect(page);
            results[lang + '/' + name] = r;
            if (r.emptyTables) problems.push(`${r.emptyTables} Preistabelle(n) leer`);
            if (r.emptyPrices) problems.push(`${r.emptyPrices} Preis(e) im Text leer`);
            if (r.emptyProducts) problems.push('Produktliste leer');
            if (r.navWrapped) problems.push('Menü bricht bei 1280 px um');
            for (const width of [1280, 1024, 768]) {
                if (width !== 1280) {
                    await resize(page, width, 900);
                }
                const t = width === 1280 ? r : await inspect(page);
                if (t.truncatedTables.length) problems.push(`Tabelle abgeschnitten bei ${width} px: ${t.truncatedTables.join(', ')}`);
                if (t.navWrapped) problems.push(`Menü bricht bei ${width} px um`);
            }
            await resize(page, 390, 800);
            if ((await inspect(page)).overflow) problems.push('seitliches Scrollen bei 390 px (Handy)');
            problems.forEach(p => fail(S, `${label}: ${p}`));
        }
    }
    await page.close();

    // Darkmode: folgt dem Gerät, Umschalter wirkt und wird gemerkt
    const ctx = await browser.newContext({colorScheme: 'dark'});
    const dark = await ctx.newPage();
    const bg = () => dark.evaluate(() => getComputedStyle(document.body).backgroundColor);
    await dark.goto(base + 'home.html');
    const bgDark = await bg();
    await dark.click('.theme-toggle');
    const bgLight = await bg();
    await dark.reload();
    const bgReload = await bg();
    if (bgDark === bgLight) fail(S, 'Darkmode: Umschalter ändert die Farben nicht');
    if (bgReload !== bgLight) fail(S, 'Darkmode: Wahl wird nach dem Neuladen nicht beibehalten');
    await ctx.close();

    // Sprachumschalter und Handy-Menü
    const p = await browser.newPage({viewport: {width: 390, height: 800}});
    await p.goto(base + 'stempelPrinty.html');
    for (const lang of LANGS) {
        await p.goto(base + 'stempelPrinty.html');
        await p.click(`.lang-switch a[hreflang="${lang}"]`);
        const now = await p.evaluate(() => [location.pathname, document.documentElement.lang]);
        if (now[0] !== '/' + langDir(lang) + 'stempelPrinty.html' || now[1] !== lang) {
            fail(S, `Sprachumschalter ${lang}: landet auf ${now[0]} (lang=${now[1]})`);
        }
    }
    await p.goto(base + 'home.html');
    await p.click('.nav-toggle');
    if (!(await p.isVisible('.nav a'))) fail(S, 'Handy-Menü öffnet sich nicht');
    await p.close();
    return results;
}

/* ------------------------------------------------------------- 4. Sprachen */

const GERMAN = /\b(und|für|inkl\.|Preis|Preise|Stk\.|Zeilen|Jetzt|Menge|einseitig|beidseitig|Anfrage|oder|Ihre?)\b/;

function checkTranslations(results) {
    const S = 'Sprachen';
    for (const page of PAGES) {
        const de = results['de/' + page];
        for (const lang of LANGS.filter(l => l !== 'de')) {
            const tr = results[lang + '/' + page];
            const label = `${lang}/${page}.html`;
            if (!de || !tr) continue;
            for (const [k, v] of Object.entries(de.counts)) {
                if (tr.counts[k] !== v) fail(S, `${label}: ${k}-Anzahl ${tr.counts[k]}, Deutsch ${v}`);
            }
            if (tr.links.join() !== de.links.join()) {
                fail(S, `${label}: Links weichen vom Deutschen ab`);
            }
            const a = amounts(de.text, 'de').join(' ');
            const b = amounts(tr.text, lang).join(' ');
            if (a !== b) fail(S, `${label}: Preise weichen ab\n      de: ${a}\n      ${lang}: ${b}`);
            const german = tr.text.split('\n').filter(l => GERMAN.test(l));
            if (german.length) warn(S, `${label}: evtl. deutscher Text: ${JSON.stringify(german[0].slice(0, 80))}`);
        }
    }
}

/* ---------------------------------------------------------- 5. Schnappschuss */

function checkSnapshots(results) {
    const S = 'Schnappschuss';
    const expected = new Set();
    for (const [key, r] of Object.entries(results)) {
        const file = path.join(SNAPSHOTS, key + '.txt');
        expected.add(file);
        if (UPDATE) {
            fs.mkdirSync(path.dirname(file), {recursive: true});
            fs.writeFileSync(file, r.text + '\n');
            continue;
        }
        if (!fs.existsSync(file)) {
            fail(S, `${key}: kein Schnappschuss – "npm run test:update" ausführen`);
            continue;
        }
        const before = read(file).replace(/\n$/, '').split('\n');
        const now = r.text.split('\n');
        const diff = [];
        for (let i = 0; i < Math.max(before.length, now.length) && diff.length < 6; i++) {
            if (before[i] !== now[i]) diff.push(`      - ${before[i] ?? ''}\n      + ${now[i] ?? ''}`);
        }
        if (diff.length) fail(S, `${key}: Text geändert\n${diff.join('\n')}`);
    }
    if (UPDATE && fs.existsSync(SNAPSHOTS)) {
        for (const lang of fs.readdirSync(SNAPSHOTS)) {
            for (const f of fs.readdirSync(path.join(SNAPSHOTS, lang))) {
                const file = path.join(SNAPSHOTS, lang, f);
                if (!expected.has(file)) fs.unlinkSync(file);
            }
        }
    }
}

/* ------------------------------------------------------------------ Ablauf */

(async () => {
    const started = Date.now();
    const step = (name, n) => console.log(`${name.padEnd(16)} ${n} Fehler`);
    let before = 0;
    const done = name => {
        step(name, errors.length - before);
        before = errors.length;
    };

    checkData();
    done('1. Daten');
    checkHtml();
    done('2. HTML');

    const site = await server.start(ROOT);
    const browser = await chromium.launch();
    try {
        const results = await checkBrowser(browser, site.url);
        done('3. Browser');
        checkTranslations(results);
        done('4. Sprachen');
        checkSnapshots(results);
        done(UPDATE ? '5. Schnappschuss (neu gespeichert)' : '5. Schnappschuss');
    } finally {
        await browser.close();
        await site.close();
    }

    if (warnings.length) {
        console.log(`\n${warnings.length} Hinweis(e):`);
        warnings.forEach(w => console.log('  ' + w));
    }
    if (errors.length) {
        console.log(`\n${errors.length} FEHLER:`);
        errors.forEach(e => console.log('  ' + e));
    }
    console.log(`\n${PAGES.length * LANGS.length} Seiten geprüft in ${Math.round((Date.now() - started) / 1000)} s – `
        + (errors.length ? 'FEHLGESCHLAGEN' : 'alles in Ordnung'));
    process.exit(errors.length ? 1 : 0);
})().catch(e => {
    console.error(e);
    process.exit(1);
});
