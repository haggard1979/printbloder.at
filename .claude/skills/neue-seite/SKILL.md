---
name: neue-seite
description: Neue Produkt- oder Kategorieseite für printbloder.at anlegen – in allen vier Sprachen, verlinkt, mit Preisen als Daten, Suchmaschinen-Angaben und Tests. Verwenden bei „neues Produkt“, „neue Seite“, „neue Kategorie“, „Angebot ergänzen“.
---

# Neue Seite

## 1. Klären (fehlende Angaben erfragen, nie erfinden)

- Welche Kategorie? Neue Hauptkategorie (im Menü) oder Unterseite einer bestehenden?
- Inhalte: Beschreibung, Eigenschaften (Häkchen-Liste), Lieferzeit, Hinweise.
- Preise: einzelne Modelle mit Bild und Preis → Produktkarten; Mengenstaffeln/Formate →
  Preistabellen.
- Bilder: vorhanden in `site/img/` oder vom Nutzer?

## 2. Deutsche Seite

Vorlage kopieren:
- Kategorie mit Unterseiten: `site/stempel.html`
- Produktkarten: `site/stempelPrinty.html` + `site/data/stempel-printy.js`
- Preistabellen: `site/digitaldruckFarb.html` + `site/data/preise/digitaldruckFarb.js`

Anpassen: `<title>`, `meta description`, Breadcrumb, `<h1>`, Text, Badge
(„⏱ Sofort zum Mitnehmen“, „⏱ Fertig ab 25 Minuten / 1 Stunde / 4 Werktagen“), Checkliste,
Hinweise (`.info-list`), `<p class="note">Alle Preise inkl. 20&nbsp;% MwSt.</p>`,
Anfrage-Button (`mailto:` mit Betreff). Die `canonical`/`alternate`-Zeilen nicht von Hand
anpassen – das macht `npm run seo`.

Daten:
- Produktkarten: neue `site/data/<name>.js`; Produktnamen mit deutschen Wörtern als
  `{de, en, sl, uk}`; neue Eigenschafts-Bezeichnungen in `products.js` unter
  `TEXT[lang].words` übersetzen.
- Preistabellen: `site/data/preise/<seite>.js`, Beschriftungen immer in allen vier Sprachen;
  im HTML `<table class="price-table" data-table="0"></table>` (Nummern ab 0) und die
  Skripte `data/preise/<seite>.js` und `assets/js/prices.js` mit `defer` einbinden.

Bilder nach `site/img/…`, mit `alt` und echten `width`/`height` (`file bild.png`).

## 3. Verlinken

- Unterseite: auf der Kategorieseite als `.sub-item` – in allen vier Sprachen – **und** in
  `site/assets/js/layout.js` unter `SUBNAV` mit kurzem Namen in vier Sprachen eintragen; auf
  der neuen Seite (alle Sprachen) `<sub-nav category="…"></sub-nav>` direkt unter dem
  Brotkrümelpfad einfügen. Der Test meldet Abweichungen zwischen Reitern und Kategorieseite.
- Neue Hauptkategorie: in `site/assets/js/layout.js` `NAV` und `TEXT[lang].nav` (alle
  Sprachen), Karte auf `home.html` (alle Sprachen); prüfen, ob das Menü noch passt
  (Test „Menü einzeilig“).

## 4. Übersetzen

Seite nach `site/en/`, `site/sl/`, `site/uk/` mit gleichem Dateinamen übertragen – siehe
Skill `uebersetzen` (Glossar `docs/glossar.md`, Pfade mit `../`).

## 5. Prüfen

`npm run seo` → `npm test` (meldet fehlende Schnappschüsse für die neue Seite) →
den neuen Text in der Meldung bzw. im Browser kontrollieren → `npm run test:update` →
`npm test` grün → committen. Dem Nutzer sagen, dass die Übersetzungen gegengelesen werden sollten.
