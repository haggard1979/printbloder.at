/*
 * Preistabellen für firmenVisitkarten.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Farbdruck", "en": "Colour printing", "sl": "Barvni tisk", "uk": "Кольоровий друк", "hu": "Színes nyomtatás", "it": "Stampa a colori", "hr": "Tisak u boji"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}, {"de": "Rückseite S/W", "en": "Back side B&W", "sl": "Zadnja stran č/b", "uk": "Зворот Ч/Б", "hu": "Hátoldal f/f", "it": "Retro B/N", "hr": "Poleđina c/b"}],
        rows: [
            [{"de": "30 Stk.", "en": "30 pcs", "sl": "30 kos", "uk": "30 шт.", "hu": "30 db", "it": "30 pz.", "hr": "30 kom."}, 23.9, null, null],
            [{"de": "50 Stk.", "en": "50 pcs", "sl": "50 kos", "uk": "50 шт.", "hu": "50 db", "it": "50 pz.", "hr": "50 kom."}, 27.9, null, null],
            [{"de": "100 Stk.", "en": "100 pcs", "sl": "100 kos", "uk": "100 шт.", "hu": "100 db", "it": "100 pz.", "hr": "100 kom."}, 39.9, 59.9, 49.5],
            [{"de": "200 Stk.", "en": "200 pcs", "sl": "200 kos", "uk": "200 шт.", "hu": "200 db", "it": "200 pz.", "hr": "200 kom."}, 59.8, 74.8, 68.5],
            [{"de": "500 Stk.", "en": "500 pcs", "sl": "500 kos", "uk": "500 шт.", "hu": "500 db", "it": "500 pz.", "hr": "500 kom."}, 104.5, 149.9, 119.9],
            [{"de": "1000 Stk.", "en": "1000 pcs", "sl": "1000 kos", "uk": "1000 шт.", "hu": "1000 db", "it": "1000 pz.", "hr": "1000 kom."}, 178.0, 199.9, 189.5],
            [{"de": "+100 Stk.", "en": "+100 pcs", "sl": "+100 kos", "uk": "+100 шт.", "hu": "+100 db", "it": "+100 pz.", "hr": "+100 kom."}, {"p": 14.9, "plus": true}, {"p": 7.45, "plus": true}, {"p": 3.5, "plus": true}]
        ]
    },
    {
        caption: {"de": "Schwarz-/Weiß-Druck", "en": "Black & white printing", "sl": "Črno-beli tisk", "uk": "Чорно-білий друк", "hu": "Fekete-fehér nyomtatás", "it": "Stampa in bianco e nero", "hr": "Crno-bijeli tisak"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}],
        rows: [
            [{"de": "30 Stk.", "en": "30 pcs", "sl": "30 kos", "uk": "30 шт.", "hu": "30 db", "it": "30 pz.", "hr": "30 kom."}, 16.9, 27.9],
            [{"de": "50 Stk.", "en": "50 pcs", "sl": "50 kos", "uk": "50 шт.", "hu": "50 db", "it": "50 pz.", "hr": "50 kom."}, 19.9, 34.9],
            [{"de": "100 Stk.", "en": "100 pcs", "sl": "100 kos", "uk": "100 шт.", "hu": "100 db", "it": "100 pz.", "hr": "100 kom."}, 29.9, 48.5],
            [{"de": "200 Stk.", "en": "200 pcs", "sl": "200 kos", "uk": "200 шт.", "hu": "200 db", "it": "200 pz.", "hr": "200 kom."}, 39.8, 66.5],
            [{"de": "500 Stk.", "en": "500 pcs", "sl": "500 kos", "uk": "500 шт.", "hu": "500 db", "it": "500 pz.", "hr": "500 kom."}, 63.5, 99.25],
            [{"de": "1000 Stk.", "en": "1000 pcs", "sl": "1000 kos", "uk": "1000 шт.", "hu": "1000 db", "it": "1000 pz.", "hr": "1000 kom."}, 89.0, 168.5],
            [{"de": "+100 Stk.", "en": "+100 pcs", "sl": "+100 kos", "uk": "+100 шт.", "hu": "+100 db", "it": "+100 pz.", "hr": "+100 kom."}, {"p": 8.9, "plus": true}, {"p": 4.45, "plus": true}]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Zusatzleistung", "en": "Additional service", "sl": "Dodatna storitev", "uk": "Додаткова послуга", "hu": "Kiegészítő szolgáltatás", "it": "Servizio aggiuntivo", "hr": "Dodatna usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "Runden je +100 Stk.", "en": "Rounded corners per +100 pcs", "sl": "Zaobljenje vogalov na vsakih +100 kos", "uk": "Заокруглення кутів за кожні +100 шт.", "hu": "Sarokgömbölés +100 db-onként", "it": "Angoli arrotondati ogni +100 pz.", "hr": "Zaobljeni kutovi po +100 kom."}, 3.6],
            [{"de": "Laminieren 100 Stk.", "en": "Lamination 100 pcs", "sl": "Laminiranje 100 kos", "uk": "Ламінування 100 шт.", "hu": "Laminálás 100 db", "it": "Plastificazione 100 pz.", "hr": "Laminiranje 100 kom."}, 13.9],
            [{"de": "Laminieren +100 Stk.", "en": "Lamination +100 pcs", "sl": "Laminiranje +100 kos", "uk": "Ламінування +100 шт.", "hu": "Laminálás +100 db", "it": "Plastificazione +100 pz.", "hr": "Laminiranje +100 kom."}, 9.9],
            [{"de": "Laminieren in Einzeltasche je", "en": "Lamination in single pouch each", "sl": "Laminiranje v posamezni žepek, na kos", "uk": "Ламінування в окремий конверт, за шт.", "hu": "Laminálás egyedi tasakban, darabonként", "it": "Plastificazione in singola busta, cad.", "hr": "Laminiranje u pojedinačnoj navlaci, po komadu"}, 0.3],
            [{"de": "Laminieren zum Kleben 100 Stk.", "en": "Adhesive lamination 100 pcs", "sl": "Laminiranje za lepljenje 100 kos", "uk": "Ламінування з клейким шаром 100 шт.", "hu": "Öntapadós laminálás 100 db", "it": "Plastificazione adesiva 100 pz.", "hr": "Samoljepljivo laminiranje 100 kom."}, 49.8]
        ]
    }
];
