/*
 * Suchmaschinen-Angaben für alle Seiten in site/:
 *   - im <head> jeder Seite: canonical (eigene Adresse) und hreflang (alle sieben
 *     Sprachversionen + x-default = Deutsch)
 *   - Link-Vorschau für Messenger und soziale Netzwerke (Open Graph, Twitter Card):
 *     Titel und Beschreibung aus der Seite selbst, Bild site/img/vorschau.jpg
 *     (erzeugen mit "npm run vorschau")
 *   - site/sitemap.xml mit allen Seiten und ihren Sprachversionen
 *   - site/robots.txt mit Verweis auf die Sitemap
 *
 *   npm run seo      Angaben neu schreiben (nach neuen oder umbenannten Seiten)
 *
 * Die Tests (npm test) prüfen, ob alles aktuell ist.
 */
const fs = require('fs');
const path = require('path');

const BASE = 'https://www.printbloder.at/';
const SITE = path.resolve(__dirname, '..', 'site');
const LANGS = ['de', 'en', 'sl', 'uk', 'hu', 'it', 'hr'];
const IMAGE = BASE + 'img/vorschau.jpg';
const LOCALES = {de: 'de_AT', en: 'en_GB', sl: 'sl_SI', uk: 'uk_UA', hu: 'hu_HU', it: 'it_IT', hr: 'hr_HR'};
const dir = lang => (lang === 'de' ? '' : lang + '/');
const url = (lang, page) => BASE + dir(lang) + page + '.html';

function pages() {
    return fs.readdirSync(SITE)
        .filter(f => f.endsWith('.html') && f !== 'index.html')
        .map(f => f.slice(0, -5))
        .sort();
}

// Inhalt eines Tags aus der Seite (bereits HTML-maskiert, daher direkt in Attribute verwendbar)
function pageText(html, re, what) {
    const m = html.match(re);
    if (!m) {
        throw new Error(`${what} fehlt`);
    }
    return m[1].trim();
}

function headLinks(lang, page, html) {
    const title = pageText(html, /<title>([^<]*)<\/title>/, '<title>');
    const description = pageText(html, /<meta name="description" content="([^"]*)">/, 'meta description');
    const lines = [`<link rel="canonical" href="${url(lang, page)}">`];
    for (const l of LANGS) {
        lines.push(`<link rel="alternate" hreflang="${l}" href="${url(l, page)}">`);
    }
    lines.push(`<link rel="alternate" hreflang="x-default" href="${url('de', page)}">`);
    lines.push(
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="Printshop Bloder">',
        `<meta property="og:title" content="${title}">`,
        `<meta property="og:description" content="${description}">`,
        `<meta property="og:url" content="${url(lang, page)}">`,
        `<meta property="og:image" content="${IMAGE}">`,
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        `<meta property="og:image:alt" content="${title}">`,
        `<meta property="og:locale" content="${LOCALES[lang]}">`,
        ...LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${LOCALES[l]}">`),
        '<meta name="twitter:card" content="summary_large_image">'
    );
    return lines.map(l => '    ' + l + '\n').join('');
}

function withHeadLinks(html, links) {
    const cleaned = html
        .replace(/^[ \t]*<link rel="(canonical|alternate)"[^>]*>\n/gm, '')
        .replace(/^[ \t]*<meta (property="og:|name="twitter:)[^>]*>\n/gm, '');
    const anchor = cleaned.match(/^[ \t]*<link rel="stylesheet"/m);
    if (!anchor) {
        throw new Error('kein <link rel="stylesheet"> gefunden');
    }
    return cleaned.slice(0, anchor.index) + links + cleaned.slice(anchor.index);
}

function sitemap(list) {
    const entries = [];
    for (const page of list) {
        for (const lang of LANGS) {
            entries.push('  <url>\n    <loc>' + url(lang, page) + '</loc>\n'
                + LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, page)}"/>\n`).join('')
                + `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('de', page)}"/>\n  </url>\n`);
        }
    }
    return '<?xml version="1.0" encoding="UTF-8"?>\n'
        + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
        + entries.join('') + '</urlset>\n';
}

// Liefert {Dateipfad: gewünschter Inhalt} für alle Dateien, die dieses Skript verwaltet
function plan() {
    const files = {};
    const list = pages();
    for (const lang of LANGS) {
        for (const page of list) {
            const file = path.join(SITE, dir(lang), page + '.html');
            if (fs.existsSync(file)) {
                const html = fs.readFileSync(file, 'utf8');
                files[file] = withHeadLinks(html, headLinks(lang, page, html));
            }
        }
    }
    // index.html leitet nur weiter; Messenger folgen der Weiterleitung nicht – daher trägt sie
    // dieselbe Link-Vorschau wie die Startseite, aber mit der Hauptadresse
    const index = path.join(SITE, 'index.html');
    const home = fs.readFileSync(path.join(SITE, 'home.html'), 'utf8');
    const indexTags = headLinks('de', 'home', home)
        .split('\n').filter(l => /og:|twitter:|name="description"/.test(l) || /rel="canonical"/.test(l))
        .map(l => l.replace(url('de', 'home'), BASE)).join('\n');
    files[index] = fs.readFileSync(index, 'utf8')
        .replace(/^[ \t]*<(link rel="canonical"|meta (property="og:|name="twitter:|name="description"))[^>]*>\n/gm, '')
        .replace(/(<meta http-equiv="refresh"[^>]*>\n)/, `$1${indexTags}\n`)
        .replace(`<link rel="canonical" href="${BASE}">`, `<link rel="canonical" href="${url('de', 'home')}">`);
    files[path.join(SITE, 'sitemap.xml')] = sitemap(list);
    files[path.join(SITE, 'robots.txt')] = `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`;
    return files;
}

// Dateien, deren Inhalt nicht dem Plan entspricht
function outdated() {
    return Object.entries(plan())
        .filter(([file, content]) => !fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== content)
        .map(([file]) => path.relative(path.dirname(SITE), file));
}

if (require.main === module) {
    let changed = 0;
    for (const [file, content] of Object.entries(plan())) {
        if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== content) {
            fs.writeFileSync(file, content);
            changed++;
        }
    }
    console.log(`${changed} Datei(en) aktualisiert`);
}

module.exports = {outdated, BASE};
