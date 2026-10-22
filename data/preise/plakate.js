/*
 * Preistabellen für plakate.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "DIN A2 (420 × 594 mm)", "en": "DIN A2 (420 × 594 mm)", "sl": "DIN A2 (420 × 594 mm)", "uk": "DIN A2 (420 × 594 мм)"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "Hochglanzpapier", "en": "Glossy paper", "sl": "Sijajni papir", "uk": "Глянцевий папір"}, {"de": "Klebefolie", "en": "Adhesive vinyl", "sl": "Samolepilna folija", "uk": "Самоклеюча плівка"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 19.9, 29.0],
            [{"de": "ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт."}, 16.4, 26.0],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт."}, 12.9, 22.0],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт."}, 11.9, 21.0],
            [{"de": "ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "від 25 шт."}, 10.4, 20.0]
        ]
    },
    {
        caption: {"de": "DIN A1 (594 × 840 mm)", "en": "DIN A1 (594 × 840 mm)", "sl": "DIN A1 (594 × 840 mm)", "uk": "DIN A1 (594 × 840 мм)"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "Hochglanzpapier", "en": "Glossy paper", "sl": "Sijajni papir", "uk": "Глянцевий папір"}, {"de": "Klebefolie", "en": "Adhesive vinyl", "sl": "Samolepilna folija", "uk": "Самоклеюча плівка"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 29.9, 38.0],
            [{"de": "ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт."}, 24.4, 34.0],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт."}, 20.9, 30.0],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт."}, 18.4, 28.0],
            [{"de": "ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "від 25 шт."}, 14.9, 24.0]
        ]
    },
    {
        caption: {"de": "DIN A0 (840 × 1189 mm)", "en": "DIN A0 (840 × 1189 mm)", "sl": "DIN A0 (840 × 1189 mm)", "uk": "DIN A0 (840 × 1189 мм)"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "Hochglanzpapier", "en": "Glossy paper", "sl": "Sijajni papir", "uk": "Глянцевий папір"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 49.9],
            [{"de": "ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт."}, 39.6],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт."}, 34.8],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт."}, 34.8]
        ]
    },
    {
        caption: {"de": "Weitere Möglichkeiten", "en": "Other options", "sl": "Dodatne možnosti", "uk": "Інші можливості"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "Banner bis 2 qm", "en": "Banner up to 2 m²", "sl": "Transparent do 2 m²", "uk": "Банер до 2 м²"}, {"p": 59.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²"}}],
            [{"de": "Banner ab 2 qm", "en": "Banner from 2 m²", "sl": "Transparent od 2 m²", "uk": "Банер від 2 м²"}, {"p": 49.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²"}}],
            [{"de": "Öse für Banner", "en": "Eyelet for banner", "sl": "Obroček za transparent", "uk": "Люверс для банера"}, {"p": 0.5, "unit": {"de": "pro Stk.", "en": "per pc", "sl": "na kos", "uk": "за шт."}}],
            [{"de": "Klebefolie bis 2 qm", "en": "Adhesive vinyl up to 2 m²", "sl": "Samolepilna folija do 2 m²", "uk": "Самоклеюча плівка до 2 м²"}, {"p": 69.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²"}}],
            [{"de": "Klebefolie ab 2 qm", "en": "Adhesive vinyl from 2 m²", "sl": "Samolepilna folija od 2 m²", "uk": "Самоклеюча плівка від 2 м²"}, {"p": 59.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²"}}],
            [{"de": "Magnetfolie bis 2 qm", "en": "Magnetic film up to 2 m²", "sl": "Magnetna folija do 2 m²", "uk": "Магнітна плівка до 2 м²"}, {"p": 119.8, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²"}}],
            [{"de": "Magnetfolie ab 2 qm", "en": "Magnetic film from 2 m²", "sl": "Magnetna folija od 2 m²", "uk": "Магнітна плівка від 2 м²"}, {"p": 99.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²"}}],
            [{"de": "Magnetfolie Zuschnitt", "en": "Magnetic film cut to size", "sl": "Magnetna folija – razrez", "uk": "Магнітна плівка, нарізка"}, {"p": 8.0, "unit": {"de": "pro Stk.", "en": "per pc", "sl": "na kos", "uk": "за шт."}}]
        ]
    }
];

window.PRICE_VALUES = {
    // Mindestaufträge (Hinweis unter den Tabellen)
    mindestauftragKlebefolie: 25,
    mindestauftragBanner: 30
};
