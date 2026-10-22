/*
 * Gemeinsames Layout (Kopfzeile, Navigation, Fußzeile) für alle Seiten.
 *
 * Wird synchron im <head> geladen und definiert die Elemente <site-header>
 * und <site-footer>. Der Browser setzt sie beim Parsen sofort ein - kein
 * Nachladen per Request, kein Springen der Seite, funktioniert auch lokal
 * per Doppelklick (file://).
 *
 * Navigation oder Kontaktdaten ändern: nur hier.
 */
(function () {
    var SHOP = {
        name: 'Printshop Bloder',
        location: 'Shopping City Seiersberg, 1. Stock über Primark',
        street: 'SCS Seiersberg',
        city: '8054 Graz',
        phone: '+43 316 24 35 77',
        phoneHref: 'tel:+43316243577',
        email: 'shop@printbloder.at'
    };

    var NAV = [
        {href: 'firmenVisitkarten.html', label: 'Visitkarten', match: ['visitkarten', 'firmenVisitkarten', 'psVisitkarten']},
        {href: 'stempel.html', label: 'Stempel', match: ['stempel']},
        {href: 'textildruck.html', label: 'Textildruck', match: ['textildruck']},
        {href: 'digitaldruck.html', label: 'Digitaldruck', match: ['digitaldruck']},
        {href: 'schilder.html', label: 'Schilder', match: ['schilder']},
        {href: 'beschriftung.html', label: 'Beschriftung', match: ['beschriftung']},
        {href: 'plakate.html', label: 'Plakate', match: ['plakate']},
        {href: 'geschenke.html', label: 'Geschenke', match: ['geschenke']}
    ];

    window.SHOP = SHOP;

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

    function isActive(item, page) {
        return item.match.some(function (prefix) {
            return page.indexOf(prefix) === 0;
        });
    }

    class SiteHeader extends HTMLElement {
        connectedCallback() {
            var page = currentPage();
            var links = NAV.map(function (item) {
                var active = isActive(item, page) ? ' aria-current="page"' : '';
                return '<li><a href="' + item.href + '"' + active + '>' + item.label + '</a></li>';
            }).join('');

            this.innerHTML =
                '<a class="skip-link" href="#main">Zum Inhalt springen</a>' +
                '<div class="topbar">' +
                '  <div class="wrap topbar__inner">' +
                '    <span>' + SHOP.location + '</span>' +
                '    <span class="topbar__contact">' +
                '      <a href="' + SHOP.phoneHref + '">' + SHOP.phone + '</a>' +
                '      <a href="mailto:' + SHOP.email + '">' + SHOP.email + '</a>' +
                '      <a href="kontakt.html">Kontakt &amp; Anfahrt</a>' +
                '    </span>' +
                '  </div>' +
                '</div>' +
                '<header class="header">' +
                '  <div class="wrap header__inner">' +
                '    <a class="logo" href="home.html"><img src="img/pslogo.gif" alt="Printbloder - Startseite" width="195" height="34"></a>' +
                '    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">' +
                '      <span class="nav-toggle__bar"></span><span class="visually-hidden">Menü</span>' +
                '    </button>' +
                '    <nav id="site-nav" class="nav" aria-label="Hauptnavigation">' +
                '      <ul>' + links + '</ul>' +
                '    </nav>' +
                '    <button class="theme-toggle" type="button"></button>' +
                '  </div>' +
                '</header>';

            var toggle = this.querySelector('.nav-toggle');
            var nav = this.querySelector('.nav');
            toggle.addEventListener('click', function () {
                var open = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!open));
                nav.classList.toggle('is-open', !open);
            });

            var themeToggle = this.querySelector('.theme-toggle');
            function updateThemeToggle() {
                var dark = isDark();
                themeToggle.innerHTML = dark ? ICON_SUN : ICON_MOON;
                themeToggle.setAttribute('aria-label', dark ? 'Helle Darstellung' : 'Dunkle Darstellung');
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
                '      <h2 class="footer__title">Kontakt</h2>' +
                '      <p><a href="' + SHOP.phoneHref + '">' + SHOP.phone + '</a><br>' +
                '      <a href="mailto:' + SHOP.email + '">' + SHOP.email + '</a></p>' +
                '    </div>' +
                '    <div>' +
                '      <h2 class="footer__title">Info</h2>' +
                '      <p><a href="kontakt.html">Anfahrt, Kontakt &amp; Impressum</a></p>' +
                '    </div>' +
                '  </div>' +
                '  <div class="wrap footer__note">Alle Preise in Euro inkl. 20&nbsp;% MwSt.</div>' +
                '</footer>';
        }
    }

    customElements.define('site-header', SiteHeader);
    customElements.define('site-footer', SiteFooter);
})();
