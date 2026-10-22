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
                '  </div>' +
                '</header>';

            var toggle = this.querySelector('.nav-toggle');
            var nav = this.querySelector('.nav');
            toggle.addEventListener('click', function () {
                var open = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', String(!open));
                nav.classList.toggle('is-open', !open);
            });
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
