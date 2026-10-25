# printbloder.at

Statische Website von Printshop Bloder – nur HTML, CSS und JavaScript, kein Build-Schritt.

**Die Website ist der Ordner `site/`** – nur dessen Inhalt wird veröffentlicht.
Alles andere (Prüfungen, README, Projektdateien) gehört nicht zur Website.

## Veröffentlichen

Bei jedem Push auf `master` prüft GitHub die Website (siehe „Prüfungen“) und
lädt `site/` danach automatisch per FTPS auf den Webserver (Zugangsdaten als Secrets, siehe
`.github/workflows/website.yml`) – nur wenn alle Prüfungen bestanden sind. Fortschritt und
Ergebnis: Reiter „Actions“ auf GitHub.

Von Hand veröffentlichen: den **Inhalt** von `site/` auf den Webserver hochladen.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `site/*.html` | Eine Datei pro Seite |
| `site/assets/css/site.css` | Gesamtes Design (Farben als Variablen ganz oben) |
| `site/assets/js/layout.js` | Kopfzeile, Navigation, Fußzeile und Kontaktdaten – für alle Seiten |
| `site/assets/js/products.js` | Baut Produktkarten aus den Daten in `site/data/` |
| `site/data/*.js` | Produktdaten für Seiten mit Einzelmodellen (Stempel, Hausschilder) |
| `site/data/preise/*.js` | Staffelpreise / Preistabellen, eine Datei pro Seite |
| `site/assets/js/prices.js` | Baut die Preistabellen aus `site/data/preise/` |
| `site/img/` | Bilder |
| `site/en/`, `site/sl/`, `site/uk/`, `site/hu/`, `site/it/`, `site/hr/` | Übersetzungen (Englisch, Slowenisch, Ukrainisch, Ungarisch, Italienisch, Kroatisch; gleiche Dateinamen wie Deutsch) |

## Häufige Änderungen

**Preis eines Stempels oder Hausschilds ändern** – in der passenden Datei in `site/data/` die Zahl
ändern, z. B. in `site/data/stempel-printy.js`: `price: 30.10` (Punkt statt Komma).

**Staffelpreise ändern** (Digitaldruck, Visitkarten, Textildruck, Plakate, Geschenke, ...) –
in `site/data/preise/<seite>.js` die Zahl ändern, z. B. in `site/data/preise/digitaldruckFarb.js` die
Zeile `["ab 1 Stk." ..., 0.9, 1.8]` (A4 = 0.90 €, A3 = 1.80 €). Die Bedeutung der Schreibweisen
steht oben in jeder Datei. Mindestaufträge stehen dort unter `PRICE_VALUES`.

**Telefonnummer, E-Mail, Adresse oder Menüpunkte ändern** – nur in `site/assets/js/layout.js`.

**Sprachen** – Deutsch liegt in `site/`, die Übersetzungen in `site/en/`, `site/sl/`, `site/uk/`, `site/hu/`, `site/it/` und `site/hr/`.
Alle Preise in `site/data/` gelten automatisch für alle sieben Sprachen – jeder Preis steht nur einmal.
Texte von Kopf-/Fußzeile und Produktkarten: `site/assets/js/layout.js` bzw.
`site/assets/js/products.js`.

**Neue oder umbenannte Seite** – danach `npm run seo` ausführen: Das trägt in jeder Seite die
Verweise auf die Sprachversionen ein (für Suchmaschinen, Adresse `https://www.printbloder.at/`)
und aktualisiert `site/sitemap.xml`. `npm test` meldet, wenn das vergessen wurde.

**Neue Seite** – eine ähnliche Seite kopieren und anpassen:
`site/stempel.html` (Kategorie), `site/stempelPrinty.html` (Produktkarten), `site/digitaldruckFarb.html` (Preistabellen).

## Prüfungen

Nach Änderungen einmal ausführen (benötigt [Node.js](https://nodejs.org)):

```
npm install                      # einmalig
npx playwright install chromium  # einmalig, lädt den Testbrowser
npm test
```

Geprüft werden alle Seiten in allen sieben Sprachen:

1. **Daten** – Produkt- und Preisdateien lesbar, vollständig übersetzt, Bilder vorhanden
2. **HTML** – Titel, Beschreibung, genau eine Überschrift, keine kaputten Links/Bilder, alt-Texte
3. **Browser** – keine Fehler, kein seitliches Scrollen am Handy, keine abgeschnittenen
   Tabellen, Menü einzeilig, Darkmode, Sprachumschalter, Handy-Menü
4. **Sprachen** – Alle Übersetzungen haben dieselben Tabellen, Links und Preise wie Deutsch
5. **Schnappschuss** – der sichtbare Text jeder Seite wird mit `tests/snapshots/` verglichen.
   Jede Text- oder Preisänderung fällt so auf. War sie gewollt: `npm run test:update`
   ausführen und die geänderten Schnappschüsse mit committen – im Git-Verlauf sieht man
   dann genau, welcher Preis sich wo geändert hat.

Bei jedem Push und Pull Request laufen die Prüfungen auch automatisch auf GitHub
(Reiter „Actions“).

## Lokal ansehen

Doppelklick auf `site/home.html` genügt. Oder mit Webserver: im Ordner `site/`
`python3 -m http.server` starten und http://localhost:8000/home.html öffnen.
