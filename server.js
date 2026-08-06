const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

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

// Demo booking funnel: every service can open the same four-step local checkout UI.
// It never calls a payment provider; payment success/failure is simulated in booking.html.
app.get(/^\/((?:ar-AE|ar-SA|en-AE)\/[^/]+)\/checkout(?:\/[^/]+)?$/, (req, res, next) => {
    const bookingPath = path.join(__dirname, 'booking.html');
    if (fs.existsSync(bookingPath)) return res.sendFile(bookingPath);
    return next();
});

app.get('*', (req, res, next) => {
    const mirroredPage = mirroredPageForRequest(req.path);
    if (mirroredPage && fs.existsSync(mirroredPage)) {
        return res.sendFile(mirroredPage);
    }
    return next();
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'ar-AE.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
