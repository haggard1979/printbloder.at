/*
 * Rendert eine Produktliste aus window.PRODUCTS (siehe data/*.js) in das
 * Element mit der ID "product-list". Optional mit Sortierung über ein
 * <select id="product-sort">.
 */
(function () {
    var SITE = window.SITE || {lang: 'de', root: ''};
    var LOCALES = {de: 'de-AT', en: 'en-IE', sl: 'sl-SI', uk: 'uk-UA', hu: 'hu-HU', it: 'it-IT', hr: 'hr-HR'};
    // narrowSymbol: immer "€" (Ukrainisch würde sonst "EUR" schreiben)
    var euro = new Intl.NumberFormat(LOCALES[SITE.lang] || 'de-AT', {style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol'});

    /*
     * Übersetzungen für die Produktkarten. Bezeichnungen und Werte in den
     * Daten-Dateien sind deutsch; hier steht, wie sie in den anderen Sprachen lauten.
     * Fehlt eine Übersetzung, wird der deutsche Text angezeigt.
     */
    var TEXT = {
        de: {
            from: 'ab',
            inquire: 'Jetzt anfragen',
            subject: 'Anfrage: ',
            body: 'Hallo,\n\nich interessiere mich für: {name}.\n\nMeine Wünsche (Text, Motiv, Menge):\n\n\nName und Telefonnummer:\n',
            maxLines: 'max. {n}'
        },
        en: {
            from: 'from',
            inquire: 'Enquire now',
            subject: 'Enquiry: ',
            body: 'Hello,\n\nI am interested in: {name}.\n\nMy requirements (text, design, quantity):\n\n\nName and phone number:\n',
            maxLines: 'up to {n}',
            words: {
                'Druckfläche': 'Print area',
                'Zeilen': 'Lines',
                'Fläche': 'Size',
                'Material': 'Material',
                'Nur Stempelplatte': 'Text plate only',
                'Nur Stempelkissen': 'Ink pad only',
                'Aluminium-Verbundplatte 2 mm': 'Aluminium composite panel 2 mm'
            }
        },
        sl: {
            from: 'od',
            inquire: 'Povpraševanje',
            subject: 'Povpraševanje: ',
            body: 'Pozdravljeni,\n\nzanima me: {name}.\n\nMoje želje (besedilo, motiv, količina):\n\n\nIme in telefonska številka:\n',
            maxLines: 'največ {n}',
            words: {
                'Druckfläche': 'Površina odtisa',
                'Zeilen': 'Vrstice',
                'Fläche': 'Velikost',
                'Material': 'Material',
                'Nur Stempelplatte': 'Samo ploščica z besedilom',
                'Nur Stempelkissen': 'Samo blazinica',
                'Aluminium-Verbundplatte 2 mm': 'Aluminijasta kompozitna plošča 2 mm'
            }
        },
        uk: {
            from: 'від',
            inquire: 'Надіслати запит',
            subject: 'Запит: ',
            body: 'Добрий день!\n\nМене цікавить: {name}.\n\nМої побажання (текст, мотив, кількість):\n\n\nІм’я та номер телефону:\n',
            maxLines: 'до {n}',
            words: {
                'Druckfläche': 'Площа відбитка',
                'Zeilen': 'Рядки',
                'Fläche': 'Розмір',
                'Material': 'Матеріал',
                'Nur Stempelplatte': 'Лише пластина з текстом',
                'Nur Stempelkissen': 'Лише штемпельна подушка',
                'Aluminium-Verbundplatte 2 mm': 'Алюмінієва композитна панель 2 мм'
            }
        },
        hu: {
            from: 'indulóár',
            inquire: 'Árajánlatot kérek',
            subject: 'Ajánlatkérés: ',
            body: 'Üdvözlöm!\n\nÉrdeklődöm a következő iránt: {name}.\n\nKívánságaim (szöveg, motívum, mennyiség):\n\n\nNév és telefonszám:\n',
            maxLines: 'legfeljebb {n}',
            words: {
                'Druckfläche': 'Nyomtatási felület',
                'Zeilen': 'Sorok',
                'Fläche': 'Méret',
                'Material': 'Anyag',
                'Nur Stempelplatte': 'Csak a bélyegzőlap',
                'Nur Stempelkissen': 'Csak a festékpárna',
                'Aluminium-Verbundplatte 2 mm': 'Alumínium kompozit lemez, 2 mm'
            }
        },
        it: {
            from: 'da',
            inquire: 'Richiedi un preventivo',
            subject: 'Richiesta: ',
            body: 'Buongiorno,\n\nmi interessa: {name}.\n\nLe mie richieste (testo, motivo, quantità):\n\n\nNome e numero di telefono:\n',
            maxLines: 'fino a {n}',
            words: {
                'Druckfläche': 'Area di stampa',
                'Zeilen': 'Righe',
                'Fläche': 'Dimensioni',
                'Material': 'Materiale',
                'Nur Stempelplatte': 'Solo piastra con il testo',
                'Nur Stempelkissen': 'Solo cuscinetto',
                'Aluminium-Verbundplatte 2 mm': 'Pannello composito in alluminio 2 mm'
            }
        },
        hr: {
            from: 'od',
            inquire: 'Pošaljite upit',
            subject: 'Upit: ',
            body: 'Poštovani,\n\nzanima me: {name}.\n\nMoje želje (tekst, motiv, količina):\n\n\nIme i broj telefona:\n',
            maxLines: 'najviše {n}',
            words: {
                'Druckfläche': 'Površina otiska',
                'Zeilen': 'Retci',
                'Fläche': 'Veličina',
                'Material': 'Materijal',
                'Nur Stempelplatte': 'Samo pločica s tekstom',
                'Nur Stempelkissen': 'Samo jastučić',
                'Aluminium-Verbundplatte 2 mm': 'Aluminijska kompozitna ploča 2 mm'
            }
        }
    };
    var T = TEXT[SITE.lang] || TEXT.de;

    function tr(text) {
        var match = /^max\. (\d+)$/.exec(text);
        if (match) {
            return T.maxLines.replace('{n}', match[1]);
        }
        return (T.words && T.words[text]) || text;
    }

    // name kann ein Text sein oder {de: '...', en: '...', sl: '...', uk: '...', hu: '...', it: '...', hr: '...'}
    function localName(name) {
        return typeof name === 'string' ? name : (name[SITE.lang] || name.de);
    }

    function escapeHtml(text) {
        return String(text).replace(/[&<>"]/g, function (c) {
            return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c];
        });
    }

    function inquiryLink(name) {
        var subject = T.subject + name;
        var body = T.body.replace('{name}', name);
        return 'mailto:' + window.SHOP.email +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);
    }

    /*
     * Produktformat:
     *   name    Produktname (Text oder {de, en, sl})
     *   image   Bildpfad
     *   specs   {Bezeichnung: Wert} - z. B. {'Druckfläche': '26 × 9 mm'}
     *   price   Preis in Euro (Zahl)
     *   from    true = Preis wird als "ab ..." angezeigt
     *   extras  {Bezeichnung: Preis in Euro} - z. B. {'Nur Stempelplatte': 18.20}
     *   note    optionaler Zusatztext
     */
    function card(p) {
        var name = localName(p.name);
        var specs = Object.keys(p.specs || {}).map(function (label) {
            return '<dt>' + escapeHtml(tr(label)) + '</dt><dd>' + escapeHtml(tr(p.specs[label])) + '</dd>';
        }).join('');
        var extras = Object.keys(p.extras || {}).map(function (label) {
            return '<li>' + escapeHtml(tr(label)) + ': ' + euro.format(p.extras[label]) + '</li>';
        }).join('');

        return '<article class="product">' +
            '<div class="product__media"><img src="' + SITE.root + p.image + '" alt="' + escapeHtml(name) + '" loading="lazy"></div>' +
            '<div class="product__body">' +
            '  <h3>' + escapeHtml(name) + '</h3>' +
            (specs ? '  <dl class="product__specs">' + specs + '</dl>' : '') +
            (p.note ? '  <p class="product__note">' + escapeHtml(p.note) + '</p>' : '') +
            '  <p class="product__price">' + (p.from ? '<small>' + T.from + '</small> ' : '') + euro.format(p.price) + '</p>' +
            (extras ? '  <ul class="product__extras">' + extras + '</ul>' : '') +
            '  <a class="btn btn--outline" href="' + inquiryLink(name) + '">' + T.inquire + '</a>' +
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
