/*
 * Preistabellen für geschenkeFototasse.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Fototasse", "en": "Photo mug", "sl": "Foto skodelica", "uk": "Фоточашка"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 21.9],
            [{"de": "ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "від 3 шт."}, 19.9],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт."}, 18.9],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт."}, 15.9],
            [{"de": "ab 20 Stk.", "en": "From 20 pcs", "sl": "od 20 kos", "uk": "від 20 шт."}, 13.9]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "Textaufdruck zu Foto", "en": "Text print added to photo", "sl": "Besedilo k fotografiji", "uk": "Текст до фото"}, {"p": 3.0, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)"}, 16.9]
        ]
    }
];
