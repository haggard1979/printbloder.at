# TODO – printbloder.at

Offene Aufgaben für die weitere Arbeit. Erledigtes abhaken (`[x]`) und mit dem nächsten
Pull Request entfernen. Neue Punkte unten anfügen.

## Aufgaben

- [ ] **Impressum erstellen**
  - Pflichtangaben nach österreichischem Recht (ECG/MedienG/UGB): Firmenname, Rechtsform,
    Anschrift, Kontakt, ggf. Firmenbuchnummer und -gericht, UID-Nummer, Kammer/Gewerbe,
    Aufsichtsbehörde – **Angaben vom Inhaber nötig**
  - in allen Sprachen; der Link „Anfahrt, Kontakt & Impressum“ führt bereits auf `kontakt.html`

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

- [ ] **Bilder gegen modernere Varianten austauschen**
  - Kategorie- und Kopfbilder (`site/img/buttons/…`) enthalten eingebrannten Text und
    Verläufe; neue Fotos ohne Text, als WebP, mit `width`/`height`
  - Herkunft klären: eigene Fotos, Herstellerbilder (Trodat) oder Bildagentur (Lizenz!)

- [ ] **Anfahrt: echte Karte einbinden bzw. ergänzen**
  - z. B. OpenStreetMap-Einbettung oder Link zu Google Maps/OSM mit Routenplanung
  - Datenschutz beachten: eingebettete Karten laden Inhalte von Drittanbietern
    (ggf. erst nach Klick laden) – Hinweis in Datenschutzerklärung nötig
  - bestehender Anfahrtsplan (`img/allgemein/anfahrt.png`) kann zusätzlich bleiben

- [ ] **Ansprechende Link-Vorschau beim Teilen (Messenger, soziale Netzwerke)**
  - Open-Graph- und Twitter-Card-Angaben im `<head>` jeder Seite (`og:title`, `og:description`,
    `og:image`, `og:url`, `og:type`, `og:locale`, `twitter:card`) – am besten von
    `tools/seo.js` erzeugen lassen, damit sie in allen sieben Sprachen aktuell bleiben
    (Titel/Beschreibung aus `<title>` und `meta description`, `og:url` = canonical)
  - Vorschaubild 1200 × 630 px (JPG/PNG, unter 1 MB), mit Logo und Schriftzug; ggf. je
    Kategorie ein eigenes Bild; absolute Adresse unter `https://www.printbloder.at/`
  - Tests: Pflichtangaben und Bild vorhanden; Ansicht mit Vorschau-Prüfern kontrollieren
    (WhatsApp, Facebook Sharing Debugger, LinkedIn Post Inspector)

## Weitere offene Punkte

- [ ] Übersetzungen (v. a. Slowenisch, Ukrainisch, Ungarisch, Italienisch, Kroatisch) von Muttersprachlern gegenlesen lassen
- [ ] Öffnungszeiten ergänzen (Angaben vom Inhaber nötig)
- [ ] Ungenutzte Produktbilder (Fototasche, Fotoshirt, Flexkappe) – frühere oder geplante
      Produkte? Entweder Seiten ergänzen oder Bilder entfernen
