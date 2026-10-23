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
        caption: {"de": "Inkl. T-Shirt", "en": "Including T-shirt", "sl": "Vključno z majico", "uk": "З футболкою", "hu": "Pólóval együtt", "it": "Con T-shirt inclusa", "hr": "Majica uključena"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип", "hu": "csak logó", "it": "solo logo", "hr": "samo logotip"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип", "hu": "+logó", "it": "+logo", "hr": "+logotip"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 24.9, 29.9, 21.9, {"p": 4.5, "plus": true}, {"p": 4.5, "plus": true}],
            [{"de": "Ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "Від 3 шт.", "hu": "3 db-tól", "it": "Da 3 pz.", "hr": "Od 3 kom."}, 19.9, 26.9, 16.9, {"p": 4.5, "plus": true}, {"p": 3.9, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт.", "hu": "10 db-tól", "it": "Da 10 pz.", "hr": "Od 10 kom."}, 17.9, 22.9, 14.9, {"p": 4.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт.", "hu": "25 db-tól", "it": "Da 25 pz.", "hr": "Od 25 kom."}, 13.9, 19.9, 11.9, {"p": 3.5, "plus": true}, {"p": 2.5, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт.", "hu": "50 db-tól", "it": "Da 50 pz.", "hr": "Od 50 kom."}, 11.9, 17.9, 11.9, {"p": 2.5, "plus": true}, {"p": 2.1, "plus": true}],
            [{"de": "Ab 100 Stk.", "en": "From 100 pcs", "sl": "od 100 kos", "uk": "Від 100 шт.", "hu": "100 db-tól", "it": "Da 100 pz.", "hr": "Od 100 kom."}, 10.9, 13.9, 8.9, {"p": 2.5, "plus": true}, {"p": 1.9, "plus": true}]
        ]
    },
    {
        caption: {"de": "Nur Druck", "en": "Printing only", "sl": "Samo tisk", "uk": "Лише друк", "hu": "Csak nyomás", "it": "Solo stampa", "hr": "Samo tisak"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}, {"de": "nur Logo", "en": "logo only", "sl": "samo logotip", "uk": "лише логотип", "hu": "csak logó", "it": "solo logo", "hr": "samo logotip"}, {"de": "+Logo", "en": "+logo", "sl": "+logotip", "uk": "+логотип", "hu": "+logó", "it": "+logo", "hr": "+logotip"}, "+A3"],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 19.9, 24.9, 17.9, {"p": 4.5, "plus": true}, {"p": 4.5, "plus": true}],
            [{"de": "Ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "Від 3 шт.", "hu": "3 db-tól", "it": "Da 3 pz.", "hr": "Od 3 kom."}, 16.9, 20.9, 11.9, {"p": 4.5, "plus": true}, {"p": 3.9, "plus": true}],
            [{"de": "Ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "Від 10 шт.", "hu": "10 db-tól", "it": "Da 10 pz.", "hr": "Od 10 kom."}, 11.9, 16.9, 9.9, {"p": 4.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "Від 25 шт.", "hu": "25 db-tól", "it": "Da 25 pz.", "hr": "Od 25 kom."}, 9.9, 13.9, 8.9, {"p": 3.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 50 Stk.", "en": "From 50 pcs", "sl": "od 50 kos", "uk": "Від 50 шт.", "hu": "50 db-tól", "it": "Da 50 pz.", "hr": "Od 50 kom."}, 7.9, 11.9, 8.0, {"p": 2.5, "plus": true}, {"p": 2.9, "plus": true}],
            [{"de": "Ab 100 Stk.", "en": "From 100 pcs", "sl": "od 100 kos", "uk": "Від 100 шт.", "hu": "100 db-tól", "it": "Da 100 pz.", "hr": "Od 100 kom."}, 7.5, 10.9, 6.9, {"p": 2.5, "plus": true}, {"p": 2.9, "plus": true}]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Zusatzleistung", "en": "Additional service", "sl": "Dodatna storitev", "uk": "Додаткова послуга", "hu": "Kiegészítő szolgáltatás", "it": "Servizio aggiuntivo", "hr": "Dodatna usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "zusätzlicher Textaufdruck", "en": "additional text print", "sl": "dodatno besedilo", "uk": "додатковий текстовий надрук", "hu": "további szövegnyomtatás", "it": "stampa di testo aggiuntiva", "hr": "dodatni tisak teksta"}, {"p": 3.0, "plus": true}],
            [{"de": "Damenshirt", "en": "Women's T-shirt", "sl": "Ženska majica", "uk": "жіноча футболка", "hu": "Női póló", "it": "T-shirt donna", "hr": "Ženska majica"}, {"p": 4.0, "plus": true}],
            [{"de": "Polo", "en": "Polo shirt", "sl": "Polo majica", "uk": "поло", "hu": "Galléros póló", "it": "Polo", "hr": "Polo majica"}, {"p": 12.9, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)", "hu": "Előkészítési költség (15 perc)", "it": "Costi di preparazione (15 min)", "hr": "Troškovi pripreme (15 min)"}, 16.9]
        ]
    }
];
