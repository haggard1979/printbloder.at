/*
 * Erzeugt site/img/vorschau.jpg (1200 × 630) aus tools/vorschau.html – das Bild, das
 * Messenger und soziale Netzwerke bei geteilten Links anzeigen (og:image, siehe tools/seo.js).
 *
 *   npm run vorschau
 */
const path = require('path');
const {chromium} = require('playwright');

(async () => {
    // CHROMIUM_PATH: anderer Chromium als der von Playwright (siehe tests/run.js)
    const browser = await chromium.launch({executablePath: process.env.CHROMIUM_PATH || undefined});
    const page = await browser.newPage({viewport: {width: 1200, height: 630}});
    await page.goto('file://' + path.join(__dirname, 'vorschau.html'));
    await page.screenshot({path: path.join(__dirname, '..', 'site', 'img', 'vorschau.jpg'), type: 'jpeg', quality: 90});
    await browser.close();
    console.log('site/img/vorschau.jpg erzeugt');
})();
