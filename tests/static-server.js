/*
 * Minimaler Webserver für die Tests: liefert die Dateien des Projektordners aus.
 * Zusätzlich liegen unter /__tests/fonts/ die Testschriften (tests/fonts/).
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ttf': 'font/ttf'
};

const FONTS = path.join(__dirname, 'fonts');

function start(root) {
    const server = http.createServer((req, res) => {
        const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        const fontPath = urlPath.startsWith('/__tests/fonts/') ? path.join(FONTS, urlPath.slice('/__tests/fonts/'.length)) : null;
        const file = fontPath || path.join(root, urlPath.endsWith('/') ? urlPath + 'index.html' : urlPath);
        if (!file.startsWith(fontPath ? FONTS : root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
            res.writeHead(404);
            res.end('not found');
            return;
        }
        res.writeHead(200, {'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream'});
        fs.createReadStream(file).pipe(res);
    });
    return new Promise(resolve => {
        server.listen(0, '127.0.0.1', () => resolve({
            url: 'http://127.0.0.1:' + server.address().port + '/',
            close: () => new Promise(done => server.close(done))
        }));
    });
}

module.exports = {start};
