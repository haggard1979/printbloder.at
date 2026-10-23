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
        caption: {"de": "DIN A2 (420 × 594 mm)", "en": "DIN A2 (420 × 594 mm)", "sl": "DIN A2 (420 × 594 mm)", "uk": "DIN A2 (420 × 594 мм)", "hu": "DIN A2 (420 × 594 mm)", "it": "DIN A2 (420 × 594 mm)", "hr": "DIN A2 (420 × 594 mm)"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "Hochglanzpapier", "en": "Glossy paper", "sl": "Sijajni papir", "uk": "Глянцевий папір", "hu": "Fényes papír", "it": "Carta lucida", "hr": "Sjajni papir"}, {"de": "Klebefolie", "en": "Adhesive vinyl", "sl": "Samolepilna folija", "uk": "Самоклеюча плівка", "hu": "Öntapadó fólia", "it": "Pellicola adesiva", "hr": "Samoljepljiva folija"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 19.9, 29.0],
            [{"de": "ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт.", "hu": "2 db-tól", "it": "da 2 pz.", "hr": "od 2 kom."}, 16.4, 26.0],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт.", "hu": "5 db-tól", "it": "da 5 pz.", "hr": "od 5 kom."}, 12.9, 22.0],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт.", "hu": "10 db-tól", "it": "da 10 pz.", "hr": "od 10 kom."}, 11.9, 21.0],
            [{"de": "ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "від 25 шт.", "hu": "25 db-tól", "it": "da 25 pz.", "hr": "od 25 kom."}, 10.4, 20.0]
        ]
    },
    {
        caption: {"de": "DIN A1 (594 × 840 mm)", "en": "DIN A1 (594 × 840 mm)", "sl": "DIN A1 (594 × 840 mm)", "uk": "DIN A1 (594 × 840 мм)", "hu": "DIN A1 (594 × 840 mm)", "it": "DIN A1 (594 × 840 mm)", "hr": "DIN A1 (594 × 840 mm)"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "Hochglanzpapier", "en": "Glossy paper", "sl": "Sijajni papir", "uk": "Глянцевий папір", "hu": "Fényes papír", "it": "Carta lucida", "hr": "Sjajni papir"}, {"de": "Klebefolie", "en": "Adhesive vinyl", "sl": "Samolepilna folija", "uk": "Самоклеюча плівка", "hu": "Öntapadó fólia", "it": "Pellicola adesiva", "hr": "Samoljepljiva folija"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 29.9, 38.0],
            [{"de": "ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт.", "hu": "2 db-tól", "it": "da 2 pz.", "hr": "od 2 kom."}, 24.4, 34.0],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт.", "hu": "5 db-tól", "it": "da 5 pz.", "hr": "od 5 kom."}, 20.9, 30.0],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт.", "hu": "10 db-tól", "it": "da 10 pz.", "hr": "od 10 kom."}, 18.4, 28.0],
            [{"de": "ab 25 Stk.", "en": "From 25 pcs", "sl": "od 25 kos", "uk": "від 25 шт.", "hu": "25 db-tól", "it": "da 25 pz.", "hr": "od 25 kom."}, 14.9, 24.0]
        ]
    },
    {
        caption: {"de": "DIN A0 (840 × 1189 mm)", "en": "DIN A0 (840 × 1189 mm)", "sl": "DIN A0 (840 × 1189 mm)", "uk": "DIN A0 (840 × 1189 мм)", "hu": "DIN A0 (840 × 1189 mm)", "it": "DIN A0 (840 × 1189 mm)", "hr": "DIN A0 (840 × 1189 mm)"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість", "hu": "Mennyiség", "it": "Quantità", "hr": "Količina"}, {"de": "Hochglanzpapier", "en": "Glossy paper", "sl": "Sijajni papir", "uk": "Глянцевий папір", "hu": "Fényes papír", "it": "Carta lucida", "hr": "Sjajni papir"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт.", "hu": "1 db", "it": "1 pz.", "hr": "1 kom."}, 49.9],
            [{"de": "ab 2 Stk.", "en": "From 2 pcs", "sl": "od 2 kos", "uk": "від 2 шт.", "hu": "2 db-tól", "it": "da 2 pz.", "hr": "od 2 kom."}, 39.6],
            [{"de": "ab 5 Stk.", "en": "From 5 pcs", "sl": "od 5 kos", "uk": "від 5 шт.", "hu": "5 db-tól", "it": "da 5 pz.", "hr": "od 5 kom."}, 34.8],
            [{"de": "ab 10 Stk.", "en": "From 10 pcs", "sl": "od 10 kos", "uk": "від 10 шт.", "hu": "10 db-tól", "it": "da 10 pz.", "hr": "od 10 kom."}, 34.8]
        ]
    },
    {
        caption: {"de": "Weitere Möglichkeiten", "en": "Other options", "sl": "Dodatne možnosti", "uk": "Інші можливості", "hu": "További lehetőségek", "it": "Altre possibilità", "hr": "Dodatne mogućnosti"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга", "hu": "Szolgáltatás", "it": "Servizio", "hr": "Usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "Banner bis 2 qm", "en": "Banner up to 2 m²", "sl": "Transparent do 2 m²", "uk": "Банер до 2 м²", "hu": "Molinó 2 m²-ig", "it": "Banner fino a 2 m²", "hr": "Baner do 2 m²"}, {"p": 59.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²", "hu": "m²-enként", "it": "al m²", "hr": "po m²"}}],
            [{"de": "Banner ab 2 qm", "en": "Banner from 2 m²", "sl": "Transparent od 2 m²", "uk": "Банер від 2 м²", "hu": "Molinó 2 m²-től", "it": "Banner da 2 m²", "hr": "Baner od 2 m²"}, {"p": 49.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²", "hu": "m²-enként", "it": "al m²", "hr": "po m²"}}],
            [{"de": "Öse für Banner", "en": "Eyelet for banner", "sl": "Obroček za transparent", "uk": "Люверс для банера", "hu": "Karika a molinóhoz", "it": "Occhiello per banner", "hr": "Ringlica za baner"}, {"p": 0.5, "unit": {"de": "pro Stk.", "en": "per pc", "sl": "na kos", "uk": "за шт.", "hu": "darabonként", "it": "al pezzo", "hr": "po komadu"}}],
            [{"de": "Klebefolie bis 2 qm", "en": "Adhesive vinyl up to 2 m²", "sl": "Samolepilna folija do 2 m²", "uk": "Самоклеюча плівка до 2 м²", "hu": "Öntapadó fólia 2 m²-ig", "it": "Pellicola adesiva fino a 2 m²", "hr": "Samoljepljiva folija do 2 m²"}, {"p": 69.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²", "hu": "m²-enként", "it": "al m²", "hr": "po m²"}}],
            [{"de": "Klebefolie ab 2 qm", "en": "Adhesive vinyl from 2 m²", "sl": "Samolepilna folija od 2 m²", "uk": "Самоклеюча плівка від 2 м²", "hu": "Öntapadó fólia 2 m²-től", "it": "Pellicola adesiva da 2 m²", "hr": "Samoljepljiva folija od 2 m²"}, {"p": 59.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²", "hu": "m²-enként", "it": "al m²", "hr": "po m²"}}],
            [{"de": "Magnetfolie bis 2 qm", "en": "Magnetic film up to 2 m²", "sl": "Magnetna folija do 2 m²", "uk": "Магнітна плівка до 2 м²", "hu": "Mágnesfólia 2 m²-ig", "it": "Pellicola magnetica fino a 2 m²", "hr": "Magnetna folija do 2 m²"}, {"p": 119.8, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²", "hu": "m²-enként", "it": "al m²", "hr": "po m²"}}],
            [{"de": "Magnetfolie ab 2 qm", "en": "Magnetic film from 2 m²", "sl": "Magnetna folija od 2 m²", "uk": "Магнітна плівка від 2 м²", "hu": "Mágnesfólia 2 m²-től", "it": "Pellicola magnetica da 2 m²", "hr": "Magnetna folija od 2 m²"}, {"p": 99.9, "unit": {"de": "pro qm", "en": "per m²", "sl": "na m²", "uk": "за м²", "hu": "m²-enként", "it": "al m²", "hr": "po m²"}}],
            [{"de": "Magnetfolie Zuschnitt", "en": "Magnetic film cut to size", "sl": "Magnetna folija – razrez", "uk": "Магнітна плівка, нарізка", "hu": "Mágnesfólia, méretre vágás", "it": "Pellicola magnetica, taglio su misura", "hr": "Magnetna folija, rezanje po mjeri"}, {"p": 8.0, "unit": {"de": "pro Stk.", "en": "per pc", "sl": "na kos", "uk": "за шт.", "hu": "darabonként", "it": "al pezzo", "hr": "po komadu"}}]
        ]
    }
];

window.PRICE_VALUES = {
    // Mindestaufträge (Hinweis unter den Tabellen)
    mindestauftragKlebefolie: 25,
    mindestauftragBanner: 30
};
