/*
 * Karte (Anfahrt): wird erst nach Klick geladen, damit ohne Zustimmung keine Daten an
 * Drittanbieter gehen. Adresse und Texte stehen im HTML (data-map-src, data-map-title).
 */
(function () {
    document.querySelectorAll('[data-map-src]').forEach(function (box) {
        var button = box.querySelector('[data-map-load]');
        if (!button) {
            return;
        }
        button.addEventListener('click', function () {
            var frame = document.createElement('iframe');
            frame.src = box.getAttribute('data-map-src');
            frame.title = box.getAttribute('data-map-title') || '';
            frame.loading = 'lazy';
            frame.referrerPolicy = 'no-referrer-when-downgrade';
            box.textContent = '';
            box.appendChild(frame);
        });
    });
})();
