/*
 * Preistabellen für psVisitkarten.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Schwarzweißdruck", "en": "Black-and-white printing", "sl": "Črno-beli tisk", "uk": "Чорно-білий друк"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній"}],
        rows: [
            [{"de": "ab 30 Stk.", "en": "from 30 pcs", "sl": "od 30 kos", "uk": "від 30 шт."}, 16.9, 27.9],
            [{"de": "ab 50 Stk.", "en": "from 50 pcs", "sl": "od 50 kos", "uk": "від 50 шт."}, 19.9, 34.9],
            [{"de": "ab 100 Stk.", "en": "from 100 pcs", "sl": "od 100 kos", "uk": "від 100 шт."}, 29.9, 48.5],
            [{"de": "ab 200 Stk.", "en": "from 200 pcs", "sl": "od 200 kos", "uk": "від 200 шт."}, 39.8, 66.5],
            [{"de": "ab 500 Stk.", "en": "from 500 pcs", "sl": "od 500 kos", "uk": "від 500 шт."}, 63.5, 99.25],
            [{"de": "ab 1000 Stk.", "en": "from 1000 pcs", "sl": "od 1000 kos", "uk": "від 1000 шт."}, 89.0, 168.5]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "Runden", "en": "Rounded corners", "sl": "Zaobljenje vogalov", "uk": "Заокруглення кутів"}, {"de": "Laminieren", "en": "Lamination", "sl": "Laminiranje", "uk": "Ламінування"}, {"de": "Laminieren in Einzeltaschen", "en": "Lamination in single pouches", "sl": "Laminiranje v posamezne žepke", "uk": "Ламінування в окремі конверти"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, null, null, 0.3],
            [{"de": "100 Stk.", "en": "100 pcs", "sl": "100 kos", "uk": "100 шт."}, 3.6, 19.9, null],
            [{"de": "weitere 100 Stk.", "en": "another 100 pcs", "sl": "dodatnih 100 kos", "uk": "кожні наступні 100 шт."}, null, 9.9, null]
        ]
    }
];
