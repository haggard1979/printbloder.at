/*
 * Preistabellen für psVisitkarten.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Schwarzweißdruck", "en": "Black-and-white printing", "sl": "Črno-beli tisk", "uk": "Чорно-білий друк", "hu": "Fekete-fehér nyomtatás", "it": "Stampa in bianco e nero", "hr": "Crno-bijeli tisak"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "einseitig", "en": "single-sided", "sl": "enostransko", "uk": "односторонній", "hu": "egyoldalas", "it": "fronte", "hr": "jednostrano"}, {"de": "beidseitig", "en": "double-sided", "sl": "obojestransko", "uk": "двосторонній", "hu": "kétoldalas", "it": "fronte-retro", "hr": "obostrano"}],
        rows: [
            [{"de": "ab 30 Stk.", "en": "from 30 pcs", "sl": "od 30 kos", "uk": "від 30 шт.", "hu": "30 db-tól", "it": "da 30 pz.", "hr": "od 30 kom."}, 16.9, 27.9],
            [{"de": "ab 50 Stk.", "en": "from 50 pcs", "sl": "od 50 kos", "uk": "від 50 шт.", "hu": "50 db-tól", "it": "da 50 pz.", "hr": "od 50 kom."}, 19.9, 34.9],
            [{"de": "ab 100 Stk.", "en": "from 100 pcs", "sl": "od 100 kos", "uk": "від 100 шт.", "hu": "100 db-tól", "it": "da 100 pz.", "hr": "od 100 kom."}, 29.9, 48.5],
            [{"de": "ab 200 Stk.", "en": "from 200 pcs", "sl": "od 200 kos", "uk": "від 200 шт.", "hu": "200 db-tól", "it": "da 200 pz.", "hr": "od 200 kom."}, 39.8, 66.5],
            [{"de": "ab 500 Stk.", "en": "from 500 pcs", "sl": "od 500 kos", "uk": "від 500 шт.", "hu": "500 db-tól", "it": "da 500 pz.", "hr": "od 500 kom."}, 63.5, 99.25],
            [{"de": "ab 1000 Stk.", "en": "from 1000 pcs", "sl": "od 1000 kos", "uk": "від 1000 шт.", "hu": "1000 db-tól", "it": "da 1000 pz.", "hr": "od 1000 kom."}, 89.0, 168.5]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "Runden", "en": "Rounded corners", "sl": "Zaobljenje vogalov", "uk": "Заокруглення кутів", "hu": "Sarokgömbölés", "it": "Angoli arrotondati", "hr": "Zaobljeni kutovi"}, {"de": "Laminieren", "en": "Lamination", "sl": "Laminiranje", "uk": "Ламінування", "hu": "Laminálás", "it": "Plastificazione", "hr": "Laminiranje"}, {"de": "Laminieren in Einzeltaschen", "en": "Lamination in single pouches", "sl": "Laminiranje v posamezne žepke", "uk": "Ламінування в окремі конверти", "hu": "Laminálás egyedi tasakban", "it": "Plastificazione in buste singole", "hr": "Laminiranje u pojedinačnim navlakama"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, null, null, 0.3],
            [{"de": "100 Stk.", "en": "100 pcs", "sl": "100 kos", "uk": "100 шт.", "hu": "100 db", "it": "100 pz.", "hr": "100 kom."}, 3.6, 19.9, null],
            [{"de": "weitere 100 Stk.", "en": "another 100 pcs", "sl": "dodatnih 100 kos", "uk": "кожні наступні 100 шт.", "hu": "további 100 db", "it": "altri 100 pz.", "hr": "još 100 kom."}, null, 9.9, null]
        ]
    }
];
