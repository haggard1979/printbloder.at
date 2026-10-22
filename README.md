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

## Häufige Änderungen

**Preis eines Stempels oder Hausschilds ändern** – in der passenden Datei in `data/` die Zahl
ändern, z. B. in `data/stempel-printy.js`: `price: 30.10` (Punkt statt Komma).

**Staffelpreise ändern** (Digitaldruck, Visitkarten, Textildruck, Plakate, Geschenke, ...) –
direkt in der HTML-Seite in der Tabelle, z. B. `<td>0,90 €</td>`.

**Telefonnummer, E-Mail, Adresse oder Menüpunkte ändern** – nur in `assets/js/layout.js`.

**Neue Seite** – eine ähnliche Seite kopieren und anpassen:
`stempel.html` (Kategorie), `stempelPrinty.html` (Produktkarten), `digitaldruckFarb.html` (Preistabellen).

## Lokal ansehen

Doppelklick auf `home.html` genügt. Oder mit Webserver: `python3 -m http.server` und
http://localhost:8000/home.html öffnen.
