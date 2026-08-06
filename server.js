const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

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
app.post('/api/bookings', (req, res) => {
    const { service_name, customer_name, phone, address, booking_date } = req.body;
    const query = `INSERT INTO bookings (service_name, customer_name, phone, address, booking_date) VALUES (?, ?, ?, ?, ?)`;
    db.run(query, [service_name, customer_name, phone, address, booking_date], function(err) {
        if (err) {
            res.status(500).json({ success: false, error: err.message });
        } else {
            res.json({ success: true, bookingId: this.lastID });
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
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Language Routes
app.get('/en', (req, res) => {
    const enPath = path.join(__dirname, 'en-AE.html');
    if (require('fs').existsSync(enPath)) {
        res.sendFile(enPath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.get('/en-AE', (req, res) => {
    const enPath = path.join(__dirname, 'en-AE.html');
    if (require('fs').existsSync(enPath)) {
        res.sendFile(enPath);
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

// Arabic default route
app.get('/ar-AE', (req, res) => {
    res.sendFile(path.join(__dirname, 'ar-AE.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Catch-all for subpaths
app.get('*', (req, res) => {
    if (req.path.startsWith('/en')) {
        const enPath = path.join(__dirname, 'en-AE.html');
        if (require('fs').existsSync(enPath)) {
            res.sendFile(enPath);
            return;
        }
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
