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
| `img/` | Bilder |
| `en/`, `sl/`, `uk/` | Englische, slowenische und ukrainische Seiten (gleiche Dateinamen wie Deutsch) |

## Häufige Änderungen

**Preis eines Stempels oder Hausschilds ändern** – in der passenden Datei in `data/` die Zahl
ändern, z. B. in `data/stempel-printy.js`: `price: 30.10` (Punkt statt Komma).

**Staffelpreise ändern** (Digitaldruck, Visitkarten, Textildruck, Plakate, Geschenke, ...) –
direkt in der HTML-Seite in der Tabelle, z. B. `<td>0,90 €</td>`.

**Telefonnummer, E-Mail, Adresse oder Menüpunkte ändern** – nur in `assets/js/layout.js`.

**Sprachen** – Deutsch liegt im Hauptordner, die Übersetzungen in `en/`, `sl/` und `uk/`.
Preise in `data/*.js` gelten automatisch für alle Sprachen. Staffelpreise in Tabellen stehen in jeder
Sprachversion der Seite und müssen dort jeweils mitgeändert werden (Englisch schreibt `€0.90`
statt `0,90 €`). Texte von Kopf-/Fußzeile und Produktkarten: `assets/js/layout.js` bzw.
`assets/js/products.js`.

**Neue Seite** – eine ähnliche Seite kopieren und anpassen:
`stempel.html` (Kategorie), `stempelPrinty.html` (Produktkarten), `digitaldruckFarb.html` (Preistabellen).

## Lokal ansehen

Doppelklick auf `home.html` genügt. Oder mit Webserver: `python3 -m http.server` und
http://localhost:8000/home.html öffnen.
