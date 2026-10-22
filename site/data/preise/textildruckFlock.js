/*
 * Preistabellen für textildruckFlock.html - gilt für alle Sprachen (de, en, sl, uk).
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
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 29.9, 33.9, 24.9, {"p": 5.9, "plus": true}, {"p": 9.0, "plus": true}],
            [{"de": "Ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "Від 2 шт."}, 26.9, 29.9, 19.9, {"p": 5.9, "plus": true}, {"p": 8.0, "plus": true}],
            [{"de": "Ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "Від 5 шт."}, 22.9, 26.9, 17.9, {"p": 4.9, "plus": true}, {"p": 7.0, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт."}, 18.9, 23.9, 15.9, {"p": 4.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт."}, 15.9, 21.9, 13.9, {"p": 3.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт."}, 14.5, 19.9, 12.9, {"p": 3.0, "plus": true}, {"p": 6.5, "plus": true}]
        ]
    },
    {
        caption: {"de": "Nur Druck", "en": "Printing only", "sl": "Samo tisk", "uk": "Лише друк"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 23.9, 29.9, 19.9, {"p": 5.9, "plus": true}, {"p": 9.0, "plus": true}],
            [{"de": "Ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "Від 2 шт."}, 19.9, 26.9, 17.0, {"p": 5.9, "plus": true}, {"p": 8.0, "plus": true}],
            [{"de": "Ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "Від 5 шт."}, 16.9, 22.9, 14.9, {"p": 4.9, "plus": true}, {"p": 7.0, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт."}, 14.9, 20.9, 12.9, {"p": 4.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт."}, 12.9, 17.9, 10.9, {"p": 3.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт."}, 10.9, 16.9, 7.9, {"p": 3.0, "plus": true}, {"p": 6.5, "plus": true}]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Zusatzleistung", "en": "Additional service", "sl": "Dodatna storitev", "uk": "Додаткова послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "zusätzlicher Textaufdruck", "en": "additional text print", "sl": "dodatno besedilo", "uk": "додатковий текстовий надрук"}, {"p": 3.0, "plus": true}],
            [{"de": "Damenshirt", "en": "Women's T-shirt", "sl": "Ženska majica", "uk": "жіноча футболка"}, {"p": 4.0, "plus": true}],
            [{"de": "Polo", "en": "Polo shirt", "sl": "Polo majica", "uk": "поло"}, {"p": 12.9, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)"}, 16.9],
            [{"de": "Flex/Flock 2 Farben", "en": "Flex/flock 2 colours", "sl": "Fleks/flok 2 barvi", "uk": "Флекс/флок 2 кольори"}, "+30 %"],
            [{"de": "Flex/Flock 3 Farben", "en": "Flex/flock 3 colours", "sl": "Fleks/flok 3 barve", "uk": "Флекс/флок 3 кольори"}, "+50 %"],
            [{"de": "Flex/Flock 4 Farben", "en": "Flex/flock 4 colours", "sl": "Fleks/flok 4 barve", "uk": "Флекс/флок 4 кольори"}, "+80 %"],
            [{"de": "Flex/Flock 5 Farben", "en": "Flex/flock 5 colours", "sl": "Fleks/flok 5 barv", "uk": "Флекс/флок 5 кольорів"}, "+100 %"],
            [{"de": "Flex/Flock 6 Farben", "en": "Flex/flock 6 colours", "sl": "Fleks/flok 6 barv", "uk": "Флекс/флок 6 кольорів"}, "+170 %"]
        ]
    }
];
