/*
 * Rendert eine Produktliste aus window.PRODUCTS (siehe data/*.js) in das
 * Element mit der ID "product-list". Optional mit Sortierung über ein
 * <select id="product-sort">.
 */
(function () {
    var euro = new Intl.NumberFormat('de-AT', {style: 'currency', currency: 'EUR'});

    function escapeHtml(text) {
        return String(text).replace(/[&<>"]/g, function (c) {
            return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c];
        });
    }

    function inquiryLink(product) {
        var subject = 'Anfrage: ' + product.name;
        var body = 'Hallo,\n\nich interessiere mich für: ' + product.name + '.\n\nMeine Wünsche (Text, Motiv, Menge):\n\n\nName und Telefonnummer:\n';
        return 'mailto:' + window.SHOP.email +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);
    }

    /*
     * Produktformat:
     *   name    Produktname
     *   image   Bildpfad
     *   specs   {Bezeichnung: Wert} - z. B. {'Druckfläche': '26 × 9 mm'}
     *   price   Preis in Euro (Zahl)
     *   from    true = Preis wird als "ab ..." angezeigt
     *   extras  {Bezeichnung: Preis in Euro} - z. B. {'Nur Stempelplatte': 18.20}
     *   note    optionaler Zusatztext
     */
    function card(p) {
        var specs = Object.keys(p.specs || {}).map(function (label) {
            return '<dt>' + escapeHtml(label) + '</dt><dd>' + escapeHtml(p.specs[label]) + '</dd>';
        }).join('');
        var extras = Object.keys(p.extras || {}).map(function (label) {
            return '<li>' + escapeHtml(label) + ': ' + euro.format(p.extras[label]) + '</li>';
        }).join('');

        return '<article class="product">' +
            '<div class="product__media"><img src="' + p.image + '" alt="' + escapeHtml(p.name) + '" loading="lazy"></div>' +
            '<div class="product__body">' +
            '  <h3>' + escapeHtml(p.name) + '</h3>' +
            (specs ? '  <dl class="product__specs">' + specs + '</dl>' : '') +
            (p.note ? '  <p class="product__note">' + escapeHtml(p.note) + '</p>' : '') +
            '  <p class="product__price">' + (p.from ? '<small>ab</small> ' : '') + euro.format(p.price) + '</p>' +
            (extras ? '  <ul class="product__extras">' + extras + '</ul>' : '') +
            '  <a class="btn btn--outline" href="' + inquiryLink(p) + '">Jetzt anfragen</a>' +
            '</div>' +
            '</article>';
    }

    var SORTERS = {
        default: null,
        priceAsc: function (a, b) { return a.price - b.price; },
        priceDesc: function (a, b) { return b.price - a.price; }
    };

    function render() {
        var list = document.getElementById('product-list');
        if (!list || !window.PRODUCTS) {
            return;
        }
        var select = document.getElementById('product-sort');
        var sorter = select ? SORTERS[select.value] : null;
        var products = window.PRODUCTS.slice();
        if (sorter) {
            products.sort(sorter);
        }
        list.innerHTML = products.map(card).join('');
    }

    document.addEventListener('DOMContentLoaded', function () {
        render();
        var select = document.getElementById('product-sort');
        if (select) {
            select.addEventListener('change', render);
        }
    });
})();
