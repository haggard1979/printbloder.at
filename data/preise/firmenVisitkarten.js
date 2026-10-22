/*
 * Preistabellen für firmenVisitkarten.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Farbdruck", "en": "Colour printing", "sl": "Barvni tisk", "uk": "Кольоровий друк"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній"}, {"de": "Rückseite S/W", "en": "Back side B&W", "sl": "Zadnja stran č/b", "uk": "Зворот Ч/Б"}],
        rows: [
            [{"de": "30 Stk.", "en": "30 pcs", "sl": "30 kos", "uk": "30 шт."}, 23.9, null, null],
            [{"de": "50 Stk.", "en": "50 pcs", "sl": "50 kos", "uk": "50 шт."}, 27.9, null, null],
            [{"de": "100 Stk.", "en": "100 pcs", "sl": "100 kos", "uk": "100 шт."}, 39.9, 59.9, 49.5],
            [{"de": "200 Stk.", "en": "200 pcs", "sl": "200 kos", "uk": "200 шт."}, 59.8, 74.8, 68.5],
            [{"de": "500 Stk.", "en": "500 pcs", "sl": "500 kos", "uk": "500 шт."}, 104.5, 149.9, 119.9],
            [{"de": "1000 Stk.", "en": "1000 pcs", "sl": "1000 kos", "uk": "1000 шт."}, 178.0, 199.9, 189.5],
            [{"de": "+100 Stk.", "en": "+100 pcs", "sl": "+100 kos", "uk": "+100 шт."}, 14.9, {"p": 7.45, "plus": true}, {"p": 3.5, "plus": true}]
        ]
    },
    {
        caption: {"de": "Schwarz-/Weiß-Druck", "en": "Black & white printing", "sl": "Črno-beli tisk", "uk": "Чорно-білий друк"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній"}],
        rows: [
            [{"de": "30 Stk.", "en": "30 pcs", "sl": "30 kos", "uk": "30 шт."}, 16.9, 27.9],
            [{"de": "50 Stk.", "en": "50 pcs", "sl": "50 kos", "uk": "50 шт."}, 19.9, 34.9],
            [{"de": "100 Stk.", "en": "100 pcs", "sl": "100 kos", "uk": "100 шт."}, 29.9, 48.5],
            [{"de": "200 Stk.", "en": "200 pcs", "sl": "200 kos", "uk": "200 шт."}, 39.8, 66.5],
            [{"de": "500 Stk.", "en": "500 pcs", "sl": "500 kos", "uk": "500 шт."}, 63.5, 99.25],
            [{"de": "1000 Stk.", "en": "1000 pcs", "sl": "1000 kos", "uk": "1000 шт."}, 89.0, 168.5],
            [{"de": "+100 Stk.", "en": "+100 pcs", "sl": "+100 kos", "uk": "+100 шт."}, 8.9, {"p": 4.45, "plus": true}]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Zusatzleistung", "en": "Additional service", "sl": "Dodatna storitev", "uk": "Додаткова послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "Runden je +100 Stk.", "en": "Rounded corners per +100 pcs", "sl": "Zaobljenje vogalov na vsakih +100 kos", "uk": "Заокруглення кутів за кожні +100 шт."}, 3.6],
            [{"de": "Laminieren 100 Stk.", "en": "Lamination 100 pcs", "sl": "Laminiranje 100 kos", "uk": "Ламінування 100 шт."}, 13.9],
            [{"de": "Laminieren +100 Stk.", "en": "Lamination +100 pcs", "sl": "Laminiranje +100 kos", "uk": "Ламінування +100 шт."}, 9.9],
            [{"de": "Laminieren in Einzeltasche je", "en": "Lamination in single pouch each", "sl": "Laminiranje v posamezni žepek, na kos", "uk": "Ламінування в окремий конверт, за шт."}, 0.3],
            [{"de": "Laminieren zum Kleben 100 Stk.", "en": "Adhesive lamination 100 pcs", "sl": "Laminiranje za lepljenje 100 kos", "uk": "Ламінування з клейким шаром 100 шт."}, 49.8]
        ]
    }
];
