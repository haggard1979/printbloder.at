/*
 * Preistabellen für beschriftung.html - gilt für alle Sprachen (de, en, sl, uk).
 * Preis ändern: nur die Zahl ändern (Punkt statt Komma), z. B. 0.90.
 * Schreibweisen: 0.90 = Preis, {"p": 0.15, "plus": true} = Aufpreis "+0,15 €",
 * {"p": 59.9, "unit": {...}} = Preis mit Einheit, null = "–" (nicht erhältlich),
 * "..." = Text in allen Sprachen gleich, {"de": ..., "en": ...} = übersetzter Text.
 * Jede Zeile: [Zeilenbeschriftung, Wert für Spalte 2, Spalte 3, ...].
 */
window.PRICE_TABLES = [
    {
        caption: {"de": "Klebebuchstaben", "en": "Adhesive letters", "sl": "Nalepljene črke", "uk": "Клейкі літери"},
        columns: [{"de": "Buchstabenhöhe", "en": "Letter height", "sl": "Višina črk", "uk": "Висота літери"}, {"de": "Preis pro Buchstabe", "en": "Price per letter", "sl": "Cena na črko", "uk": "Ціна за літеру"}],
        rows: [
            [{"de": "bis 50 mm", "en": "up to 50 mm", "sl": "do 50 mm", "uk": "до 50 мм"}, 0.51],
            [{"de": "bis 75 mm", "en": "up to 75 mm", "sl": "do 75 mm", "uk": "до 75 мм"}, 0.7],
            [{"de": "bis 100 mm", "en": "up to 100 mm", "sl": "do 100 mm", "uk": "до 100 мм"}, 0.95],
            [{"de": "bis 150 mm", "en": "up to 150 mm", "sl": "do 150 mm", "uk": "до 150 мм"}, 1.4],
            [{"de": "bis 250 mm", "en": "up to 250 mm", "sl": "do 250 mm", "uk": "до 250 мм"}, 2.18],
            [{"de": "bis 350 mm", "en": "up to 350 mm", "sl": "do 350 mm", "uk": "до 350 мм"}, 3.2],
            [{"de": "bis 550 mm", "en": "up to 550 mm", "sl": "do 550 mm", "uk": "до 550 мм"}, 3.5],
            [{"de": "bis 650 mm", "en": "up to 650 mm", "sl": "do 650 mm", "uk": "до 650 мм"}, 4.3]
        ]
    },
    {
        caption: {"de": "Symbole, Logos bei Folienbreite 57 cm", "en": "Symbols and logos at film width 57 cm", "sl": "Simboli, logotipi pri širini folije 57 cm", "uk": "Символи, логотипи при ширині плівки 57 см"},
        columns: [{"de": "Lauflänge", "en": "Length", "sl": "Dolžina", "uk": "Довжина"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            ["10 cm", 20.0],
            ["20 cm", 24.0],
            ["30 cm", 29.0],
            ["40 cm", 34.0],
            ["50 cm", 39.0],
            ["60 cm", 44.0],
            ["70 cm", 49.0],
            ["80 cm", 54.0],
            ["90 cm", 59.0],
            ["100 cm", 64.0]
        ]
    },
    {
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна"}],
        rows: [
            [{"de": "Vektorisierung von Logos (15 min)", "en": "Vectorising logos (15 min)", "sl": "Vektorizacija logotipov (15 min)", "uk": "Векторизація логотипів (15 хв)"}, 16.9],
            [{"de": "Montagestunde", "en": "Installation hour", "sl": "Ura montaže", "uk": "Година монтажу"}, 59.0]
        ]
    }
];

window.PRICE_VALUES = {
    // Mindestauftrag (Hinweis unter den Tabellen)
    mindestauftrag: 15
};
