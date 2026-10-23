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
 * Sprachen: Deutsch liegt im Hauptordner, Englisch in en/, Slowenisch in sl/,
 * Ukrainisch in uk/ (gleiche Dateinamen). Die Sprache kommt aus <html lang="...">.
 */
(function () {
    var LANGS = ['de', 'en', 'sl', 'uk'];
    // Sprachnamen in der eigenen Sprache (Sprachauswahl in der Kopfzeile)
    var LANG_NAMES = {de: 'Deutsch', en: 'English', sl: 'Slovenščina', uk: 'Українська'};
    var LANG = LANGS.indexOf(document.documentElement.lang) >= 0 ? document.documentElement.lang : 'de';
    // Pfad zum Hauptordner (für Bilder, CSS, Daten und den Sprachwechsel)
    var ROOT = LANG === 'de' ? '' : '../';

    var TEXT = {
        de: {
            location: 'Shopping City Seiersberg, 1. Stock über Primark',
            skip: 'Zum Inhalt springen',
            menu: 'Menü',
            mainNav: 'Hauptnavigation',
            language: 'Sprache',
            home: 'Startseite',
            light: 'Helle Darstellung',
            dark: 'Dunkle Darstellung',
            contact: 'Kontakt',
            info: 'Info',
            infoLink: 'Anfahrt, Kontakt &amp; Impressum',
            prices: 'Alle Preise in Euro inkl. 20&nbsp;% MwSt.',
            nav: ['Visitkarten', 'Stempel', 'Textildruck', 'Digitaldruck', 'Schilder', 'Beschriftung', 'Plakate', 'Geschenke']
        },
        en: {
            location: 'Shopping City Seiersberg, 1st floor above Primark',
            skip: 'Skip to content',
            menu: 'Menu',
            mainNav: 'Main navigation',
            language: 'Language',
            home: 'Home',
            light: 'Light mode',
            dark: 'Dark mode',
            contact: 'Contact',
            info: 'Info',
            infoLink: 'Directions, contact &amp; legal notice',
            prices: 'All prices in euros incl. 20&nbsp;% VAT.',
            nav: ['Business cards', 'Stamps', 'Textile printing', 'Digital printing', 'Signs', 'Lettering', 'Posters', 'Gifts']
        },
        sl: {
            location: 'Shopping City Seiersberg, 1. nadstropje nad Primarkom',
            skip: 'Preskoči na vsebino',
            menu: 'Meni',
            mainNav: 'Glavna navigacija',
            language: 'Jezik',
            home: 'Domača stran',
            light: 'Svetel prikaz',
            dark: 'Temen prikaz',
            contact: 'Kontakt',
            info: 'Informacije',
            infoLink: 'Dostop, kontakt in impresum',
            prices: 'Vse cene v evrih vklj. 20&nbsp;% DDV.',
            nav: ['Vizitke', 'Žigi', 'Tisk na tekstil', 'Digitalni tisk', 'Table', 'Napisi', 'Plakati', 'Darila']
        },
        uk: {
            location: 'Shopping City Seiersberg, 1-й поверх над Primark',
            skip: 'Перейти до вмісту',
            menu: 'Меню',
            mainNav: 'Головна навігація',
            language: 'Мова',
            home: 'Головна сторінка',
            light: 'Світла тема',
            dark: 'Темна тема',
            contact: 'Контакти',
            info: 'Інформація',
            infoLink: 'Як дістатися, контакти та вихідні дані',
            prices: 'Усі ціни в євро з ПДВ 20&nbsp;%.',
            nav: ['Візитки', 'Печатки', 'Друк на текстилі', 'Цифровий друк', 'Таблички', 'Написи', 'Плакати', 'Подарунки']
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
            uk: '<rect width="30" height="10" fill="#0057b7"/><rect y="10" width="30" height="10" fill="#ffd700"/>'
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
            // Kontakt & Impressum: nur im aufgeklappten Menü (sonst in der Fußzeile)
            links += '<li class="nav__extra"><a href="kontakt.html"' + (page === 'kontakt' ? ' aria-current="page"' : '')
                + '>' + T.infoLink + '</a></li>';

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
                '      <p><a href="kontakt.html">' + T.infoLink + '</a></p>' +
                '    </div>' +
                '  </div>' +
                '  <div class="wrap footer__note">' + T.prices + '</div>' +
                '</footer>';
        }
    }

    customElements.define('site-header', SiteHeader);
    customElements.define('site-footer', SiteFooter);
})();
