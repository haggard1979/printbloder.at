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
        caption: {"de": "Klebebuchstaben", "en": "Adhesive letters", "sl": "Nalepljene črke", "uk": "Клейкі літери", "hu": "Ragasztott betűk", "it": "Lettere adesive", "hr": "Samoljepljiva slova"},
        columns: [{"de": "Buchstabenhöhe", "en": "Letter height", "sl": "Višina črk", "uk": "Висота літери", "hu": "Betűmagasság", "it": "Altezza delle lettere", "hr": "Visina slova"}, {"de": "Preis pro Buchstabe", "en": "Price per letter", "sl": "Cena na črko", "uk": "Ціна за літеру", "hu": "Ár betűnként", "it": "Prezzo per lettera", "hr": "Cijena po slovu"}],
        rows: [
            [{"de": "bis 50 mm", "en": "up to 50 mm", "sl": "do 50 mm", "uk": "до 50 мм", "hu": "50 mm-ig", "it": "fino a 50 mm", "hr": "do 50 mm"}, 0.51],
            [{"de": "bis 75 mm", "en": "up to 75 mm", "sl": "do 75 mm", "uk": "до 75 мм", "hu": "75 mm-ig", "it": "fino a 75 mm", "hr": "do 75 mm"}, 0.7],
            [{"de": "bis 100 mm", "en": "up to 100 mm", "sl": "do 100 mm", "uk": "до 100 мм", "hu": "100 mm-ig", "it": "fino a 100 mm", "hr": "do 100 mm"}, 0.95],
            [{"de": "bis 150 mm", "en": "up to 150 mm", "sl": "do 150 mm", "uk": "до 150 мм", "hu": "150 mm-ig", "it": "fino a 150 mm", "hr": "do 150 mm"}, 1.4],
            [{"de": "bis 250 mm", "en": "up to 250 mm", "sl": "do 250 mm", "uk": "до 250 мм", "hu": "250 mm-ig", "it": "fino a 250 mm", "hr": "do 250 mm"}, 2.18],
            [{"de": "bis 350 mm", "en": "up to 350 mm", "sl": "do 350 mm", "uk": "до 350 мм", "hu": "350 mm-ig", "it": "fino a 350 mm", "hr": "do 350 mm"}, 3.2],
            [{"de": "bis 550 mm", "en": "up to 550 mm", "sl": "do 550 mm", "uk": "до 550 мм", "hu": "550 mm-ig", "it": "fino a 550 mm", "hr": "do 550 mm"}, 3.5],
            [{"de": "bis 650 mm", "en": "up to 650 mm", "sl": "do 650 mm", "uk": "до 650 мм", "hu": "650 mm-ig", "it": "fino a 650 mm", "hr": "do 650 mm"}, 4.3]
        ]
    },
    {
        caption: {"de": "Symbole, Logos bei Folienbreite 57 cm", "en": "Symbols and logos at film width 57 cm", "sl": "Simboli, logotipi pri širini folije 57 cm", "uk": "Символи, логотипи при ширині плівки 57 см", "hu": "Szimbólumok, logók 57 cm-es fóliaszélességnél", "it": "Simboli e loghi con larghezza della pellicola di 57 cm", "hr": "Simboli i logotipi pri širini folije od 57 cm"},
        columns: [{"de": "Lauflänge", "en": "Length", "sl": "Dolžina", "uk": "Довжина", "hu": "Hossz", "it": "Lunghezza", "hr": "Duljina"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
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
        caption: {"de": "Zusatzleistungen", "en": "Additional services", "sl": "Dodatne storitve", "uk": "Додаткові послуги", "hu": "Kiegészítő szolgáltatások", "it": "Servizi aggiuntivi", "hr": "Dodatne usluge"},
        columns: [{"de": "Leistung", "en": "Service", "sl": "Storitev", "uk": "Послуга", "hu": "Szolgáltatás", "it": "Servizio", "hr": "Usluga"}, {"de": "Preis", "en": "Price", "sl": "Cena", "uk": "Ціна", "hu": "Ár", "it": "Prezzo", "hr": "Cijena"}],
        rows: [
            [{"de": "Vektorisierung von Logos (15 min)", "en": "Vectorising logos (15 min)", "sl": "Vektorizacija logotipov (15 min)", "uk": "Векторизація логотипів (15 хв)", "hu": "Logók vektorizálása (15 perc)", "it": "Vettorializzazione di loghi (15 min)", "hr": "Vektorizacija logotipa (15 min)"}, 16.9],
            [{"de": "Montagestunde", "en": "Installation hour", "sl": "Ura montaže", "uk": "Година монтажу", "hu": "Szerelési óradíj", "it": "Ora di montaggio", "hr": "Sat montaže"}, 59.0]
        ]
    }
];

window.PRICE_VALUES = {
    // Mindestauftrag (Hinweis unter den Tabellen)
    mindestauftrag: 15
};
