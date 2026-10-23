/*
 * Preistabellen für schilderAlu.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Alu-Dibond Verbundschild – Größen und Preise", "en": "Alu-Dibond composite sign – sizes and prices", "sl": "Kompozitna tabla Alu-Dibond – velikosti in cene", "uk": "Композитна табличка Alu-Dibond – розміри та ціни", "hu": "Alu-Dibond kompozit tábla – méretek és árak", "it": "Targa composita Alu-Dibond – dimensioni e prezzi", "hr": "Kompozitna ploča Alu-Dibond – veličine i cijene"},
        columns: [{"de": "Max. Format", "en": "Max. size", "sl": "Maks. format", "uk": "Макс. формат", "hu": "Max. méret", "it": "Formato max.", "hr": "Maks. format"}, {"de": "Bohrungen", "en": "Drill holes", "sl": "Izvrtine", "uk": "Отвори", "hu": "Furatok", "it": "Fori", "hr": "Provrti"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}, {"de": "ab 3 Stk.", "en": "from 3 pcs", "sl": "od 3 kos", "uk": "від 3 шт.", "hu": "3 db-tól", "it": "da 3 pz.", "hr": "od 3 kom."}],
        rows: [
            [{"de": "30 × 20 cm", "en": "30 × 20 cm", "sl": "30 × 20 cm", "uk": "30 × 20 см", "hu": "30 × 20 cm", "it": "30 × 20 cm", "hr": "30 × 20 cm"}, "4", 39.9, 33.9],
            [{"de": "40 × 30 cm", "en": "40 × 30 cm", "sl": "40 × 30 cm", "uk": "40 × 30 см", "hu": "40 × 30 cm", "it": "40 × 30 cm", "hr": "40 × 30 cm"}, "4", 49.9, 42.9],
            [{"de": "60 × 40 cm", "en": "60 × 40 cm", "sl": "60 × 40 cm", "uk": "60 × 40 см", "hu": "60 × 40 cm", "it": "60 × 40 cm", "hr": "60 × 40 cm"}, "4", 59.9, 50.9],
            [{"de": "80 × 60 cm", "en": "80 × 60 cm", "sl": "80 × 60 cm", "uk": "80 × 60 см", "hu": "80 × 60 cm", "it": "80 × 60 cm", "hr": "80 × 60 cm"}, "4", 79.9, 67.9],
            [{"de": "50 × 70 cm", "en": "50 × 70 cm", "sl": "50 × 70 cm", "uk": "50 × 70 см", "hu": "50 × 70 cm", "it": "50 × 70 cm", "hr": "50 × 70 cm"}, "4", 74.9, 63.9],
            [{"de": "50 × 100 cm", "en": "50 × 100 cm", "sl": "50 × 100 cm", "uk": "50 × 100 см", "hu": "50 × 100 cm", "it": "50 × 100 cm", "hr": "50 × 100 cm"}, "4", 89.9, 76.9],
            [{"de": "70 × 100 cm", "en": "70 × 100 cm", "sl": "70 × 100 cm", "uk": "70 × 100 см", "hu": "70 × 100 cm", "it": "70 × 100 cm", "hr": "70 × 100 cm"}, "4", 99.9, 84.9]
        ]
    }
];
