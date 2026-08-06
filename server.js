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

// Explicit service and language routes
app.get(['/en', '/en-AE', '/en-AE/*'], (req, res) => {
    const enPath = path.join(__dirname, 'en-AE.html');
    if (fs.existsSync(enPath)) {
        res.sendFile(enPath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.get(['/ar', '/ar-AE', '/ar-AE/*'], (req, res) => {
    const arPath = path.join(__dirname, 'ar-AE.html');
    if (fs.existsSync(arPath)) {
        res.sendFile(arPath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Universal Catch-all for any service subpath (e.g., /ar-AE/house-cleaning)
app.get('*', (req, res) => {
    const pathStr = req.path;
    if (pathStr.includes('en') || pathStr.includes('English')) {
        const enPath = path.join(__dirname, 'en-AE.html');
        if (fs.existsSync(enPath)) {
            res.sendFile(enPath);
            return;
        }
    }
    const arPath = path.join(__dirname, 'ar-AE.html');
    if (fs.existsSync(arPath)) {
        res.sendFile(arPath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
