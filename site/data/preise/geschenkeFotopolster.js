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
        caption: {"de": "Polster 40x40", "en": "Cushion 40 × 40", "sl": "Blazina 40x40", "uk": "Подушка 40x40", "hu": "Párna 40 × 40", "it": "Cuscino 40 × 40", "hr": "Jastuk 40 × 40"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig A4", "en": "single-sided A4", "sl": "enostransko A4", "uk": "односторонній A4", "hu": "egyoldalas A4", "it": "fronte A4", "hr": "jednostrano A4"}, {"de": "beidseitig A4", "en": "double-sided A4", "sl": "obojestransko A4", "uk": "двосторонній A4", "hu": "kétoldalas A4", "it": "fronte-retro A4", "hr": "obostrano A4"}, {"de": "einseitig A3", "en": "single-sided A3", "sl": "enostransko A3", "uk": "односторонній A3", "hu": "egyoldalas A3", "it": "fronte A3", "hr": "jednostrano A3"}, {"de": "beidseitig A3", "en": "double-sided A3", "sl": "obojestransko A3", "uk": "двосторонній A3", "hu": "kétoldalas A3", "it": "fronte-retro A3", "hr": "obostrano A3"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 27.9, 32.9, 32.9, 39.9],
            [{"de": "ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "від 3 шт.", "hu": "3 db-tól", "it": "da 3 pz.", "hr": "od 3 kom."}, 24.9, 29.9, 28.9, 34.9],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт.", "hu": "5 db-tól", "it": "da 5 pz.", "hr": "od 5 kom."}, 21.9, 25.9, 25.9, 29.9]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга", "hu": "Szolgáltatás", "it": "Servizio", "hr": "Usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "Herzpolster", "en": "Heart-shaped cushion", "sl": "Blazina v obliki srca", "uk": "Подушка-серце", "hu": "Szív alakú párna", "it": "Cuscino a forma di cuore", "hr": "Jastuk u obliku srca"}, {"p": 5.0, "plus": true}],
            [{"de": "Textaufdruck zu Foto", "en": "Text print added to photo", "sl": "Besedilo k fotografiji", "uk": "Текст до фото", "hu": "Szövegnyomtatás a fotóhoz", "it": "Testo stampato sulla foto", "hr": "Tisak teksta uz fotografiju"}, {"p": 3.0, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)", "hu": "Előkészítési költség (15 perc)", "it": "Costi di preparazione (15 min)", "hr": "Troškovi pripreme (15 min)"}, 16.9]
        ]
    }
];
