---
name: preis-aendern
description: Preise auf printbloder.at ändern – Produktpreise, Staffelpreise, Aufpreise, Mindestbeträge oder prozentuale Preiserhöhungen. Verwenden, wenn der Nutzer neue Preise nennt („… kostet jetzt …“, „Preiserhöhung“, „Preise anpassen“, „Preisänderung“).
---

# Preis ändern

Jeder Preis steht genau einmal in `site/data/` und gilt für alle vier Sprachen. Preise im HTML
gibt es nicht – findest du dort einen, ist das ein Fehler (in die Daten verlagern).

## 1. Stelle finden

- Produkte (Stempel, Hausschilder, Zubehör): `site/data/*.js` → `price`, `extras`.
- Staffelpreise/Tabellen: `site/data/preise/<seite>.js` → `PRICE_TABLES`; Einzelbeträge im
  Fließtext (Mindestauftrag, Mindestverrechnung) → `PRICE_VALUES`.
- Suchen: `grep -rn "<Produktname oder Zeilenbeschriftung>" site/data/`
- In Tabellen gehört der Wert an Position `i` einer Zeile zur Spalte `columns[i]`
  (Position 0 = Zeilenbeschriftung). Seite, Tabellenüberschrift, Zeile und Spalte nennen.
- Mehrdeutig (z. B. „ab 5 Stk.“ steht in vielen Tabellen)? Beim Nutzer nachfragen, statt zu raten.

## 2. Ändern

- Nur die Zahl ändern, Punkt statt Komma (`0.95`). Die Schreibweise beibehalten:
  Aufpreis `{"p": 0.15, "plus": true}`, Preis mit Einheit `{"p": …, "unit": …}`, `null` = „–“.
- Prozentuale Erhöhung: neue Preise ausrechnen und vor dem Ändern eine Tabelle alt → neu
  zeigen. Rundungsregel (z. B. auf ,90) beim Nutzer erfragen, wenn sie nicht genannt wurde.
- Nie Preise erfinden oder „glätten“, die der Nutzer nicht genannt hat.

## 3. Prüfen

1. `npm test` – der Schnappschuss-Test zeigt jede geänderte Zeile (`-` alt, `+` neu),
   je geänderter Seite einmal pro Sprache (de, en, sl, uk).
2. Jede gemeldete Zeile mit der gewollten Änderung abgleichen. Taucht etwas anderes auf: stoppen
   und klären.
3. `npm run test:update`, danach `npm test` → muss grün sein.

## 4. Abschließen

- Commit mit Daten- und Schnappschuss-Dateien, z. B. „Preisänderung: Trodat Printy 4910 31,50 €“.
- Dem Nutzer eine Übersicht alt → neu geben (Seite, Artikel/Zeile, Preis).
- Online stellen nur auf Wunsch → Skill `veroeffentlichen`.
