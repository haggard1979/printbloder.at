/*
 * Preistabellen für digitaldruckSW.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Schwarz-Weiss Druck", "en": "Black-and-white printing", "sl": "Črno-beli tisk", "uk": "Чорно-білий друк"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "A4-Druck", "en": "A4 print", "sl": "A4 tisk", "uk": "Друк A4"}, {"de": "A3-Druck", "en": "A3 print", "sl": "A3 tisk", "uk": "Друк A3"}],
        rows: [
            [{"de": "ab 1 Stk.", "en": "from 1 pc", "sl": "od 1 kos", "uk": "від 1 шт."}, 0.5, 1.0],
            [{"de": "ab 2 Stk.", "en": "from 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт."}, 0.35, 0.7],
            [{"de": "ab 5 Stk.", "en": "from 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт."}, 0.2, 0.4],
            [{"de": "ab 10 Stk.", "en": "from 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт."}, 0.15, 0.3],
            [{"de": "ab 25 Stk.", "en": "from 25 pcs", "sl": "od 25 kos", "uk": "від 25 шт."}, 0.13, 0.26],
            [{"de": "ab 50 Stk.", "en": "from 50 pcs", "sl": "od 50 kos", "uk": "від 50 шт."}, 0.12, 0.24],
            [{"de": "ab 100 Stk.", "en": "from 100 pcs", "sl": "od 100 kos", "uk": "від 100 шт."}, 0.11, 0.22],
            [{"de": "ab 500 Stk.", "en": "from 500 pcs", "sl": "od 500 kos", "uk": "від 500 шт."}, 0.08, 0.16],
            [{"de": "ab 1000 Stk.", "en": "from 1,000 pcs", "sl": "od 1000 kos", "uk": "від 1000 шт."}, 0.06, 0.12]
        ]
    },
    {
        caption: {"de": "Einzelzusatzleistungen", "en": "Individual extras", "sl": "Posamezne dodatne storitve", "uk": "Окремі додаткові послуги"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга"}, {"de": "Aufpreis", "en": "Surcharge", "sl": "Doplačilo", "uk": "Доплата"}],
        rows: [
            [{"de": "A4 Papier 160 g", "en": "A4 paper 160 g", "sl": "A4 papir 160 g", "uk": "A4 папір 160 г"}, {"p": 0.15, "plus": true}],
            [{"de": "A4 Papier 200 g", "en": "A4 paper 200 g", "sl": "A4 papir 200 g", "uk": "A4 папір 200 г"}, {"p": 0.25, "plus": true}],
            [{"de": "A4 Papier 250 g", "en": "A4 paper 250 g", "sl": "A4 papir 250 g", "uk": "A4 папір 250 г"}, {"p": 0.45, "plus": true}],
            [{"de": "A4 Papier 300 g", "en": "A4 paper 300 g", "sl": "A4 papir 300 g", "uk": "A4 папір 300 г"}, {"p": 0.65, "plus": true}],
            [{"de": "A4 Papier 350 g", "en": "A4 paper 350 g", "sl": "A4 papir 350 g", "uk": "A4 папір 350 г"}, {"p": 0.75, "plus": true}],
            [{"de": "A4 Etikettenpapier", "en": "A4 label paper", "sl": "A4 papir za nalepke", "uk": "A4 папір для етикеток"}, {"p": 1.5, "plus": true}],
            [{"de": "A4 Overheadfolie", "en": "A4 overhead transparency", "sl": "A4 folija za grafoskop", "uk": "A4 плівка для проєктора"}, {"p": 0.95, "plus": true}],
            [{"de": "A4 Farbpapier 80 g", "en": "A4 coloured paper 80 g", "sl": "A4 barvni papir 80 g", "uk": "A4 кольоровий папір 80 г"}, {"p": 0.08, "plus": true}],
            [{"de": "A4 Farbpapier 160 g", "en": "A4 coloured paper 160 g", "sl": "A4 barvni papir 160 g", "uk": "A4 кольоровий папір 160 г"}, {"p": 0.25, "plus": true}],
            [{"de": "A4 Marmorkarton 160 g", "en": "A4 marbled card 160 g", "sl": "A4 marmorni karton 160 g", "uk": "A4 мармуровий картон 160 г"}, {"p": 0.9, "plus": true}],
            [{"de": "A4 Visitenkartenpapier", "en": "A4 business card paper", "sl": "A4 papir za vizitke", "uk": "A4 папір для візиток"}, {"p": 4.5, "plus": true}],
            [{"de": "A4 Fotopapier 250 g", "en": "A4 photo paper 250 g", "sl": "A4 fotopapir 250 g", "uk": "A4 фотопапір 250 г"}, {"p": 1.5, "plus": true}],
            [{"de": "A4 PVC Etiketten", "en": "A4 PVC labels", "sl": "A4 PVC nalepke", "uk": "A4 ПВХ-етикетки"}, {"p": 5.8, "plus": true}],
            [{"de": "A4 Metallic 290 g", "en": "A4 metallic 290 g", "sl": "A4 Metallic 290 g", "uk": "A4 металік 290 г"}, {"p": 1.35, "plus": true}],
            ["A4 Digital Canvas 350 g", {"p": 1.15, "plus": true}],
            ["A4 Digital Canvas 250 g", {"p": 0.95, "plus": true}],
            ["A4 Rives Tradition", {"p": 0.95, "plus": true}],
            [{"de": "A4 einseitig Silber 240 g", "en": "A4 single-sided silver 240 g", "sl": "A4 enostransko srebrn 240 g", "uk": "A4 односторонній срібний 240 г"}, {"p": 1.25, "plus": true}],
            [{"de": "A4 einseitig Gold 240 g", "en": "A4 single-sided gold 240 g", "sl": "A4 enostransko zlat 240 g", "uk": "A4 односторонній золотий 240 г"}, {"p": 1.25, "plus": true}],
            [{"de": "A3 (sofern verfügbar)", "en": "A3 (if available)", "sl": "A3 (če je na voljo)", "uk": "A3 (за наявності)"}, {"de": "Preis A4 × 2", "en": "A4 price × 2", "sl": "Cena A4 × 2", "uk": "Ціна A4 × 2"}]
        ]
    }
];
