const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

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
