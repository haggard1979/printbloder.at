/*
 * Preistabellen für geschenkeMousepad.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Mousepad – Preis pro Stück", "en": "Mouse pad – price per piece", "sl": "Podloga za miško – cena na kos", "uk": "Килимок для миші – ціна за штуку", "hu": "Egérpad – ár darabonként", "it": "Tappetino per mouse – prezzo al pezzo", "hr": "Podloga za miš – cijena po komadu"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 19.9],
            [{"de": "ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "від 3 шт.", "hu": "3 db-tól", "it": "da 3 pz.", "hr": "od 3 kom."}, 12.9]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга", "hu": "Szolgáltatás", "it": "Servizio", "hr": "Usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "Textaufdruck zu Foto", "en": "Text print added to photo", "sl": "Besedilo k fotografiji", "uk": "Текст до фото", "hu": "Szövegnyomtatás a fotóhoz", "it": "Testo stampato sulla foto", "hr": "Tisak teksta uz fotografiju"}, {"p": 3.0, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)", "hu": "Előkészítési költség (15 perc)", "it": "Costi di preparazione (15 min)", "hr": "Troškovi pripreme (15 min)"}, 16.9]
        ]
    }
];
