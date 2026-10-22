# printbloder.at

Statische Website von Printshop Bloder – nur HTML, CSS und JavaScript, kein Build-Schritt.
Dateien einfach auf den Webserver kopieren.

## Aufbau

| Pfad | Inhalt |
|---|---|
| `*.html` | Eine Datei pro Seite |
| `assets/css/site.css` | Gesamtes Design (Farben als Variablen ganz oben) |
| `assets/js/layout.js` | Kopfzeile, Navigation, Fußzeile und Kontaktdaten – für alle Seiten |
| `assets/js/products.js` | Baut Produktkarten aus den Daten in `data/` |
| `data/*.js` | Produktdaten für Seiten mit Einzelmodellen (Stempel, Hausschilder) |
| `data/preise/*.js` | Staffelpreise / Preistabellen, eine Datei pro Seite |
| `assets/js/prices.js` | Baut die Preistabellen aus `data/preise/` |
| `img/` | Bilder |
| `en/`, `sl/`, `uk/` | Englische, slowenische und ukrainische Seiten (gleiche Dateinamen wie Deutsch) |

## Häufige Änderungen

**Preis eines Stempels oder Hausschilds ändern** – in der passenden Datei in `data/` die Zahl
ändern, z. B. in `data/stempel-printy.js`: `price: 30.10` (Punkt statt Komma).

**Staffelpreise ändern** (Digitaldruck, Visitkarten, Textildruck, Plakate, Geschenke, ...) –
in `data/preise/<seite>.js` die Zahl ändern, z. B. in `data/preise/digitaldruckFarb.js` die
Zeile `["ab 1 Stk." ..., 0.9, 1.8]` (A4 = 0.90 €, A3 = 1.80 €). Die Bedeutung der Schreibweisen
steht oben in jeder Datei. Mindestaufträge stehen dort unter `PRICE_VALUES`.

**Telefonnummer, E-Mail, Adresse oder Menüpunkte ändern** – nur in `assets/js/layout.js`.

**Sprachen** – Deutsch liegt im Hauptordner, die Übersetzungen in `en/`, `sl/` und `uk/`.
Alle Preise in `data/` gelten automatisch für alle vier Sprachen – jeder Preis steht nur einmal.
Texte von Kopf-/Fußzeile und Produktkarten: `assets/js/layout.js` bzw.
`assets/js/products.js`.

**Neue Seite** – eine ähnliche Seite kopieren und anpassen:
`stempel.html` (Kategorie), `stempelPrinty.html` (Produktkarten), `digitaldruckFarb.html` (Preistabellen).

## Prüfungen

Nach Änderungen einmal ausführen (benötigt [Node.js](https://nodejs.org)):

```
npm install                      # einmalig
npx playwright install chromium  # einmalig, lädt den Testbrowser
npm test
```

Geprüft werden alle Seiten in allen vier Sprachen:

1. **Daten** – Produkt- und Preisdateien lesbar, vollständig übersetzt, Bilder vorhanden
2. **HTML** – Titel, Beschreibung, genau eine Überschrift, keine kaputten Links/Bilder, alt-Texte
3. **Browser** – keine Fehler, kein seitliches Scrollen am Handy, keine abgeschnittenen
   Tabellen, Menü einzeilig, Darkmode, Sprachumschalter, Handy-Menü
4. **Sprachen** – en/sl/uk haben dieselben Tabellen, Links und Preise wie Deutsch
5. **Schnappschuss** – der sichtbare Text jeder Seite wird mit `tests/snapshots/` verglichen.
   Jede Text- oder Preisänderung fällt so auf. War sie gewollt: `npm run test:update`
   ausführen und die geänderten Schnappschüsse mit committen – im Git-Verlauf sieht man
   dann genau, welcher Preis sich wo geändert hat.

Bei jedem Push laufen die Prüfungen auch automatisch auf GitHub (Reiter „Actions“).

**Nicht auf den Webserver hochladen:** `tests/`, `node_modules/`, `.github/`, `package.json`,
`package-lock.json`, `README.md` – sie gehören nicht zur Website.

## Lokal ansehen

Doppelklick auf `home.html` genügt. Oder mit Webserver: `python3 -m http.server` und
http://localhost:8000/home.html öffnen.
