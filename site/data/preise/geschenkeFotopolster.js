/*
 * Preistabellen für geschenkeFotopolster.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Polster 40x40", "en": "Cushion 40 × 40", "sl": "Blazina 40x40", "uk": "Подушка 40x40"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig A4", "en": "single-sided A4", "sl": "enostransko A4", "uk": "односторонній A4"}, {"de": "beidseitig A4", "en": "double-sided A4", "sl": "obojestransko A4", "uk": "двосторонній A4"}, {"de": "einseitig A3", "en": "single-sided A3", "sl": "enostransko A3", "uk": "односторонній A3"}, {"de": "beidseitig A3", "en": "double-sided A3", "sl": "obojestransko A3", "uk": "двосторонній A3"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 27.9, 32.9, 32.9, 39.9],
            [{"de": "ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "від 3 шт."}, 24.9, 29.9, 28.9, 34.9],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт."}, 21.9, 25.9, 25.9, 29.9]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "Herzpolster", "en": "Heart-shaped cushion", "sl": "Blazina v obliki srca", "uk": "Подушка-серце"}, {"p": 5.0, "plus": true}],
            [{"de": "Textaufdruck zu Foto", "en": "Text print added to photo", "sl": "Besedilo k fotografiji", "uk": "Текст до фото"}, {"p": 3.0, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)"}, 16.9]
        ]
    }
];
