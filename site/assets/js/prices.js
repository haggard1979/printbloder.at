/*
 * Baut Preistabellen aus window.PRICE_TABLES (siehe data/preise/*.js) in die
 * Platzhalter <table class="price-table" data-table="0"></table> der Seite,
 * sowie Einzelpreise aus window.PRICE_VALUES in <span data-price="name"></span>.
 * Die Daten gelten für alle Sprachen; Preise werden je Sprache formatiert.
 */
(function () {
    var LANG = (window.SITE && window.SITE.lang) || 'de';

    function escapeHtml(text) {
        return String(text).replace(/[&<>"]/g, function (c) {
            return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c];
        });
    }

    function money(value) {
        var amount = value.toFixed(2);
        return LANG === 'en' ? '€' + amount : amount.replace('.', ',') + ' €';
    }

    // Text: "..." (überall gleich) oder {de: ..., en: ..., sl: ..., uk: ...}
    function localText(text) {
        return typeof text === 'string' ? text : (text[LANG] || text.de);
    }

    function cell(value) {
        if (value === null) {
            return '–';
        }
        if (typeof value === 'number') {
            return money(value);
        }
        if (typeof value === 'object' && 'p' in value) {
            var unit = value.unit ? localText(value.unit) : '';
            return (value.plus ? '+' : '') + money(value.p) + (unit ? ' ' + unit : '');
        }
        return localText(value);
    }

    function render(table, data) {
        var html = '';
        if (data.caption) {
            html += '<caption>' + escapeHtml(cell(data.caption)) + '</caption>';
        }
        html += '<thead><tr>' + data.columns.map(function (column) {
            return '<th scope="col">' + escapeHtml(cell(column)) + '</th>';
        }).join('') + '</tr></thead>';
        html += '<tbody>' + data.rows.map(function (row) {
            return '<tr>' + row.map(function (value, i) {
                return i === 0
                    ? '<th scope="row">' + escapeHtml(cell(value)) + '</th>'
                    : '<td>' + escapeHtml(cell(value)) + '</td>';
            }).join('') + '</tr>';
        }).join('') + '</tbody>';
        table.innerHTML = html;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var tables = window.PRICE_TABLES || [];
        document.querySelectorAll('table[data-table]').forEach(function (table) {
            var data = tables[Number(table.getAttribute('data-table'))];
            if (data) {
                render(table, data);
            }
        });

        // Einzelpreise im Fließtext: <span data-price="name"></span> aus window.PRICE_VALUES
        var values = window.PRICE_VALUES || {};
        document.querySelectorAll('[data-price]').forEach(function (element) {
            var value = values[element.getAttribute('data-price')];
            if (typeof value === 'number') {
                element.textContent = money(value);
            }
        });
    });
})();
