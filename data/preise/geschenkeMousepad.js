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
        caption: {"de": "Mousepad – Preis pro Stück", "en": "Mouse pad – price per piece", "sl": "Podloga za miško – cena na kos", "uk": "Килимок для миші – ціна за штуку"},
        columns: [{"de": "Menge", "en": "Quantity", "sl": "Količina", "uk": "Кількість"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "1 Stk.", "en": "1 pc", "sl": "1 kos", "uk": "1 шт."}, 19.9],
            [{"de": "ab 3 Stk.", "en": "From 3 pcs", "sl": "od 3 kos", "uk": "від 3 шт."}, 12.9]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "Textaufdruck zu Foto", "en": "Text print added to photo", "sl": "Besedilo k fotografiji", "uk": "Текст до фото"}, {"p": 3.0, "plus": true}],
            [{"de": "Satzkosten (15min)", "en": "Typesetting (15 min)", "sl": "Stroški priprave (15 min)", "uk": "Вартість підготовки макета (15 хв)"}, 16.9]
        ]
    }
];
