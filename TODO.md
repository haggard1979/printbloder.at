# TODO – printbloder.at

Offene Aufgaben für die weitere Arbeit. Erledigtes abhaken (`[x]`) und mit dem nächsten
Pull Request entfernen. Neue Punkte unten anfügen.

## Aufgaben

- [ ] **Impressum und Datenschutzerklärung: Angaben vervollständigen und prüfen lassen**
  - Seiten `impressum.html` und `datenschutz.html` (alle sieben Sprachen) sind angelegt und in
    Fußzeile und Handy-Menü verlinkt
  - **UID-Nummer:** ATU64692247 stammt aus dem alten Impressum – vom Inhaber bestätigen lassen,
    dass sie noch gültig ist (steht in allen sieben `impressum.html`)
  - Eingetragen: Inhaber Engelbert Bloder (Einzelunternehmen, Rechtsform wird nicht genannt),
    Mitglied der Wirtschaftskammer Steiermark, Gewerbebehörde BH Graz-Umgebung (vom Inhaber
    bestätigt)
  - **Noch prüfen:** Gewerbewortlaut laut Gewerbeschein (steht noch nicht im Impressum);
    Firmenbuchnummer nur falls eingetragen (bei einem nicht eingetragenen Einzelunternehmen entfällt sie)
  - **Hosting:** Datenschutzerklärung nennt Host Europe GmbH (Köln) mit Servern in der EU – Serverstandort
    im Host-Europe-Kundenbereich bestätigen und dort den Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO)
    abschließen bzw. ablegen
  - Beide Texte (v. a. Datenschutz: Hosting Host Europe, Karte Google Maps, E-Mail-Kontakt) von
    einer fachkundigen Stelle prüfen lassen (z. B. Wirtschaftskammer, Rechtsanwalt); ändert sich
    etwas an der Website (neue Dienste, Formulare), die Datenschutzerklärung anpassen

- [x] **Sprachen Ungarisch, Italienisch und Kroatisch einfügen**
  - Ordner `site/hu/`, `site/it/`, `site/hr/`; `LANGS`/`TEXT` in `layout.js` und `products.js`,
    Flaggen (Ungarn, Italien, Kroatien – Kroatien mit Wappen), alle `{de, en, sl, uk}`-Texte in
    `site/data/` um die neuen Sprachen ergänzen, `docs/glossar.md` erweitern
  - `tools/seo.js` und `tests/run.js` haben eigene Sprachlisten – mit anpassen
  - Muttersprachler zum Gegenlesen einplanen

- [x] **Telefonnummer und E-Mail im Header auf Mobilgeräten tauschen und zentrieren**
  - obere Leiste am Handy: Reihenfolge tauschen (E-Mail vor Telefon) und zentriert
    darstellen (`.topbar` in `site.css`, Inhalt in `layout.js`); Desktop bleibt wie bisher

- [x] **Wechsel zwischen Unterseiten einer Kategorie ermöglichen**
  - z. B. von Trodat Printy direkt zu Trodat Professional, Stempelkulis, Zubehör
  - Steuerelemente im oberen Bereich der Seite (Kopfbereich mit Titel), z. B. als
    Reiter/Chips mit den Geschwisterseiten; gilt für alle Kategorien mit Unterseiten
    (Visitkarten, Stempel, Textildruck, Digitaldruck, Schilder, Geschenke)
  - am besten zentral erzeugen (Liste der Unterseiten je Kategorie an einer Stelle), damit
    nicht 7 Sprachen × viele Seiten von Hand gepflegt werden müssen

- [x] **Bilder gegen modernere Varianten austauschen** (alle Fotos durch SVG-Kacheln ersetzt)
  - [x] Kategorie- und Unterseiten-Kacheln: einheitliche SVG-Motive in `site/img/icons/`
    (kein eingebrannter Text, scharf auf jedem Display, passend zum Darkmode)
  - [x] Produktbilder der Stempel: 30 SVG-Illustrationen in `site/img/artikel/stempel/` (Textfeld im
    echten Größenverhältnis zur Druckfläche); Symbolbilder, keine exakten Trodat-Modelle
  - [x] Hausschild-/Straßenschild-Bilder (`site/img/artikel/schilder/`): SVG im gleichen Maßstab
  - Es gibt jetzt keine Fotos mehr auf der Website; der Anfahrtsplan ist ein SVG (`img/allgemein/anfahrt.svg`), nur das Logo `pslogo.gif` ist noch ein Rasterbild
  - [ ] Optional: echte Produktfotos statt Illustrationen – Trodat-Händlerfotos (Lizenz über
    Händlerzugang klären) oder eigene Fotos als WebP (Geschenke, Schilder, Plakate, Stempel)
  - [x] Ungenutzte Bilder entfernt (alter Ordner `img/buttons/` und `farbkissen.png`; Fototasche,
    Fotoshirt, Flexkappe waren nie als Seiten vorhanden – bei Bedarf in der Git-Historie)

- [x] **Anfahrt: echte Karte einbinden bzw. ergänzen**
  - `kontakt.html` (alle Sprachen): Google-Maps-Karte wird erst nach Klick geladen, dazu Links
    „Route in Google Maps planen“ und „In OpenStreetMap öffnen“; Anfahrtsplan bleibt
  - Datenschutzerklärung nennt die Google-Karte (Einwilligung durch Klick)
  - **Offen:** Pin im Browser kontrollieren (Suche nach „Shopping City Seiersberg“); auf Wunsch
    OpenStreetMap-Karte mit genauen Koordinaten statt Google

- [x] **Ansprechende Link-Vorschau beim Teilen (Messenger, soziale Netzwerke)**
  - Open-Graph-/Twitter-Card-Angaben in allen Seiten (erzeugt von `tools/seo.js`), Vorschaubild
    `site/img/vorschau.jpg` (neu erzeugen mit `npm run vorschau`)
  - Nach dem Veröffentlichen mit WhatsApp, Facebook Sharing Debugger bzw. LinkedIn Post Inspector
    prüfen; die Messenger merken sich Vorschauen oft lange (Cache), ggf. im Debugger erneuern
  - Optional: eigene Vorschaubilder je Kategorie

## Weitere offene Punkte

- [ ] Übersetzungen (v. a. Slowenisch, Ukrainisch, Ungarisch, Italienisch, Kroatisch) von Muttersprachlern gegenlesen lassen
- [ ] Öffnungszeiten ergänzen (Angaben vom Inhaber nötig)
