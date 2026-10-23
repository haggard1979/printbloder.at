# CLAUDE.md – printbloder.at

Website von Printshop Bloder (Copy- und Printshop in der Shopping City Seiersberg bei Graz).
Kommunikation mit dem Inhaber auf **Deutsch**. Die Website ist live unter
**https://www.printbloder.at/** (GitHub Pages).

## Grundsätze

- **Nur HTML, CSS und JavaScript** – kein Framework, kein Build-Schritt, keine Bibliotheken
  von CDNs. Das ist eine bewusste Entscheidung des Inhabers.
- **Die Website ist der Ordner `site/`** – nur dieser wird veröffentlicht. Alles außerhalb
  (Tests, Werkzeuge, Doku) gehört nicht zur Website.
- **Jeder Preis steht genau einmal** – in `site/data/`, nie im HTML. Gilt für alle Sprachen.
- **Sieben Sprachen**: Deutsch (`site/`), Englisch (`site/en/`), Slowenisch (`site/sl/`),
  Ukrainisch (`site/uk/`), Ungarisch (`site/hu/`), Italienisch (`site/it/`), Kroatisch
  (`site/hr/`) – gleiche Dateinamen, gleiche Struktur. Jede Textänderung in allen sieben
  Sprachen machen.
- **Vor jedem Commit `npm test`** – muss grün sein.

## Aufbau

```
site/
  *.html                  deutsche Seiten (home.html = Startseite, index.html leitet weiter)
  en/ sl/ uk/             Übersetzungen, Ressourcen dort mit ../ (../assets/…, ../img/…)
  assets/css/site.css     gesamtes Design; Farben als Variablen in :root
  img/icons/*.svg         Kacheln der Kategorie-/Unterseiten (selbstständige SVG, helle Fläche)
  assets/js/layout.js     <site-header>/<site-footer>: Kopfzeile, Menü, Fußzeile, Kontaktdaten,
                          Sprachauswahl (Flaggen als SVG, Deutsch = Österreich), Darkmode-
                          Umschalter, UI-Texte je Sprache (TEXT); SUBNAV = Unterseiten je
                          Kategorie für Reiter (groß) bzw. Karussell mit Pfeilen (Handy, bis
                          600 px) – <sub-nav category="stempel">
  assets/js/products.js   Produktkarten aus window.PRODUCTS (#product-list), Sortierung,
                          Anfrage-Mail; Übersetzung der Datenbezeichnungen (TEXT[lang].words)
  assets/js/prices.js     Preistabellen aus window.PRICE_TABLES in <table data-table="N">,
                          Einzelpreise aus window.PRICE_VALUES in <span data-price="name">
  data/*.js               Produktkataloge (Stempel, Hausschilder) → window.PRODUCTS
  data/preise/<seite>.js  Staffelpreise je Seite → PRICE_TABLES (+ optional PRICE_VALUES)
  sitemap.xml robots.txt  von tools/seo.js erzeugt – nicht von Hand ändern
tests/run.js              npm test (siehe unten); tests/snapshots/ = erwarteter Seitentext
tools/seo.js              npm run seo: canonical/hreflang in jeder Seite + sitemap.xml
docs/glossar.md           feste Begriffe für Übersetzungen
.github/workflows/website.yml  Prüfen bei jedem Push/PR; Push auf master → Veröffentlichung
```

Seitentypen (als Vorlage für neue Seiten kopieren):
- Kategorieseite mit Unterseiten: `stempel.html` (`.sub-list`/`.sub-item`)
- Produktkarten aus Daten: `stempelPrinty.html` + `data/stempel-printy.js`
- Preistabellen: `digitaldruckFarb.html` + `data/preise/digitaldruckFarb.js`

## Daten-Formate

`data/*.js` (Produkte):
```js
{name: 'Trodat Printy 4910' /* oder {de, en, sl, uk, hu, it, hr} */, image: 'img/…png',
 specs: {'Druckfläche': '26 × 9 mm', 'Zeilen': 'max. 3'}, price: 30.10,
 extras: {'Nur Stempelplatte': 18.20}, from: true /* "ab" */, note: '…'}
```
Spezifikations-Bezeichnungen und -Werte sind deutsch; ihre Übersetzungen stehen in
`products.js` (`TEXT.en.words` usw.). Neue Bezeichnung → dort für en/sl/uk/hu/it/hr ergänzen.

`data/preise/<seite>.js` (Tabellen) – Zeile = `[Zeilenbeschriftung, Wert, Wert, …]`:
- `0.9` Preis · `{"p": 0.15, "plus": true}` Aufpreis „+0,15 €“ ·
  `{"p": 59.9, "unit": {de,en,sl,uk}}` Preis mit Einheit · `null` = „–“
- `"A4"` Text in allen Sprachen gleich · `{"de": …, "en": …, "sl": …, "uk": …}` übersetzt
  (immer alle sieben Sprachen, sonst schlägt der Test fehl)
- Preise im Fließtext: `<span data-price="name"></span>` + `PRICE_VALUES = {name: 2}`

Preisformat wird automatisch je Sprache erzeugt: de/sl/uk `0,90 €`, en `€0.90`.

## Häufige Aufgaben

**Preis ändern:** Zahl in `site/data/…` ändern → `npm test` meldet die Änderung im
Schnappschuss → prüfen, ob nur das Gewollte geändert ist → `npm run test:update` →
Schnappschüsse mitcommitten.

**Text ändern:** in allen sieben Sprachversionen der Seite (Begriffe aus `docs/glossar.md`).
UI-Texte (Menü, Fußzeile, Knöpfe) in `layout.js`/`products.js` je Sprache.

**Neue Seite:** Vorlage kopieren, in allen sieben Sprachen anlegen, von der Kategorie- bzw.
Startseite verlinken (ggf. Menü in `layout.js`: `NAV` + `TEXT[lang].nav`), `npm run seo`,
`npm test`, `npm run test:update`.

**Neue Unterseite einer Kategorie:** zusätzlich (1) als `.sub-item` auf der Kategorieseite
verlinken (alle sieben Sprachen), (2) in `layout.js` unter `SUBNAV` mit Namen in sieben Sprachen
eintragen, (3) auf der neuen Seite (alle Sprachen) `<sub-nav category="…"></sub-nav>` direkt
unter dem Brotkrümelpfad einfügen. Der Test vergleicht Reiter und Kategorieseite.

**Telefon, E-Mail, Adresse:** nur in `layout.js` (`SHOP`, `TEXT[lang].location`).

## Skills (`.claude/skills/`)

Für wiederkehrende Aufgaben gibt es Schritt-für-Schritt-Anleitungen – bei passender Aufgabe
verwenden:
- `preis-aendern` – Preise ändern, Auswirkung prüfen, Schnappschüsse erneuern
- `neue-seite` – neue Produkt-/Kategorieseite in allen sieben Sprachen
- `uebersetzen` – Texte in en/sl/uk/hu/it/hr übertragen bzw. nachziehen
- `veroeffentlichen` – Pull Request, Prüfungen abwarten, zusammenführen, Veröffentlichung kontrollieren

## Konventionen

- Kopf jeder Seite: `charset`, `viewport`, eigener `<title>`, eigene `meta description`,
  danach die von `npm run seo` verwalteten `canonical`/`alternate`-Links, dann CSS + layout.js.
- Genau ein `<h1>`; Bilder mit `alt` (dekorativ: `alt=""`) und `width`/`height`.
- Keine Inline-Styles; neues CSS in `site.css` mit den vorhandenen Variablen.
- Farben nur über Variablen. Darkmode: die dunkle Palette steht in **zwei identischen
  Blöcken** (`@media (prefers-color-scheme: dark)` und `:root[data-theme="dark"]`) –
  beide gleich ändern.
- Echte Umlaute/UTF-8 statt HTML-Entities. Code-Kommentare auf Deutsch, knapp.
- Breadcrumb „Start › Kategorie › Seite“; Hinweise in `<ul class="info-list">`,
  MwSt.-Hinweis als `<p class="note">`, Anfrage-Button als `mailto:` mit Betreff.

## Prüfungen

`npm test` (einmalig `npm install`, lokal ggf. `npx playwright install chromium`) prüft alle
29 Seiten × 7 Sprachen in ~20 s:
1. Daten (Format, Übersetzungen vollständig, Bilder vorhanden)
2. HTML (Pflichtangaben, Links/Bilder existieren, Platzhalter ↔ Daten, SEO-Angaben aktuell)
3. Browser (keine Fehler, kein seitliches Scrollen bei 390 px, Tabellen nicht abgeschnitten
   bei 1280/1024/768 px, Menü einzeilig, Darkmode, Sprachumschalter, Handy-Menü)
4. Sprachen und Unterseiten (gleiche Tabellen, Links, Preise wie Deutsch; Reiter der
   Unterseiten == Liste der Kategorieseite, aktueller Reiter markiert, Karussell-Pfeile
   blättern im Kreis, Wechsel per Klick am Handy und am Desktop)
5. Schnappschuss (sichtbarer Text == `tests/snapshots/`)

Fehlschlag nie durch Abschwächen der Tests beheben. Schnappschüsse nur nach geprüfter,
gewollter Änderung mit `npm run test:update` erneuern. Die Browser-Prüfung misst Breiten
mit der Testschrift aus `tests/fonts/` (DejaVu Sans, breit) – unabhängig von installierten
Schriften; lokal grün heißt dann auch auf GitHub grün. Auf GitHub laufen die Tests im
Docker-Paket `mcr.microsoft.com/playwright:v<Version>-noble`; beim Aktualisieren von
Playwright die Version in `package.json` und `.github/workflows/website.yml` gleich halten.

## Veröffentlichen

Branch → Pull Request auf `master` → GitHub Actions prüft → nach dem Merge wird `site/`
automatisch auf GitHub Pages veröffentlicht (nur wenn `npm test` grün ist). Pages-Quelle ist
„GitHub Actions“. Für `www.printbloder.at` muss die Domain in den Pages-Einstellungen
(*Custom domain*) eingetragen sein und per DNS-CNAME auf `haggard1979.github.io` zeigen.

## Bekannte Stolperfallen

- `Intl.NumberFormat('uk-UA', …)` schreibt „EUR“ → `currencyDisplay: 'narrowSymbol'`.
- `.wrap` setzt `margin`/`padding` und überschreibt Element-Regeln (`main.wrap` verwenden).
- Größenänderungen: `resize`-Ereignis kommt erst beim nächsten Bildaufbau (Tests warten).
- Lange Spaltenköpfe (sl/uk) → Tabellen werden zu breit; Spaltenköpfe dürfen umbrechen,
  Tabellen ab 3 Preisspalten nehmen die ganze Zeile (`.price-box:has(...)`).
- `index.html` ist nur eine Weiterleitung auf `home.html`.

## Offene Aufgaben

Stehen in **`TODO.md`** – dort pflegen (abhaken, ergänzen). Vor neuer Arbeit kurz
hineinschauen; Erledigtes im selben Pull Request abhaken.
