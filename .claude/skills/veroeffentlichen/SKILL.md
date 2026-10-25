---
name: veroeffentlichen
description: Änderungen an printbloder.at online stellen – Pull Request erstellen, Prüfungen auf GitHub abwarten, zusammenführen und die Veröffentlichung auf GitHub Pages kontrollieren. Verwenden bei „veröffentlichen“, „online stellen“, „live schalten“, „Pull Request erstellen und mergen“.
---

# Veröffentlichen

Veröffentlicht wird automatisch, sobald etwas auf `master` landet: GitHub Actions
(`.github/workflows/website.yml`) führt `npm test` aus und lädt danach `site/` auf GitHub Pages
(https://www.printbloder.at/) und per FTPS auf den Webserver (Job `ftp`). Ist ein Test rot, wird nichts veröffentlicht.

## Ablauf

1. **Vorbereiten:** Arbeit liegt auf einem eigenen Branch (nie direkt auf `master`),
   `npm test` ist lokal grün, alles ist committet und gepusht.
2. **Pull Request** auf `master` erstellen: Titel und Beschreibung auf Deutsch, kurz nach
   Themen gegliedert (was ändert sich für Besucher, Preise, Projekt).
3. **Prüfungen abwarten:** PR-Ereignisse abonnieren, wenn möglich; sonst Status über die
   GitHub-Werkzeuge abfragen. Nicht mit `sleep` warten.
4. **Rot?** Protokoll holen, Fehler lokal nachstellen (die Tests messen mit der Testschrift aus
   `tests/fonts/`, daher gleiche Ergebnisse wie auf GitHub), Ursache beheben, `npm test`, pushen. Tests nie abschwächen oder überspringen.
5. **Zusammenführen** nur mit Auftrag des Nutzers und nur bei grünem Stand:
   Merge-Commit (kein Squash), `expectedHeadSha` = geprüfter Stand.
6. **Veröffentlichung kontrollieren:** Lauf „Prüfen und veröffentlichen“ auf `master` –
   `test`, `deploy` und `ftp` müssen erfolgreich sein. Ergebnis und Adresse dem Nutzer melden.
   Auf `master` wird kein Lauf abgebrochen, ein neuerer wartet. `ftp` meldet fehlende
   Secrets (`FTP_SERVER`, `FTP_USER`, `FTP_PASSWORD`) – die kann nur der Nutzer eintragen.
7. **Danach:** Für weitere Arbeit den Branch neu von `master` beginnen
   (`git fetch origin master && git checkout -B <branch> origin/master`), nie auf einem schon
   zusammengeführten Stand weiterbauen.

## Wenn die Seite nicht erreichbar ist

- Settings → Pages: Source muss „GitHub Actions“ sein.
- Custom domain `www.printbloder.at` eingetragen, DNS-CNAME `www` → `haggard1979.github.io`.
- Diese Einstellungen kann nur der Nutzer ändern – ihm die genauen Schritte nennen.
