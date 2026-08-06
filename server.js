const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from root (_nuxt, etc.)
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

// API Endpoints for Bookings & Checkout
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

// Serve original Justlife Nuxt SPA for all frontend routes and service subpaths
app.get(['/ar', '/ar-AE', '/ar-AE/*', '/en', '/en-AE', '/en-AE/*', '/services', '/services/*', '/*'], (req, res, next) => {
    // If request is for an API or static asset file, let express.static handle it
    if (req.path.startsWith('/api') || req.path.startsWith('/_nuxt') || req.path.includes('.')) {
        return next();
    }
    const arPath = path.join(__dirname, 'ar-AE.html');
    if (fs.existsSync(arPath)) {
        res.sendFile(arPath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
