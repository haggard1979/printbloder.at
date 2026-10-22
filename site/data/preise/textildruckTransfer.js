/*
 * Preistabellen für textildruckTransfer.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Inkl. T-Shirt", "en": "Including T-shirt", "sl": "Vključno z majico", "uk": "З футболкою"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 24.9, 29.9, 21.9, {"p": 4.5, "plus": true}, {"p": 4.5, "plus": true}],
            [{"de": "Ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "Від 3 шт."}, 19.9, 26.9, 16.9, {"p": 4.5, "plus": true}, {"p": 3.9, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт."}, 17.9, 22.9, 14.9, {"p": 4.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт."}, 13.9, 19.9, 11.9, {"p": 3.5, "plus": true}, {"p": 2.5, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт."}, 11.9, 17.9, 11.9, {"p": 2.5, "plus": true}, {"p": 2.1, "plus": true}],
            [{"de": "Ab 100 Stk.", "en": "From 100 pcs", "sl": "od 100 kos", "uk": "Від 100 шт."}, 10.9, 13.9, 8.9, {"p": 2.5, "plus": true}, {"p": 1.9, "plus": true}]
        ]
    },
    {
        caption: {"de": "Nur Druck", "en": "Printing only", "sl": "Samo tisk", "uk": "Лише друк"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 19.9, 24.9, 17.9, {"p": 4.5, "plus": true}, {"p": 4.5, "plus": true}],
            [{"de": "Ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "Від 3 шт."}, 16.9, 20.9, 11.9, {"p": 4.5, "plus": true}, {"p": 3.9, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт."}, 11.9, 16.9, 9.9, {"p": 4.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт."}, 9.9, 13.9, 8.9, {"p": 3.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт."}, 7.9, 11.9, 8.0, {"p": 2.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 100 Stk.", "en": "From 100 pcs", "sl": "od 100 kos", "uk": "Від 100 шт."}, 7.5, 10.9, 6.9, {"p": 2.5, "plus": true}, {"p": 2.9, "plus": true}]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Zusatzleistung", "en": "Additional service", "sl": "Dodatna storitev", "uk": "Додаткова послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "zusätzlicher Textaufdruck", "en": "additional text print", "sl": "dodatno besedilo", "uk": "додатковий текстовий надрук"}, {"p": 3.0, "plus": true}],
            [{"de": "Damenshirt", "en": "Women's T-shirt", "sl": "Ženska majica", "uk": "жіноча футболка"}, {"p": 4.0, "plus": true}],
            [{"de": "Polo", "en": "Polo shirt", "sl": "Polo majica", "uk": "поло"}, {"p": 12.9, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)"}, 16.9]
        ]
    }
];
