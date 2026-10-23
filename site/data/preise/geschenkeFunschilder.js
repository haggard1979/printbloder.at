/*
 * Preistabellen für geschenkeFunschilder.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Funschilder", "en": "Fun signs", "sl": "Zabavne table", "uk": "Жартівливі таблички", "hu": "Vicces táblák", "it": "Targhe divertenti", "hr": "Zabavne ploče"},
        columns: [{"de": "Artikel", "en": "Item", "sl": "Izdelek", "uk": "Товар", "hu": "Termék", "it": "Articolo", "hr": "Artikl"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "Funschild groß (52x11cm)", "en": "Large fun sign (52 × 11 cm)", "sl": "Zabavna tabla velika (52x11 cm)", "uk": "Жартівлива табличка велика (52x11 см)", "hu": "Vicces tábla, nagy (52 × 11 cm)", "it": "Targa divertente grande (52 × 11 cm)", "hr": "Zabavna ploča, velika (52 × 11 cm)"}, 33.9],
            [{"de": "Funschild Bobbycar", "en": "Bobby car fun sign", "sl": "Zabavna tabla za bobby car", "uk": "Жартівлива табличка для дитячої машинки", "hu": "Vicces tábla – Bobby Car", "it": "Targa divertente Bobby Car", "hr": "Zabavna ploča Bobby Car"}, 27.9]
        ]
    }
];
