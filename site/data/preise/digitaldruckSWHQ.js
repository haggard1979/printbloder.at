/*
 * Preistabellen für digitaldruckSWHQ.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Schwarz-Weiss Druck High Quality", "en": "Black-and-white printing High Quality", "sl": "Črno-beli tisk visoke kakovosti", "uk": "Чорно-білий друк високої якості", "hu": "Fekete-fehér nyomtatás High Quality", "it": "Stampa in bianco e nero High Quality", "hr": "Crno-bijeli tisak High Quality"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "A4-Druck", "en": "A4 print", "sl": "A4 tisk", "uk": "Друк A4", "hu": "A4 nyomtatás", "it": "Stampa A4", "hr": "A4 ispis"}, {"de": "A3-Druck", "en": "A3 print", "sl": "A3 tisk", "uk": "Друк A3", "hu": "A3 nyomtatás", "it": "Stampa A3", "hr": "A3 ispis"}],
        rows: [
            [{"de": "ab 1 Stk.", "en": "from 1 pc", "sl": "od 1 kos", "uk": "від 1 шт.", "hu": "1 db-tól", "it": "da 1 pz.", "hr": "od 1 kom."}, 0.5, 1.0],
            [{"de": "ab 5 Stk.", "en": "from 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт.", "hu": "5 db-tól", "it": "da 5 pz.", "hr": "od 5 kom."}, 0.4, 0.8],
            [{"de": "ab 10 Stk.", "en": "from 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт.", "hu": "10 db-tól", "it": "da 10 pz.", "hr": "od 10 kom."}, 0.35, 0.7],
            [{"de": "ab 25 Stk.", "en": "from 25 pcs", "sl": "od 25 kos", "uk": "від 25 шт.", "hu": "25 db-tól", "it": "da 25 pz.", "hr": "od 25 kom."}, 0.3, 0.6],
            [{"de": "ab 50 Stk.", "en": "from 50 pcs", "sl": "od 50 kos", "uk": "від 50 шт.", "hu": "50 db-tól", "it": "da 50 pz.", "hr": "od 50 kom."}, 0.25, 0.5],
            [{"de": "ab 100 Stk.", "en": "from 100 pcs", "sl": "od 100 kos", "uk": "від 100 шт.", "hu": "100 db-tól", "it": "da 100 pz.", "hr": "od 100 kom."}, 0.2, 0.4],
            [{"de": "ab 250 Stk.", "en": "from 250 pcs", "sl": "od 250 kos", "uk": "від 250 шт.", "hu": "250 db-tól", "it": "da 250 pz.", "hr": "od 250 kom."}, 0.16, 0.32],
            [{"de": "ab 500 Stk.", "en": "from 500 pcs", "sl": "od 500 kos", "uk": "від 500 шт.", "hu": "500 db-tól", "it": "da 500 pz.", "hr": "od 500 kom."}, 0.13, 0.26]
        ]
    },
    {
        caption: {"de": "Einzelzusatzleistungen", "en": "Individual extras", "sl": "Posamezne dodatne storitve", "uk": "Окремі додаткові послуги", "hu": "Egyedi kiegészítők", "it": "Extra singoli", "hr": "Pojedinačni dodaci"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга", "hu": "Szolgáltatás", "it": "Servizio", "hr": "Usluga"}, {"de": "Aufpreis", "en": "Surcharge", "sl": "Doplačilo", "uk": "Доплата", "hu": "Felár", "it": "Supplemento", "hr": "Doplata"}],
        rows: [
            [{"de": "A4 Papier 160 g", "en": "A4 paper 160 g", "sl": "A4 papir 160 g", "uk": "A4 папір 160 г", "hu": "A4 papír 160 g", "it": "Carta A4 160 g", "hr": "A4 papir 160 g"}, {"p": 0.15, "plus": true}],
            [{"de": "A4 Papier 200 g", "en": "A4 paper 200 g", "sl": "A4 papir 200 g", "uk": "A4 папір 200 г", "hu": "A4 papír 200 g", "it": "Carta A4 200 g", "hr": "A4 papir 200 g"}, {"p": 0.25, "plus": true}],
            [{"de": "A4 Papier 250 g", "en": "A4 paper 250 g", "sl": "A4 papir 250 g", "uk": "A4 папір 250 г", "hu": "A4 papír 250 g", "it": "Carta A4 250 g", "hr": "A4 papir 250 g"}, {"p": 0.45, "plus": true}],
            [{"de": "A4 Papier 300 g", "en": "A4 paper 300 g", "sl": "A4 papir 300 g", "uk": "A4 папір 300 г", "hu": "A4 papír 300 g", "it": "Carta A4 300 g", "hr": "A4 papir 300 g"}, {"p": 0.65, "plus": true}],
            [{"de": "A4 Papier 350 g", "en": "A4 paper 350 g", "sl": "A4 papir 350 g", "uk": "A4 папір 350 г", "hu": "A4 papír 350 g", "it": "Carta A4 350 g", "hr": "A4 papir 350 g"}, {"p": 0.75, "plus": true}],
            [{"de": "A4 Etikettenpapier", "en": "A4 label paper", "sl": "A4 papir za nalepke", "uk": "A4 папір для етикеток", "hu": "A4 címkepapír", "it": "Carta per etichette A4", "hr": "A4 papir za naljepnice"}, {"p": 1.5, "plus": true}],
            [{"de": "A4 Overheadfolie", "en": "A4 overhead transparency", "sl": "A4 folija za grafoskop", "uk": "A4 плівка для проєктора", "hu": "A4 írásvetítő fólia", "it": "Lucido per lavagna luminosa A4", "hr": "A4 folija za grafoskop"}, {"p": 0.95, "plus": true}],
            [{"de": "A4 Farbpapier 80 g", "en": "A4 coloured paper 80 g", "sl": "A4 barvni papir 80 g", "uk": "A4 кольоровий папір 80 г", "hu": "A4 színes papír 80 g", "it": "Carta colorata A4 80 g", "hr": "A4 papir u boji 80 g"}, {"p": 0.08, "plus": true}],
            [{"de": "A4 Farbpapier 160 g", "en": "A4 coloured paper 160 g", "sl": "A4 barvni papir 160 g", "uk": "A4 кольоровий папір 160 г", "hu": "A4 színes papír 160 g", "it": "Carta colorata A4 160 g", "hr": "A4 papir u boji 160 g"}, {"p": 0.25, "plus": true}],
            [{"de": "A4 Marmorkarton 160 g", "en": "A4 marbled card 160 g", "sl": "A4 marmorni karton 160 g", "uk": "A4 мармуровий картон 160 г", "hu": "A4 márványkarton 160 g", "it": "Cartoncino marmorizzato A4 160 g", "hr": "A4 mramorni karton 160 g"}, {"p": 0.9, "plus": true}],
            [{"de": "A4 Visitenkartenpapier", "en": "A4 business card paper", "sl": "A4 papir za vizitke", "uk": "A4 папір для візиток", "hu": "A4 névjegykártya-papír", "it": "Carta per biglietti da visita A4", "hr": "A4 papir za posjetnice"}, {"p": 4.5, "plus": true}],
            [{"de": "A4 Fotopapier 250 g", "en": "A4 photo paper 250 g", "sl": "A4 fotopapir 250 g", "uk": "A4 фотопапір 250 г", "hu": "A4 fotópapír 250 g", "it": "Carta fotografica A4 250 g", "hr": "A4 foto papir 250 g"}, {"p": 1.5, "plus": true}],
            [{"de": "A4 PVC Etiketten", "en": "A4 PVC labels", "sl": "A4 PVC nalepke", "uk": "A4 ПВХ-етикетки", "hu": "A4 PVC címkék", "it": "Etichette in PVC A4", "hr": "A4 PVC naljepnice"}, {"p": 5.8, "plus": true}],
            [{"de": "A4 Metallic 290 g", "en": "A4 metallic 290 g", "sl": "A4 Metallic 290 g", "uk": "A4 металік 290 г", "hu": "A4 metál 290 g", "it": "A4 metallizzato 290 g", "hr": "A4 metalik 290 g"}, {"p": 1.35, "plus": true}],
            ["A4 Digital Canvas 350 g", {"p": 1.15, "plus": true}],
            ["A4 Digital Canvas 250 g", {"p": 0.95, "plus": true}],
            ["A4 Rives Tradition", {"p": 0.95, "plus": true}],
            [{"de": "A4 einseitig Silber 240 g", "en": "A4 single-sided silver 240 g", "sl": "A4 enostransko srebrn 240 g", "uk": "A4 односторонній срібний 240 г", "hu": "A4 egyoldalas ezüst 240 g", "it": "A4 argento monofacciale 240 g", "hr": "A4 jednostrano srebrni 240 g"}, {"p": 1.25, "plus": true}],
            [{"de": "A4 einseitig Gold 240 g", "en": "A4 single-sided gold 240 g", "sl": "A4 enostransko zlat 240 g", "uk": "A4 односторонній золотий 240 г", "hu": "A4 egyoldalas arany 240 g", "it": "A4 oro monofacciale 240 g", "hr": "A4 jednostrano zlatni 240 g"}, {"p": 1.25, "plus": true}],
            [{"de": "A3 (sofern verfügbar)", "en": "A3 (if available)", "sl": "A3 (če je na voljo)", "uk": "A3 (за наявності)", "hu": "A3 (ha elérhető)", "it": "A3 (se disponibile)", "hr": "A3 (ako je dostupno)"}, {"de": "Preis A4 × 2", "en": "A4 price × 2", "sl": "Cena A4 × 2", "uk": "Ціна A4 × 2", "hu": "Az A4 ár × 2", "it": "Prezzo A4 × 2", "hr": "Cijena A4 × 2"}]
        ]
    }
];

window.PRICE_VALUES = {
    // Mindestverrechnung erstes Blatt bei Daten per E-Mail, USB-Stick usw. (Hinweis unter den Tabellen)
    mindestverrechnungDaten: 2
};
