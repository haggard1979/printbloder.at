/*
 * Gemeinsames Layout (Kopfzeile, Navigation, Fußzeile) für alle Seiten.
 *
 * Wird synchron im <head> geladen und definiert die Elemente <site-header>
 * und <site-footer>. Der Browser setzt sie beim Parsen sofort ein - kein
 * Nachladen per Request, kein Springen der Seite, funktioniert auch lokal
 * per Doppelklick (file://).
 *
 * Navigation oder Kontaktdaten ändern: nur hier.
 *
 * Sprachen: Deutsch liegt im Hauptordner, die Übersetzungen in en/, sl/, uk/, hu/, it/
 * und hr/ (gleiche Dateinamen). Die Sprache kommt aus <html lang="...">.
 */
(function () {
    var LANGS = ['de', 'en', 'sl', 'uk', 'hu', 'it', 'hr'];
    // Sprachnamen in der eigenen Sprache (Sprachauswahl in der Kopfzeile)
    var LANG_NAMES = {de: 'Deutsch', en: 'English', sl: 'Slovenščina', uk: 'Українська', hu: 'Magyar', it: 'Italiano', hr: 'Hrvatski'};
    var LANG = LANGS.indexOf(document.documentElement.lang) >= 0 ? document.documentElement.lang : 'de';
    // Pfad zum Hauptordner (für Bilder, CSS, Daten und den Sprachwechsel)
    var ROOT = LANG === 'de' ? '' : '../';

    var TEXT = {
        de: {
            location: 'Shopping City Seiersberg, 1. Stock über Primark',
            skip: 'Zum Inhalt springen',
            menu: 'Menü',
            mainNav: 'Hauptnavigation',
            subNav: 'Weitere Seiten dieser Kategorie',
            prevPage: 'Vorherige Seite',
            nextPage: 'Nächste Seite',
            language: 'Sprache',
            home: 'Startseite',
            light: 'Helle Darstellung',
            dark: 'Dunkle Darstellung',
            contact: 'Kontakt',
            info: 'Info',
            infoLink: 'Anfahrt &amp; Kontakt',
            imprint: 'Impressum',
            privacy: 'Datenschutz',
            prices: 'Alle Preise in Euro inkl. 20&nbsp;% MwSt.',
            nav: ['Visitkarten', 'Stempel', 'Textildruck', 'Digitaldruck', 'Schilder', 'Beschriftung', 'Plakate', 'Geschenke']
        },
        en: {
            location: 'Shopping City Seiersberg, 1st floor above Primark',
            skip: 'Skip to content',
            menu: 'Menu',
            mainNav: 'Main navigation',
            subNav: 'More in this category',
            prevPage: 'Previous page',
            nextPage: 'Next page',
            language: 'Language',
            home: 'Home',
            light: 'Light mode',
            dark: 'Dark mode',
            contact: 'Contact',
            info: 'Info',
            infoLink: 'Directions &amp; contact',
            imprint: 'Legal notice',
            privacy: 'Privacy policy',
            prices: 'All prices in euros incl. 20&nbsp;% VAT.',
            nav: ['Business cards', 'Stamps', 'Textile printing', 'Digital printing', 'Signs', 'Lettering', 'Posters', 'Gifts']
        },
        sl: {
            location: 'Shopping City Seiersberg, 1. nadstropje nad Primarkom',
            skip: 'Preskoči na vsebino',
            menu: 'Meni',
            mainNav: 'Glavna navigacija',
            subNav: 'Več v tej kategoriji',
            prevPage: 'Prejšnja stran',
            nextPage: 'Naslednja stran',
            language: 'Jezik',
            home: 'Domača stran',
            light: 'Svetel prikaz',
            dark: 'Temen prikaz',
            contact: 'Kontakt',
            info: 'Informacije',
            infoLink: 'Dostop in kontakt',
            imprint: 'Impresum',
            privacy: 'Izjava o zasebnosti',
            prices: 'Vse cene v evrih vklj. 20&nbsp;% DDV.',
            nav: ['Vizitke', 'Žigi', 'Tisk na tekstil', 'Digitalni tisk', 'Table', 'Napisi', 'Plakati', 'Darila']
        },
        uk: {
            location: 'Shopping City Seiersberg, 1-й поверх над Primark',
            skip: 'Перейти до вмісту',
            menu: 'Меню',
            mainNav: 'Головна навігація',
            subNav: 'Більше в цій категорії',
            prevPage: 'Попередня сторінка',
            nextPage: 'Наступна сторінка',
            language: 'Мова',
            home: 'Головна сторінка',
            light: 'Світла тема',
            dark: 'Темна тема',
            contact: 'Контакти',
            info: 'Інформація',
            infoLink: 'Як дістатися та контакти',
            imprint: 'Вихідні дані',
            privacy: 'Політика конфіденційності',
            prices: 'Усі ціни в євро з ПДВ 20&nbsp;%.',
            nav: ['Візитки', 'Печатки', 'Друк на текстилі', 'Цифровий друк', 'Таблички', 'Написи', 'Плакати', 'Подарунки']
        },
        hu: {
            location: 'Shopping City Seiersberg, az 1. emeleten a Primark felett',
            skip: 'Ugrás a tartalomhoz',
            menu: 'Menü',
            mainNav: 'Főnavigáció',
            subNav: 'További oldalak ebben a kategóriában',
            prevPage: 'Előző oldal',
            nextPage: 'Következő oldal',
            language: 'Nyelv',
            home: 'Főoldal',
            light: 'Világos megjelenítés',
            dark: 'Sötét megjelenítés',
            contact: 'Kapcsolat',
            info: 'Információ',
            infoLink: 'Megközelítés és kapcsolat',
            imprint: 'Impresszum',
            privacy: 'Adatvédelem',
            prices: 'Minden ár euróban, 20&nbsp;% ÁFÁ-val együtt.',
            nav: ['Névjegykártyák', 'Bélyegzők', 'Textilnyomás', 'Digitális nyomtatás', 'Táblák', 'Feliratok', 'Plakátok', 'Ajándékok']
        },
        it: {
            location: 'Shopping City Seiersberg, 1° piano sopra Primark',
            skip: 'Vai al contenuto',
            menu: 'Menu',
            mainNav: 'Navigazione principale',
            subNav: 'Altre pagine di questa categoria',
            prevPage: 'Pagina precedente',
            nextPage: 'Pagina successiva',
            language: 'Lingua',
            home: 'Pagina iniziale',
            light: 'Tema chiaro',
            dark: 'Tema scuro',
            contact: 'Contatti',
            info: 'Informazioni',
            infoLink: 'Come raggiungerci e contatti',
            imprint: 'Note legali',
            privacy: 'Privacy',
            prices: 'Tutti i prezzi in euro, IVA del 20&nbsp;% inclusa.',
            nav: ['Biglietti da visita', 'Timbri', 'Stampa su tessuto', 'Stampa digitale', 'Targhe', 'Scritte', 'Poster', 'Regali']
        },
        hr: {
            location: 'Shopping City Seiersberg, 1. kat iznad trgovine Primark',
            skip: 'Preskoči na sadržaj',
            menu: 'Izbornik',
            mainNav: 'Glavna navigacija',
            subNav: 'Više u ovoj kategoriji',
            prevPage: 'Prethodna stranica',
            nextPage: 'Sljedeća stranica',
            language: 'Jezik',
            home: 'Početna stranica',
            light: 'Svijetli prikaz',
            dark: 'Tamni prikaz',
            contact: 'Kontakt',
            info: 'Informacije',
            infoLink: 'Kako do nas i kontakt',
            imprint: 'Impressum',
            privacy: 'Zaštita podataka',
            prices: 'Sve cijene u eurima, PDV od 20&nbsp;% uključen.',
            nav: ['Posjetnice', 'Pečati', 'Tisak na tekstil', 'Digitalni tisak', 'Ploče', 'Natpisi', 'Plakati', 'Pokloni']
        }
    };
    var T = TEXT[LANG];

    var SHOP = {
        name: 'Printshop Bloder',
        location: T.location,
        street: 'SCS Seiersberg',
        city: '8054 Graz',
        phone: '+43 316 24 35 77',
        phoneHref: 'tel:+43316243577',
        email: 'shop@printbloder.at'
    };

    // Beschriftungen der Menüpunkte stehen oben in TEXT[...].nav (gleiche Reihenfolge)
    var NAV = [
        {href: 'firmenVisitkarten.html', match: ['visitkarten', 'firmenVisitkarten', 'psVisitkarten']},
        {href: 'stempel.html', match: ['stempel']},
        {href: 'textildruck.html', match: ['textildruck']},
        {href: 'digitaldruck.html', match: ['digitaldruck']},
        {href: 'schilder.html', match: ['schilder']},
        {href: 'beschriftung.html', match: ['beschriftung']},
        {href: 'plakate.html', match: ['plakate']},
        {href: 'geschenke.html', match: ['geschenke']}
    ];


    /*
     * Unterseiten je Kategorie für die Reiter im Seitenkopf (<sub-nav category="...">).
     * Neue Unterseite: hier eintragen UND auf der Kategorieseite verlinken (der Test
     * vergleicht beides). Reihenfolge wie auf der Kategorieseite.
     */
    var SUBNAV = {
        visitkarten: [
        {page: 'psVisitkarten', label: {de: 'Standard-Visitenkarten', en: 'Standard business cards', sl: 'Standardne vizitke', uk: 'Стандартні візитки', hu: 'Standard névjegykártyák', it: 'Biglietti da visita standard', hr: 'Standardne posjetnice'}},
        {page: 'firmenVisitkarten', label: {de: 'Firmenvisitkarten', en: 'Company business cards', sl: 'Poslovne vizitke', uk: 'Фірмові візитки', hu: 'Céges névjegykártyák', it: 'Biglietti da visita aziendali', hr: 'Poslovne posjetnice'}}
        ],
        stempel: [
        {page: 'stempelPrinty', label: {de: 'Trodat Printy', en: 'Trodat Printy', sl: 'Trodat Printy', uk: 'Trodat Printy', hu: 'Trodat Printy', it: 'Trodat Printy', hr: 'Trodat Printy'}},
        {page: 'stempelProfessional', label: {de: 'Trodat Professional', en: 'Trodat Professional', sl: 'Trodat Professional', uk: 'Trodat Professional', hu: 'Trodat Professional', it: 'Trodat Professional', hr: 'Trodat Professional'}},
        {page: 'stempelKulis', label: {de: 'Stempelkugelschreiber', en: 'Stamp pens', sl: 'Žig s kemičnim svinčnikom', uk: 'Печатка-ручка', hu: 'Bélyegzős golyóstollak', it: 'Penne con timbro', hr: 'Kemijske olovke s pečatom'}},
        {page: 'stempelFarben', label: {de: 'Zubehör und Farben', en: 'Accessories and inks', sl: 'Dodatki in barve', uk: 'Аксесуари та фарби', hu: 'Tartozékok és festékek', it: 'Accessori e inchiostri', hr: 'Pribor i boje'}}
        ],
        textildruck: [
        {page: 'textildruckTransfer', label: {de: 'Transferdruck', en: 'Transfer printing', sl: 'Transferni tisk', uk: 'Трансферний друк', hu: 'Transzfernyomás', it: 'Stampa a trasferimento', hr: 'Transfer tisak'}},
        {page: 'textildruckFlock', label: {de: 'Flex- und Flockdruck', en: 'Flex and flock printing', sl: 'Fleks in flok tisk', uk: 'Флекс- і флок-друк', hu: 'Flex és flock nyomás', it: 'Stampa flex e flock', hr: 'Flex i flock tisak'}}
        ],
        digitaldruck: [
        {page: 'digitaldruckFarb', label: {de: 'Farbdruck', en: 'Colour printing', sl: 'Barvni tisk', uk: 'Кольоровий друк', hu: 'Színes nyomtatás', it: 'Stampa a colori', hr: 'Tisak u boji'}},
        {page: 'digitaldruckSW', label: {de: 'Schwarz-Weiss Druck', en: 'Black-and-white printing', sl: 'Črno-beli tisk', uk: 'Чорно-білий друк', hu: 'Fekete-fehér nyomtatás', it: 'Stampa in bianco e nero', hr: 'Crno-bijeli tisak'}},
        {page: 'digitaldruckSWHQ', label: {de: 'Schwarz-Weiss High Quality', en: 'Black-and-white High Quality', sl: 'Črno-beli visoke kakovosti', uk: 'Чорно-білий висока якість', hu: 'Fekete-fehér High Quality', it: 'Bianco e nero High Quality', hr: 'Crno-bijeli High Quality'}}
        ],
        schilder: [
        {page: 'schilderHaus', label: {de: 'Hausschilder', en: 'House signs', sl: 'Hišne tablice', uk: 'Таблички з номером будинку', hu: 'Házszámtáblák', it: 'Targhe per la casa', hr: 'Kućne pločice'}},
        {page: 'schilderAlu', label: {de: 'Alu-Dibond-Schilder', en: 'Alu-Dibond signs', sl: 'Table Alu-Dibond', uk: 'Таблички Alu-Dibond', hu: 'Alu-Dibond táblák', it: 'Targhe Alu-Dibond', hr: 'Ploče Alu-Dibond'}},
        {page: 'geschenkeFunschilder', label: {de: 'Funschilder', en: 'Fun signs', sl: 'Zabavne table', uk: 'Жартівливі таблички', hu: 'Vicces táblák', it: 'Targhe divertenti', hr: 'Zabavne ploče'}}
        ],
        geschenke: [
        {page: 'geschenkeFotopolster', label: {de: 'Fotopolster', en: 'Photo cushion', sl: 'Foto blazina', uk: 'Фотоподушка', hu: 'Fotópárna', it: 'Cuscino con foto', hr: 'Jastuk s fotografijom'}},
        {page: 'geschenkeMousepad', label: {de: 'Mousepad', en: 'Mouse pad', sl: 'Podloga za miško', uk: 'Килимок для миші', hu: 'Egérpad', it: 'Tappetino per mouse', hr: 'Podloga za miš'}},
        {page: 'geschenkeFototasse', label: {de: 'Fototasse', en: 'Photo mug', sl: 'Foto skodelica', uk: 'Фоточашка', hu: 'Fotóbögre', it: 'Tazza con foto', hr: 'Šalica s fotografijom'}},
        {page: 'geschenkeTeddies', label: {de: 'Teddybär', en: 'Teddy bear', sl: 'Medvedek', uk: 'Плюшевий ведмедик', hu: 'Plüssmackó', it: 'Orsacchiotto', hr: 'Medvjedić'}},
        {page: 'geschenkeFotokappe', label: {de: 'Kappe mit Aufdruck', en: 'Cap with print', sl: 'Kapa s potiskom', uk: 'Кепка з принтом', hu: 'Nyomtatott sapka', it: 'Cappellino stampato', hr: 'Kapa s tiskom'}},
        {page: 'geschenkeFunschilder', label: {de: 'Funschilder', en: 'Fun signs', sl: 'Zabavne table', uk: 'Жартівливі таблички', hu: 'Vicces táblák', it: 'Targhe divertenti', hr: 'Zabavne ploče'}}
        ]
    };

    window.SHOP = SHOP;
    window.SITE = {lang: LANG, root: ROOT};

    /*
     * Hell/Dunkel: ohne gespeicherte Wahl gilt die Geräteeinstellung.
     * Die Wahl wird sofort (vor dem Zeichnen der Seite) auf <html> gesetzt.
     */
    var THEME_KEY = 'printbloder-theme';
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function storedTheme() {
        try {
            return localStorage.getItem(THEME_KEY);
        } catch (e) {
            return null;
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            // z. B. privater Modus - Wahl gilt dann nur für diese Seite
        }
    }

    function isDark() {
        var theme = document.documentElement.getAttribute('data-theme');
        return theme ? theme === 'dark' : darkQuery.matches;
    }

    var initialTheme = storedTheme();
    if (initialTheme === 'dark' || initialTheme === 'light') {
        document.documentElement.setAttribute('data-theme', initialTheme);
    }

    var ICON_MOON = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="currentColor"/></svg>';
    var ICON_SUN = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></g></svg>';

    function currentPage() {
        var file = location.pathname.split('/').pop() || 'home.html';
        return file.replace(/\.html$/, '');
    }

    /*
     * Flaggen als SVG (Emoji-Flaggen zeigt Windows nur als Buchstaben an).
     * Deutsch = Österreich (Standort des Geschäfts), Englisch = Großbritannien.
     */
    var flagCount = 0;

    function flag(lang) {
        var id = 'flag' + (++flagCount);
        var body = {
            de: '<rect width="30" height="20" fill="#c8102e"/><rect y="6.67" width="30" height="6.67" fill="#fff"/>',
            en: '<clipPath id="' + id + 'a"><rect width="30" height="20"/></clipPath>'
                + '<clipPath id="' + id + 'b"><path d="M15,10h15v10zv10h-15zh-15v-10zv-10h15z"/></clipPath>'
                + '<g clip-path="url(#' + id + 'a)"><g transform="translate(-5 0) scale(.6667)">'
                + '<rect width="60" height="30" fill="#012169"/>'
                + '<path d="M0,0L60,30M60,0L0,30" stroke="#fff" stroke-width="6"/>'
                + '<path d="M0,0L60,30M60,0L0,30" stroke="#c8102e" stroke-width="4" clip-path="url(#' + id + 'c)"/>'
                + '<clipPath id="' + id + 'c"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath>'
                + '<path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/>'
                + '<path d="M30,0v30M0,15h60" stroke="#c8102e" stroke-width="6"/></g></g>',
            sl: '<rect width="30" height="20" fill="#fff"/><rect y="6.67" width="30" height="6.67" fill="#005ce5"/>'
                + '<rect y="13.33" width="30" height="6.67" fill="#ed1c24"/>'
                + '<path d="M6,3h6v4.6q0,3.1-3,4.2q-3-1.1-3-4.2z" fill="#005ce5" stroke="#ed1c24" stroke-width=".6"/>'
                + '<path d="M6.6,8.6l1.1-1.9l.6.8l.7-1.3l.7,1.3l.6-.8l1.1,1.9q-1.2,1.6-2.4,2q-1.2-.4-2.4-2z" fill="#fff"/>'
                + '<circle cx="7.9" cy="4.4" r=".5" fill="#ffdd00"/><circle cx="10.1" cy="4.4" r=".5" fill="#ffdd00"/>'
                + '<circle cx="9" cy="5.6" r=".5" fill="#ffdd00"/>',
            uk: '<rect width="30" height="10" fill="#0057b7"/><rect y="10" width="30" height="10" fill="#ffd700"/>',
            hu: '<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.67" fill="#ce2939"/>'
                + '<rect y="13.33" width="30" height="6.67" fill="#477050"/>',
            it: '<rect width="30" height="20" fill="#fff"/><rect width="10" height="20" fill="#009246"/>'
                + '<rect x="20" width="10" height="20" fill="#ce2b37"/>',
            hr: '<rect width="30" height="20" fill="#fff"/><rect width="30" height="6.67" fill="#f00"/>'
                + '<rect y="13.33" width="30" height="6.67" fill="#171796"/>'
                + '<clipPath id="' + id + 'h"><path d="M11.5,5.8h7v6.1q0,2.7-3.5,3.9q-3.5-1.2-3.5-3.9z"/></clipPath>'
                + '<g clip-path="url(#' + id + 'h)"><rect x="11.5" y="5.8" width="7" height="10" fill="#fff"/>'
                + [0, 1, 2, 3, 4, 5, 6].map(function (r) {
                    return [0, 1, 2, 3, 4].filter(function (c) {
                        return (r + c) % 2 === 0;
                    }).map(function (c) {
                        return '<rect x="' + (11.5 + c * 1.4) + '" y="' + (5.8 + r * 1.4) + '" width="1.4" height="1.4" fill="#f00"/>';
                    }).join('');
                }).join('') + '</g>'
                + '<path d="M11.5,5.8l.6-2l1.2,1l1.7-1.6l1.7,1.6l1.2-1l.6,2z" fill="#fff" stroke="#171796" stroke-width=".35"/>'
        }[lang];
        return '<svg class="flag" viewBox="0 0 30 20" width="24" height="16" aria-hidden="true">' + body
            + '<rect width="30" height="20" fill="none" stroke="rgba(0,0,0,.2)" stroke-width="1"/></svg>';
    }

    function languageMenu() {
        var file = currentPage() + '.html';
        if (file === 'index.html') {
            file = 'home.html';
        }
        var items = LANGS.map(function (lang) {
            var href = ROOT + (lang === 'de' ? '' : lang + '/') + file;
            var current = lang === LANG ? ' aria-current="true"' : '';
            return '<li><a href="' + href + '" hreflang="' + lang + '" lang="' + lang + '"' + current + '>'
                + flag(lang) + '<span>' + LANG_NAMES[lang] + '</span></a></li>';
        }).join('');
        return '<div class="lang-menu">'
            + '<button class="lang-toggle" type="button" aria-expanded="false" aria-controls="lang-list"'
            + ' aria-label="' + T.language + ': ' + LANG_NAMES[LANG] + '" title="' + T.language + '">' + flag(LANG) + '</button>'
            + '<ul id="lang-list" class="lang-list" hidden>' + items + '</ul>'
            + '</div>';
    }

    function isActive(item, page) {
        return item.match.some(function (prefix) {
            return page.indexOf(prefix) === 0;
        });
    }

    class SiteHeader extends HTMLElement {
        connectedCallback() {
            var page = currentPage();
            var links = NAV.map(function (item, i) {
                var active = isActive(item, page) ? ' aria-current="page"' : '';
                return '<li><a href="' + item.href + '"' + active + '>' + T.nav[i] + '</a></li>';
            }).join('');
            // Kontakt, Impressum, Datenschutz: nur im aufgeklappten Menü (sonst in der Fußzeile)
            [['kontakt', T.infoLink], ['impressum', T.imprint], ['datenschutz', T.privacy]].forEach(function (extra) {
                links += '<li class="nav__extra"><a href="' + extra[0] + '.html"' + (page === extra[0] ? ' aria-current="page"' : '')
                    + '>' + extra[1] + '</a></li>';
            });

            this.innerHTML =
                '<a class="skip-link" href="#main">' + T.skip + '</a>' +
                '<div class="topbar">' +
                '  <div class="wrap topbar__inner">' +
                '    <span>' + SHOP.location + '</span>' +
                '    <span class="topbar__contact">' +
                '      <a class="topbar__phone" href="' + SHOP.phoneHref + '">' + SHOP.phone + '</a>' +
                '      <a class="topbar__email" href="mailto:' + SHOP.email + '">' + SHOP.email + '</a>' +
                '    </span>' +
                '  </div>' +
                '</div>' +
                '<header class="header">' +
                '  <div class="wrap header__inner">' +
                '    <a class="logo" href="home.html"><img src="' + ROOT + 'img/pslogo.gif" alt="Printbloder - ' + T.home + '" width="195" height="34"></a>' +
                '    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">' +
                '      <span class="nav-toggle__bar"></span><span class="visually-hidden">' + T.menu + '</span>' +
                '    </button>' +
                '    <nav id="site-nav" class="nav" aria-label="' + T.mainNav + '">' +
                '      <ul>' + links + '</ul>' +
                '    </nav>' +
                '    ' + languageMenu() +
                '    <button class="theme-toggle" type="button"></button>' +
                '  </div>' +
                '</header>';

            var toggle = this.querySelector('.nav-toggle');
            var nav = this.querySelector('.nav');
            var header = this.querySelector('.header');
            var inner = this.querySelector('.header__inner');

            // Menü-Knopf nur, wenn die Menüpunkte nicht in eine Zeile passen
            function fitNav() {
                header.classList.remove('is-compact');
                if (inner.scrollWidth > inner.clientWidth) {
                    header.classList.add('is-compact');
                }
            }
            fitNav();
            window.addEventListener('resize', fitNav);
            if (document.fonts) {
                document.fonts.ready.then(fitNav);
            }
            toggle.addEventListener('click', function () {
                var open = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!open));
                nav.classList.toggle('is-open', !open);
            });

            // Sprachauswahl auf- und zuklappen (schließt bei Klick daneben und mit Esc)
            var langToggle = this.querySelector('.lang-toggle');
            var langList = this.querySelector('.lang-list');
            function setLangOpen(open) {
                langToggle.setAttribute('aria-expanded', String(open));
                langList.hidden = !open;
            }
            langToggle.addEventListener('click', function (event) {
                event.stopPropagation();
                setLangOpen(langList.hidden);
            });
            document.addEventListener('click', function (event) {
                if (!langList.hidden && !langList.contains(event.target)) {
                    setLangOpen(false);
                }
            });
            document.addEventListener('keydown', function (event) {
                if (event.key === 'Escape' && !langList.hidden) {
                    setLangOpen(false);
                    langToggle.focus();
                }
            });

            var themeToggle = this.querySelector('.theme-toggle');
            function updateThemeToggle() {
                var dark = isDark();
                themeToggle.innerHTML = dark ? ICON_SUN : ICON_MOON;
                themeToggle.setAttribute('aria-label', dark ? T.light : T.dark);
                themeToggle.title = themeToggle.getAttribute('aria-label');
            }
            themeToggle.addEventListener('click', function () {
                var theme = isDark() ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                storeTheme(theme);
                updateThemeToggle();
            });
            darkQuery.addEventListener('change', updateThemeToggle);
            updateThemeToggle();
        }
    }

    class SiteFooter extends HTMLElement {
        connectedCallback() {
            this.innerHTML =
                '<footer class="footer">' +
                '  <div class="wrap footer__grid">' +
                '    <div>' +
                '      <h2 class="footer__title">' + SHOP.name + '</h2>' +
                '      <p>' + SHOP.street + '<br>' + SHOP.city + '<br>' + SHOP.location + '</p>' +
                '    </div>' +
                '    <div>' +
                '      <h2 class="footer__title">' + T.contact + '</h2>' +
                '      <p><a href="' + SHOP.phoneHref + '">' + SHOP.phone + '</a><br>' +
                '      <a href="mailto:' + SHOP.email + '">' + SHOP.email + '</a></p>' +
                '    </div>' +
                '    <div>' +
                '      <h2 class="footer__title">' + T.info + '</h2>' +
                '      <p><a href="kontakt.html">' + T.infoLink + '</a><br>' +
                '      <a href="impressum.html">' + T.imprint + '</a><br>' +
                '      <a href="datenschutz.html">' + T.privacy + '</a></p>' +
                '    </div>' +
                '  </div>' +
                '  <div class="wrap footer__note">' + T.prices + '</div>' +
                '</footer>';
        }
    }

    /*
     * Wechsel zwischen den Unterseiten einer Kategorie, z. B.
     * <sub-nav category="stempel"></sub-nav> direkt unter dem Brotkrümelpfad.
     * Große Bildschirme: Reiter mit allen Seiten. Handy (CSS, bis 600 px): Karussell mit
     * Pfeilen links und rechts, in der Mitte die aktuelle Seite; blättert im Kreis.
     */
    class SubNav extends HTMLElement {
        connectedCallback() {
            var entries = SUBNAV[this.getAttribute('category')];
            if (!entries) {
                return;
            }
            var page = currentPage();
            var name = function (entry) {
                return entry.label[LANG] || entry.label.de;
            };
            var chips = '<ul class="subnav__chips">' + entries.map(function (entry) {
                var current = entry.page === page ? ' aria-current="page"' : '';
                return '<li><a href="' + entry.page + '.html"' + current + '>' + name(entry) + '</a></li>';
            }).join('') + '</ul>';

            var index = entries.findIndex(function (entry) {
                return entry.page === page;
            });
            var carousel = '';
            if (index >= 0 && entries.length > 1) {
                var prev = entries[(index - 1 + entries.length) % entries.length];
                var next = entries[(index + 1) % entries.length];
                var arrow = function (entry, label, rel, path) {
                    return '<a class="subnav__arrow" href="' + entry.page + '.html" rel="' + rel + '" aria-label="' + label + ': '
                        + name(entry) + '"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="' + path
                        + '" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>';
                };
                carousel = '<div class="subnav__carousel">'
                    + arrow(prev, T.prevPage, 'prev', 'M15 5l-7 7 7 7')
                    + '<div class="subnav__current"><span class="subnav__name">' + name(entries[index]) + '</span>'
                    + '<span class="subnav__dots" aria-hidden="true">' + entries.map(function (_, i) {
                        return '<span class="subnav__dot' + (i === index ? ' subnav__dot--active' : '') + '"></span>';
                    }).join('') + '</span></div>'
                    + arrow(next, T.nextPage, 'next', 'M9 5l7 7-7 7')
                    + '</div>';
            }
            this.innerHTML = '<nav class="subnav" aria-label="' + T.subNav + '">' + chips + carousel + '</nav>';
        }
    }

    customElements.define('site-header', SiteHeader);
    customElements.define('site-footer', SiteFooter);
    customElements.define('sub-nav', SubNav);
})();
