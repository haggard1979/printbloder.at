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
        caption: {"de": "Inkl. T-Shirt", "en": "Including T-shirt", "sl": "Vključno z majico", "uk": "З футболкою", "hu": "Pólóval együtt", "it": "Con T-shirt inclusa", "hr": "Majica uključena"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип", "hu": "csak logó", "it": "solo logo", "hr": "samo logotip"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип", "hu": "+logó", "it": "+logo", "hr": "+logotip"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 29.9, 33.9, 24.9, {"p": 5.9, "plus": true}, {"p": 9.0, "plus": true}],
            [{"de": "Ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "Від 2 шт.", "hu": "2 db-tól", "it": "Da 2 pz.", "hr": "Od 2 kom."}, 26.9, 29.9, 19.9, {"p": 5.9, "plus": true}, {"p": 8.0, "plus": true}],
            [{"de": "Ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "Від 5 шт.", "hu": "5 db-tól", "it": "Da 5 pz.", "hr": "Od 5 kom."}, 22.9, 26.9, 17.9, {"p": 4.9, "plus": true}, {"p": 7.0, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт.", "hu": "10 db-tól", "it": "Da 10 pz.", "hr": "Od 10 kom."}, 18.9, 23.9, 15.9, {"p": 4.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт.", "hu": "25 db-tól", "it": "Da 25 pz.", "hr": "Od 25 kom."}, 15.9, 21.9, 13.9, {"p": 3.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт.", "hu": "50 db-tól", "it": "Da 50 pz.", "hr": "Od 50 kom."}, 14.5, 19.9, 12.9, {"p": 3.0, "plus": true}, {"p": 6.5, "plus": true}]
        ]
    },
    {
        caption: {"de": "Nur Druck", "en": "Printing only", "sl": "Samo tisk", "uk": "Лише друк", "hu": "Csak nyomás", "it": "Solo stampa", "hr": "Samo tisak"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип", "hu": "csak logó", "it": "solo logo", "hr": "samo logotip"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип", "hu": "+logó", "it": "+logo", "hr": "+logotip"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 23.9, 29.9, 19.9, {"p": 5.9, "plus": true}, {"p": 9.0, "plus": true}],
            [{"de": "Ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "Від 2 шт.", "hu": "2 db-tól", "it": "Da 2 pz.", "hr": "Od 2 kom."}, 19.9, 26.9, 17.0, {"p": 5.9, "plus": true}, {"p": 8.0, "plus": true}],
            [{"de": "Ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "Від 5 шт.", "hu": "5 db-tól", "it": "Da 5 pz.", "hr": "Od 5 kom."}, 16.9, 22.9, 14.9, {"p": 4.9, "plus": true}, {"p": 7.0, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт.", "hu": "10 db-tól", "it": "Da 10 pz.", "hr": "Od 10 kom."}, 14.9, 20.9, 12.9, {"p": 4.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт.", "hu": "25 db-tól", "it": "Da 25 pz.", "hr": "Od 25 kom."}, 12.9, 17.9, 10.9, {"p": 3.5, "plus": true}, {"p": 6.5, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт.", "hu": "50 db-tól", "it": "Da 50 pz.", "hr": "Od 50 kom."}, 10.9, 16.9, 7.9, {"p": 3.0, "plus": true}, {"p": 6.5, "plus": true}]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Zusatzleistung", "en": "Additional service", "sl": "Dodatna storitev", "uk": "Додаткова послуга", "hu": "Kiegészítő szolgáltatás", "it": "Servizio aggiuntivo", "hr": "Dodatna usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "zusätzlicher Textaufdruck", "en": "additional text print", "sl": "dodatno besedilo", "uk": "додатковий текстовий надрук", "hu": "további szövegnyomtatás", "it": "stampa di testo aggiuntiva", "hr": "dodatni tisak teksta"}, {"p": 3.0, "plus": true}],
            [{"de": "Damenshirt", "en": "Women's T-shirt", "sl": "Ženska majica", "uk": "жіноча футболка", "hu": "Női póló", "it": "T-shirt donna", "hr": "Ženska majica"}, {"p": 4.0, "plus": true}],
            [{"de": "Polo", "en": "Polo shirt", "sl": "Polo majica", "uk": "поло", "hu": "Galléros póló", "it": "Polo", "hr": "Polo majica"}, {"p": 12.9, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)", "hu": "Előkészítési költség (15 perc)", "it": "Costi di preparazione (15 min)", "hr": "Troškovi pripreme (15 min)"}, 16.9],
            [{"de": "Flex/Flock 2 Farben", "en": "Flex/flock 2 colours", "sl": "Fleks/flok 2 barvi", "uk": "Флекс/флок 2 кольори", "hu": "Flex/flock 2 szín", "it": "Flex/flock 2 colori", "hr": "Flex/flock 2 boje"}, "+30 %"],
            [{"de": "Flex/Flock 3 Farben", "en": "Flex/flock 3 colours", "sl": "Fleks/flok 3 barve", "uk": "Флекс/флок 3 кольори", "hu": "Flex/flock 3 szín", "it": "Flex/flock 3 colori", "hr": "Flex/flock 3 boje"}, "+50 %"],
            [{"de": "Flex/Flock 4 Farben", "en": "Flex/flock 4 colours", "sl": "Fleks/flok 4 barve", "uk": "Флекс/флок 4 кольори", "hu": "Flex/flock 4 szín", "it": "Flex/flock 4 colori", "hr": "Flex/flock 4 boje"}, "+80 %"],
            [{"de": "Flex/Flock 5 Farben", "en": "Flex/flock 5 colours", "sl": "Fleks/flok 5 barv", "uk": "Флекс/флок 5 кольорів", "hu": "Flex/flock 5 szín", "it": "Flex/flock 5 colori", "hr": "Flex/flock 5 boja"}, "+100 %"],
            [{"de": "Flex/Flock 6 Farben", "en": "Flex/flock 6 colours", "sl": "Fleks/flok 6 barv", "uk": "Флекс/флок 6 кольорів", "hu": "Flex/flock 6 szín", "it": "Flex/flock 6 colori", "hr": "Flex/flock 6 boja"}, "+170 %"]
        ]
    }
];
