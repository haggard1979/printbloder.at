---
name: uebersetzen
description: Texte von printbloder.at ins Englische, Slowenische und Ukrainische übertragen oder geänderte deutsche Texte in den Sprachversionen nachziehen. Verwenden bei „übersetzen“, „Text geändert“, „auch auf Englisch/Slowenisch/Ukrainisch“ und immer, wenn deutsche Texte geändert wurden.
---

# Übersetzen

Sprachen: Deutsch `site/`, Englisch `site/en/`, Slowenisch `site/sl/`, Ukrainisch `site/uk/`
– gleiche Dateinamen, gleiche HTML-Struktur.

## 1. Was ist zu übersetzen?

- Geänderte deutsche Texte ermitteln (`git diff`, Nutzerangabe).
- Orte für Texte: HTML-Seiten; Tabellenbeschriftungen in `site/data/preise/*.js`
  (`{de, en, sl, uk}`); Produktnamen in `site/data/*.js`; Eigenschaften in
  `site/assets/js/products.js` (`TEXT[lang].words`); Menü/Fußzeile/Knöpfe in
  `site/assets/js/layout.js` (`TEXT`).

## 2. Übertragen

- Begriffe aus `docs/glossar.md` verwenden; neue Fachbegriffe dort ergänzen.
- Struktur 1:1: gleiche Elemente, Klassen, Reihenfolge, Links. Übersetzt werden sichtbarer
  Text, `<title>`, `meta description`, `alt`, `aria-label`, mailto-Betreffs.
- In `en/`, `sl/`, `uk/` zeigen Ressourcen mit `../` auf den Hauptordner (`../assets/…`,
  `../img/…`, `../data/…`), Links auf andere Seiten ohne `../`.
- Keine Preise in Texte schreiben – die kommen aus den Daten.
- Eigennamen bleiben (Printshop Bloder, Trodat, Shopping City Seiersberg, …).
- Slowenisch: Höflichkeitsform (vikanje). Ukrainisch: „Ви“, echtes Ukrainisch – keine
  russischen Buchstaben/Wörter (ы, э, ъ, ё sind ein Warnsignal); Einheiten `мм`, `см`, `г`.
- Englisch: britische Schreibweise (colour, customise), Preise erzeugt der Code als `€0.90`.

## 3. Prüfen

- `npm test`: Abschnitt „Sprachen“ vergleicht Tabellen, Links und Preise mit Deutsch und
  weist auf deutsche Textreste hin.
- Schnappschuss-Meldungen durchsehen, dann `npm run test:update`, `npm test` grün, committen.
- Dem Nutzer neue oder unsichere Begriffe nennen und darauf hinweisen, dass Muttersprachler
  gegenlesen sollten.
