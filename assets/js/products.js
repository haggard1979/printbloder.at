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
        var body = 'Hallo,\n\nich interessiere mich für den ' + product.name + '.\n\nText für die Stempelplatte:\n\n\nName und Telefonnummer:\n';
        return 'mailto:' + window.SHOP.email +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);
    }

    function card(p) {
        var extras = '';
        if (p.plate != null) {
            extras += '<li>Nur Stempelplatte: ' + euro.format(p.plate) + '</li>';
        }
        if (p.pad != null) {
            extras += '<li>Nur Stempelkissen: ' + euro.format(p.pad) + '</li>';
        }

        return '<article class="product">' +
            '<div class="product__media"><img src="' + p.image + '" alt="' + escapeHtml(p.name) + ' mit Musterabdruck" loading="lazy" width="387" height="149"></div>' +
            '<div class="product__body">' +
            '  <h3>' + escapeHtml(p.name) + '</h3>' +
            '  <dl class="product__specs">' +
            '    <dt>Druckfläche</dt><dd>' + escapeHtml(p.area) + '</dd>' +
            '    <dt>Zeilen</dt><dd>max. ' + p.lines + '</dd>' +
            '  </dl>' +
            '  <p class="product__price">' + euro.format(p.price) + '</p>' +
            '  <ul class="product__extras">' + extras + '</ul>' +
            '  <a class="btn btn--outline" href="' + inquiryLink(p) + '">Jetzt anfragen</a>' +
            '</div>' +
            '</article>';
    }

    var SORTERS = {
        default: null,
        priceAsc: function (a, b) { return a.price - b.price; },
        priceDesc: function (a, b) { return b.price - a.price; },
        lines: function (a, b) { return b.lines - a.lines || a.price - b.price; }
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
