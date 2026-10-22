/*
 * Suchmaschinen-Angaben für alle Seiten in site/:
 *   - im <head> jeder Seite: canonical (eigene Adresse) und hreflang (die vier
 *     Sprachversionen + x-default = Deutsch)
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
const LANGS = ['de', 'en', 'sl', 'uk'];
const dir = lang => (lang === 'de' ? '' : lang + '/');
const url = (lang, page) => BASE + dir(lang) + page + '.html';

function pages() {
    return fs.readdirSync(SITE)
        .filter(f => f.endsWith('.html') && f !== 'index.html')
        .map(f => f.slice(0, -5))
        .sort();
}

function headLinks(lang, page) {
    const lines = [`<link rel="canonical" href="${url(lang, page)}">`];
    for (const l of LANGS) {
        lines.push(`<link rel="alternate" hreflang="${l}" href="${url(l, page)}">`);
    }
    lines.push(`<link rel="alternate" hreflang="x-default" href="${url('de', page)}">`);
    return lines.map(l => '    ' + l + '\n').join('');
}

function withHeadLinks(html, links) {
    const cleaned = html.replace(/^[ \t]*<link rel="(canonical|alternate)"[^>]*>\n/gm, '');
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
                files[file] = withHeadLinks(fs.readFileSync(file, 'utf8'), headLinks(lang, page));
            }
        }
    }
    const index = path.join(SITE, 'index.html');
    files[index] = fs.readFileSync(index, 'utf8')
        .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url('de', 'home')}">`);
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
