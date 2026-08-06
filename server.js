const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, { index: false }));

// Compatibility for the crawler's localized asset URLs. The crawler preserved
// the original static path after a hashed "*.bin" prefix; resolve that path
// back to the downloaded file in assets-local by content hash.
const localAssetDir = path.join(__dirname, 'assets-local');
const originalStaticDir = path.join(__dirname, 'deax38zvkau9d.cloudfront.net', 'prod', 'assets', 'static');
const crypto = require('crypto');
const localAssetByHash = new Map();
if (fs.existsSync(localAssetDir)) {
    for (const filename of fs.readdirSync(localAssetDir)) {
        const fullPath = path.join(localAssetDir, filename);
        if (!fs.statSync(fullPath).isFile()) continue;
        try {
            const hash = crypto.createHash('sha256').update(fs.readFileSync(fullPath)).digest('hex');
            localAssetByHash.set(hash, fullPath);
        } catch (_) {}
    }
}
// Explicit aliases for assets whose original CDN path is unavailable in the mirror.
const explicitAssetAliases = {
    'ae.svg': 'ae.svg',
    'sa.svg': 'sa.svg',
    'svgs/question-mark-outlined.svg': 'question-mark-outlined.svg',
    'home/SearchEmptyState.svg': 'faf9712b1a01f868.binSearchEmptyState.svg',
    'home/download-app-android@2x.jpg': 'download-app-android@2x.jpg',
    'home/download-app-ios@2x.jpg': 'download-app-ios@2x.jpg'
};
app.get(/^\/assets-local\/[^/]+\.bin(.+)$/, (req, res, next) => {
    const relative = req.params[0].replace(/^\/+/, '');
    const alias = explicitAssetAliases[relative];
    if (alias) {
        const file = path.join(localAssetDir, alias);
        if (fs.existsSync(file)) return res.sendFile(file);
    }
    return next();
});

app.get(/^\/assets-local\/[^/]+\.binfonts\/(hkgrotesk-(?:regular|bold)-webfont\.ttf)$/, (req, res, next) => {
    const fontPath = path.join(localAssetDir, req.params[0]);
    if (fs.existsSync(fontPath)) return res.sendFile(fontPath);
    return next();
});

app.get(/^\/assets-local\/[^/]+\.bin(.+)$/, (req, res, next) => {
    const originalRelative = req.params[0].replace(/^\/+/, '');
    const originalPath = path.join(originalStaticDir, originalRelative);
    if (!originalPath.startsWith(`${originalStaticDir}${path.sep}`) || !fs.existsSync(originalPath)) return next();
    try {
        const hash = crypto.createHash('sha256').update(fs.readFileSync(originalPath)).digest('hex');
        const localPath = localAssetByHash.get(hash);
        if (localPath) return res.sendFile(localPath);
    } catch (_) {}
    return next();
});

// Database Setup
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Database opening error: ', err);
    } else {
        console.log('Connected to SQLite database.');
        db.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            service_name TEXT,
            customer_name TEXT,
            phone TEXT,
            address TEXT,
            booking_date TEXT,
            status TEXT DEFAULT 'pending',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    }
});

// API Endpoints
app.post(['/api/bookings', '/api/book'], (req, res) => {
    const service_name = req.body.service_name || req.body.service || 'General Service';
    const customer_name = req.body.customer_name || req.body.name || 'Valued Customer';
    const phone = req.body.phone || 'N/A';
    const address = req.body.address || 'N/A';
    const booking_date = req.body.booking_date || req.body.date || new Date().toISOString();

    const query = `INSERT INTO bookings (service_name, customer_name, phone, address, booking_date) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [service_name, customer_name, phone, address, booking_date], function(err) {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, bookingId: this.lastID, orderId: this.lastID });
        }
    });
});

app.get('/api/admin/bookings', (req, res) => {
    db.all(`SELECT * FROM bookings ORDER BY created_at DESC`, [], (err, rows) => {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, bookings: rows });
        }
    });
});

app.post('/api/admin/bookings/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    db.run(`UPDATE bookings SET status = ? WHERE id = ?`, [status, id], function(err) {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true });
        }
    });
});

app.get('/admin', (req, res) => {
    const adminPath = path.join(__dirname, 'admin.html');
    if (fs.existsSync(adminPath)) {
        res.sendFile(adminPath);
    } else {
        res.send('Admin dashboard not found.');
    }
});

// Restore image components that can become empty after client hydration when
// the original image metadata endpoint is unavailable in the mirrored site.
const appSectionFallback = `<script data-local-app-fallback>(function(){function img(src,alt,w,h){var i=document.createElement('img');i.src=src;i.alt=alt;i.loading='lazy';if(w)i.width=w;if(h)i.height=h;return i;}function restore(){document.querySelectorAll('.mobile-app-downloader .app-icons').forEach(function(box){var a=box.querySelectorAll('a');if(a[0]&&!a[0].querySelector('img'))a[0].appendChild(img('/assets-local/faf9712b1a01f868.bindownload-app-android@2x.jpg?f=webp','Download Android App'));if(a[1]&&!a[1].querySelector('img'))a[1].appendChild(img('/assets-local/faf9712b1a01f868.bindownload-app-ios@2x.jpg?f=webp','Download iOS App'));});document.querySelectorAll('.footer-bottom .app-icons').forEach(function(box){var a=box.querySelectorAll('a');if(a[0]&&!a[0].querySelector('img'))a[0].appendChild(img('/assets-local/faf9712b1a01f868.binhome/appstore.png?f=webp','Download iOS App',125,40));if(a[1]&&!a[1].querySelector('img'))a[1].appendChild(img('/assets-local/faf9712b1a01f868.binhome/playstore.png?f=webp','Download Android App',125,40));});document.querySelectorAll('.mobile-app-downloader .right-content').forEach(function(box){if(!box.querySelector('img'))box.appendChild(img('/assets-local/faf9712b1a01f868.binhome/apps.webp?f=webp','Footer app',395,332));});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',restore);else restore();new MutationObserver(restore).observe(document.documentElement,{childList:true,subtree:true});})();</script>`;
function sendMirroredHtml(res, file) {
    try {
        let html = fs.readFileSync(file, 'utf8');
        // The mirrored homepage already contains the complete rendered sections. The copied Nuxt runtime
        // is incomplete and removes those sections during hydration, so keep the stable server-rendered DOM.
        if (path.basename(file) === 'index.html') {
            html = html.replace(/<script\b[^>]*src=["'][^"']*\/_nuxt\/[^"']*["'][^>]*><\/script>/gi, '');
            html = html.replace(/\sloading=["']lazy["']/gi, ' loading="eager"');
            const localStyles = ['SectionTitle.VdBQ9ygq.css','MobileAppDownloader.BatusIl2.css','index.V_X9n60H.css','Loading.xBdaesc-.css','TitleTextItem.BgfIqJ8y.css','CaptionTextItem.B98ug7T9.css','LocationSearch.ioU0w2Z7.css','HelperTextItem.DCvG-J3h.css','ButtonTextItem.Clk8LGEf.css','Notification.Bd6p11ET.css','default.myeD_meZ.css'].map((name) => `<link rel="stylesheet" href="/_nuxt/6/${name}">`).join('');
            html = html.replace(/<\/head>/i, `${localStyles}</head>`);
        }
        if (!html.includes('data-local-app-fallback')) html = html.replace(/<\/body>/i, `${appSectionFallback}</body>`);
        res.type('html').send(html);
    } catch (_) { res.sendFile(file); }
}

// Route every mirrored page through its clean URL, e.g. /ar-AE/house-cleaning
// -> /ar-AE/house-cleaning.html. The requested path is normalized first so a
// URL can never escape the project directory.
function mirroredPageForRequest(requestPath) {
    let pathname = decodeURIComponent((requestPath || '/').split('?')[0]);
    pathname = pathname.replace(/\/{2,}/g, '/');
    if (!pathname.startsWith('/')) pathname = `/${pathname}`;
    if (pathname === '/') return path.join(__dirname, 'index.html');

    const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
    const segments = cleanPath.split('/').filter(Boolean);
    if (segments.some((segment) => segment === '.' || segment === '..')) return null;

    // Language landing pages are stored at the project root.
    if (segments.length === 1 && ['ar-AE', 'ar-SA', 'en-AE'].includes(segments[0])) {
        return path.join(__dirname, `${segments[0]}.html`);
    }

    const candidate = path.resolve(__dirname, `${cleanPath}.html`);
    const projectRoot = path.resolve(__dirname);
    if (!candidate.startsWith(`${projectRoot}${path.sep}`)) return null;
    if (fs.existsSync(candidate)) return candidate;

    // A few source navigation links refer to generic English service/city
    // slugs that were not emitted as standalone files by the crawler. Prefer
    // the closest localized service page instead of returning a blank/404 page.
    if (segments.length === 2 && ['ar-AE', 'ar-SA', 'en-AE'].includes(segments[0])) {
        const lang = segments[0];
        const slug = segments[1];
        const alternatives = [
            path.join(__dirname, lang, `${slug}-dubai.html`),
            path.join(__dirname, lang, `${slug}-abu-dhabi.html`),
            path.join(__dirname, lang, `${slug}-sharjah.html`),
            path.join(__dirname, lang, `${slug}-ajman.html`),
            path.join(__dirname, `${lang}.html`)
        ];
        const fallback = alternatives.find((file) => fs.existsSync(file));
        if (fallback) return fallback;
    }
    if (cleanPath === 'blog/en-AE' || cleanPath.endsWith('/my-account/help')) {
        const lang = cleanPath.startsWith('ar-') ? cleanPath.split('/')[0] : 'en-AE';
        const fallback = path.join(__dirname, `${lang}.html`);
        if (fs.existsSync(fallback)) return fallback;
    }
    return candidate;
}

// Serve the downloaded checkout page that belongs to the exact original route.
// Each service keeps its own original checkout path and rendered HTML instead of sharing booking.html.
const mirroredCheckoutRoot = path.join(__dirname, 'mirrored-checkouts');
app.get(/^\/(ar-AE|ar-SA|en-AE)\/(.+)\/checkout(?:\/(details|flex))?\/?$/, (req, res, next) => {
    const lang = req.params[0];
    const rest = req.params[1];
    const step = req.params[2] || 'flex';
    const file = path.join(mirroredCheckoutRoot, lang, rest, 'checkout', `${step}.html`);
    if (file.startsWith(`${mirroredCheckoutRoot}${path.sep}`) && fs.existsSync(file)) {
        return sendMirroredHtml(res, file);
    }
    return next();
});

app.get('*', (req, res, next) => {
    const mirroredPage = mirroredPageForRequest(req.path);
    if (mirroredPage && fs.existsSync(mirroredPage)) {
        return sendMirroredHtml(res, mirroredPage);
    }
    return next();
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'ar-AE.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
