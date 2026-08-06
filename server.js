const express = require('express');
const path = require('path');
const { Pool } = require('pg');
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

// Database Setup. Railway uses PostgreSQL; SQLite remains only as a local-development fallback.
const dbPath = path.join(__dirname, 'database.sqlite');
const sqliteDb = new sqlite3.Database(dbPath);
const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRIVATE_URL || process.env.PGURL;
const pgPool = databaseUrl ? new Pool({
    connectionString: databaseUrl,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
}) : null;
const usingPostgres = Boolean(pgPool);
const postgresReady = usingPostgres
    ? pgPool.query(`CREATE TABLE IF NOT EXISTS bookings (
        id BIGSERIAL PRIMARY KEY,
        service_name TEXT NOT NULL DEFAULT 'General Service',
        customer_name TEXT NOT NULL DEFAULT 'Valued Customer',
        phone TEXT NOT NULL DEFAULT 'N/A',
        address TEXT NOT NULL DEFAULT 'N/A',
        booking_date TIMESTAMPTZ NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )`).then(() => console.log('Connected to PostgreSQL database.')).catch((err) => {
        console.error('PostgreSQL initialization error:', err.message);
        throw err;
    })
    : new Promise((resolve, reject) => {
        sqliteDb.run(`CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            service_name TEXT,
            customer_name TEXT,
            phone TEXT,
            address TEXT,
            booking_date TEXT,
            status TEXT DEFAULT 'pending',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) reject(err); else { console.log('Using local SQLite fallback.'); resolve(); }
        });
    });

// API Endpoints
app.post(['/api/bookings', '/api/book'], async (req, res) => {
    const service_name = req.body.service_name || req.body.service || 'General Service';
    const customer_name = req.body.customer_name || req.body.name || 'Valued Customer';
    const phone = req.body.phone || 'N/A';
    const address = req.body.address || 'N/A';
    const booking_date = req.body.booking_date || req.body.date || new Date().toISOString();
    try {
        await postgresReady;
        if (usingPostgres) {
            const result = await pgPool.query(
                'INSERT INTO bookings (service_name, customer_name, phone, address, booking_date) VALUES ($1, $2, $3, $4, $5) RETURNING id',
                [service_name, customer_name, phone, address, booking_date]
            );
            return res.json({ success: true, bookingId: result.rows[0].id, orderId: result.rows[0].id });
        }
        sqliteDb.run('INSERT INTO bookings (service_name, customer_name, phone, address, booking_date) VALUES (?, ?, ?, ?, ?)', [service_name, customer_name, phone, address, booking_date], function(err) {
            if (err) return res.status(500).json({ success: false, error: err.message });
            return res.json({ success: true, bookingId: this.lastID, orderId: this.lastID });
        });
    } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

app.get('/api/admin/bookings', async (req, res) => {
    try {
        await postgresReady;
        if (usingPostgres) {
            const result = await pgPool.query('SELECT * FROM bookings ORDER BY created_at DESC');
            return res.json({ success: true, bookings: result.rows });
        }
        sqliteDb.all('SELECT * FROM bookings ORDER BY created_at DESC', [], (err, rows) => {
            if (err) return res.status(500).json({ success: false, error: err.message });
            return res.json({ success: true, bookings: rows });
        });
    } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
});

app.post('/api/admin/bookings/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        await postgresReady;
        if (usingPostgres) {
            await pgPool.query('UPDATE bookings SET status = $1 WHERE id = $2', [status, id]);
            return res.json({ success: true });
        }
        sqliteDb.run('UPDATE bookings SET status = ? WHERE id = ?', [status, id], function(err) {
            if (err) return res.status(500).json({ success: false, error: err.message });
            return res.json({ success: true });
        });
    } catch (err) { return res.status(500).json({ success: false, error: err.message }); }
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
const homepageStabilityCss = `<style data-homepage-stability>
/* Static mirror must remain visible after scroll and browser repaint. */
#desktop-justlife-logo, #desktop-justlife-logo img, .home-wrapper img, .blog-categories-section img, .features-section img, .insurance-section img, .mobile-app-downloader img, .footer-bottom img { opacity: 1 !important; visibility: visible !important; }
#desktop-justlife-logo { display: block !important; }
.home-wrapper img { content-visibility: visible !important; }
.blog-categories-section, .features-section, .insurance-section, .mobile-app-downloader { opacity: 1 !important; visibility: visible !important; transform: none !important; }
.insurance-section { background: #00AEEF !important; color: #fff !important; }
.insurance-section .section-title-wrapper, .insurance-section .section-title-wrapper *, .insurance-section h2, .insurance-section p { color: #fff !important; }
</style>`;
const locationPickerEnhancement = `<style data-local-location-picker>
.local-location-backdrop{position:fixed;inset:0;background:rgba(15,23,42,.48);z-index:9998;display:none;align-items:center;justify-content:center;padding:18px}.local-location-backdrop.open{display:flex}.local-location-modal{width:min(620px,100%);background:#fff;border-radius:18px;box-shadow:0 20px 70px rgba(0,0,0,.3);overflow:hidden;font-family:HKGrotesk,Arial,sans-serif}.local-location-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px;border-bottom:1px solid #edf0f3}.local-location-head h3{margin:0;font-size:20px;color:#182230}.local-location-close{border:0;background:#f1f5f9;border-radius:50%;width:34px;height:34px;font-size:22px;cursor:pointer}.local-location-search{padding:16px 18px 8px}.local-location-search input{width:100%;box-sizing:border-box;border:1px solid #cbd5e1;border-radius:10px;padding:13px 14px;font-size:15px}.local-location-map{height:210px;margin:10px 18px;border-radius:14px;position:relative;overflow:hidden;background:#e7f3e9;background-image:linear-gradient(30deg,rgba(255,255,255,.9) 12%,transparent 12.5%,transparent 87%,rgba(255,255,255,.9) 87.5%),linear-gradient(150deg,rgba(255,255,255,.9) 12%,transparent 12.5%,transparent 87%,rgba(255,255,255,.9) 87.5%);background-size:80px 140px}.local-location-map:before{content:'';position:absolute;width:70%;height:18px;left:-5%;top:40%;background:rgba(73,144,226,.55);border-radius:50%;transform:rotate(-12deg)}.local-location-pin{position:absolute;left:50%;top:50%;transform:translate(-50%,-100%) rotate(-45deg);width:25px;height:25px;border-radius:50% 50% 50% 0;background:#00aef0;box-shadow:0 3px 8px rgba(0,0,0,.25)}.local-location-pin:after{content:'';position:absolute;width:9px;height:9px;border-radius:50%;background:#fff;left:8px;top:8px}.local-location-actions{display:flex;gap:10px;padding:4px 18px 14px}.local-location-actions button{flex:1;border:0;border-radius:10px;padding:12px;font-weight:700;cursor:pointer}.local-location-geolocate{background:#e8f8fd;color:#008bc0}.local-location-confirm{background:#00aef0;color:#fff}.local-location-results{padding:0 18px 18px;max-height:180px;overflow:auto}.local-location-result{display:block;width:100%;text-align:left;border:0;border-bottom:1px solid #eef2f7;background:#fff;padding:12px 6px;cursor:pointer;color:#263445;font-size:14px}.local-location-result:hover{background:#f5fbfe;color:#008bc0}.local-location-status{font-size:13px;color:#64748b;padding:0 18px 10px;min-height:18px}
</style><div class="local-location-backdrop" id="local-location-backdrop" role="dialog" aria-modal="true"><div class="local-location-modal"><div class="local-location-head"><h3>Where would you like to receive your service?</h3><button class="local-location-close" type="button">×</button></div><div class="local-location-search"><input id="local-location-search" type="search" placeholder="Search for area, street name, landmark..." autocomplete="off"></div><div class="local-location-map"><span class="local-location-pin"></span></div><div class="local-location-status" id="local-location-status"></div><div class="local-location-results" id="local-location-results"></div><div class="local-location-actions"><button class="local-location-geolocate" type="button" id="local-location-geolocate">Set my location</button><button class="local-location-confirm" type="button" id="local-location-confirm">Confirm location</button></div></div></div><script data-local-location-picker>(function(){var areas=['Dubai Marina, Dubai','Jumeirah, Dubai','Al Barsha, Dubai','Downtown Dubai, Dubai','Deira, Dubai','Abu Dhabi City, Abu Dhabi','Khalifa City, Abu Dhabi','Al Reem Island, Abu Dhabi','Sharjah City, Sharjah','Ajman, United Arab Emirates','Riyadh, Saudi Arabia','Jeddah, Saudi Arabia'];var back=document.getElementById('local-location-backdrop'),field=document.getElementById('location-input'),input=document.getElementById('local-location-search'),results=document.getElementById('local-location-results'),status=document.getElementById('local-location-status'),selected='';function show(list){results.innerHTML='';list.slice(0,8).forEach(function(a){var b=document.createElement('button');b.type='button';b.className='local-location-result';b.textContent='⌖  '+a;b.onclick=function(){selected=a;input.value=a;status.textContent='Selected location: '+a;};results.appendChild(b);});}function open(){back.classList.add('open');input.focus();show(areas);}function close(){back.classList.remove('open');}function bind(){if(!field)return;field.readOnly=true;field.addEventListener('click',open);field.addEventListener('focus',open);back.querySelector('.local-location-close').onclick=close;back.addEventListener('click',function(e){if(e.target===back)close();});input.addEventListener('input',function(){var q=input.value.toLowerCase().trim();show(q?areas.filter(function(a){return a.toLowerCase().indexOf(q)>=0;}):areas);});document.getElementById('local-location-confirm').onclick=function(){selected=selected||input.value.trim();if(!selected){status.textContent='Please choose an area first.';return;}localStorage.setItem('justlife:selectedLocation',selected);field.value=selected;close();};document.getElementById('local-location-geolocate').onclick=function(){if(!navigator.geolocation){status.textContent='Please search for your area.';return;}status.textContent='Requesting your location...';navigator.geolocation.getCurrentPosition(function(p){selected='Current location ('+p.coords.latitude.toFixed(4)+', '+p.coords.longitude.toFixed(4)+')';input.value=selected;status.textContent='Your location is ready to confirm.';},function(){status.textContent='Location permission was not granted; please search for your area.';});};var saved=localStorage.getItem('justlife:selectedLocation');if(saved)field.value=saved;}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();})();</script>`;
const appSectionFallback = `<script data-local-app-fallback>(function(){function img(src,alt,w,h){var i=document.createElement('img');i.src=src;i.alt=alt;i.loading='lazy';if(w)i.width=w;if(h)i.height=h;return i;}function restore(){document.querySelectorAll('.mobile-app-downloader .app-icons').forEach(function(box){var a=box.querySelectorAll('a');if(a[0]&&!a[0].querySelector('img'))a[0].appendChild(img('/assets-local/faf9712b1a01f868.bindownload-app-android@2x.jpg?f=webp','Download Android App'));if(a[1]&&!a[1].querySelector('img'))a[1].appendChild(img('/assets-local/faf9712b1a01f868.bindownload-app-ios@2x.jpg?f=webp','Download iOS App'));});document.querySelectorAll('.footer-bottom .app-icons').forEach(function(box){var a=box.querySelectorAll('a');if(a[0]&&!a[0].querySelector('img'))a[0].appendChild(img('/assets-local/faf9712b1a01f868.binhome/appstore.png?f=webp','Download iOS App',125,40));if(a[1]&&!a[1].querySelector('img'))a[1].appendChild(img('/assets-local/faf9712b1a01f868.binhome/playstore.png?f=webp','Download Android App',125,40));});document.querySelectorAll('.mobile-app-downloader .right-content').forEach(function(box){if(!box.querySelector('img'))box.appendChild(img('/assets-local/faf9712b1a01f868.binhome/apps.webp?f=webp','Footer app',395,332));});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',restore);else restore();new MutationObserver(restore).observe(document.documentElement,{childList:true,subtree:true});})();</script>`;
function sendMirroredHtml(res, file, query = {}) {
    try {
        let html = fs.readFileSync(file, 'utf8');
        const isCheckoutFile = file.startsWith(mirroredCheckoutRoot + path.sep);
        // The mirrored homepage already contains the complete rendered sections. The copied Nuxt runtime
        // is incomplete and removes those sections during hydration, so keep the stable server-rendered DOM.
        if (path.basename(file) === 'index.html') {
            html = html.replace(/<script\b[^>]*src=["'][^"']*\/_nuxt\/[^"']*["'][^>]*><\/script>/gi, '');
            html = html.replace(/\sloading=["']lazy["']/gi, ' loading="eager"');
            const localStyles = ['SectionTitle.VdBQ9ygq.css','MobileAppDownloader.BatusIl2.css','index.V_X9n60H.css','Loading.xBdaesc-.css','TitleTextItem.BgfIqJ8y.css','CaptionTextItem.B98ug7T9.css','LocationSearch.ioU0w2Z7.css','HelperTextItem.DCvG-J3h.css','ButtonTextItem.Clk8LGEf.css','Notification.Bd6p11ET.css','default.myeD_meZ.css'].map((name) => `<link rel="stylesheet" href="/_nuxt/6/${name}">`).join('');
            html = html.replace(/<\/head>/i, `${localStyles}${homepageStabilityCss}</head>`);
        }
        // Keep mirrored pages fully standalone. The copied Nuxt runtime depends on
        // unavailable origin APIs and can blank the server-rendered inner pages;
        // preserve the captured HTML and remove executable hydration payloads there.
        if (path.basename(file) === 'index.html') html = html.replace(/<\/body>/i, `${locationPickerEnhancement}</body>`);
        if (path.basename(file) !== 'index.html' && !isCheckoutFile) {
            html = html.replace(/<script\b[\s\S]*?<\/script>/gi, '');
        }
        // Route CDN assets to the downloaded local tree and convert original-site
        // absolute links into local-relative links.
        html = html.replace(/https:\/\/deax38zvkau9d\.cloudfront\.net/g, '/deax38zvkau9d.cloudfront.net');
        html = html.replace(/https?:\/\/(?:[^/"'\s]+\.)?justlife\.com/gi, '');
        html = html.replace(/https?:\/\/localhost:\d+/gi, '');
        // Also localize JSON-escaped first-party URLs left inside Nuxt payloads.
        html = html.replace(/https?:\\\/\\\/(?:www\\\.)?justlife\\\.com/gi, '');
        html = html.replace(/https?:\\\/\\\/localhost:\\d+/gi, '');
        const voucher = typeof query.voucher === 'string' ? query.voucher.trim() : '';
        if (voucher) {
            const encodedVoucher = encodeURIComponent(voucher);
            html = html.replace(/(href=["'])(\/(?:ar-AE|ar-SA|en-AE)\/[^"']+\/checkout(?:\/[^"']*)?)(["'])/gi, (match, prefix, href, suffix) => {
                if (/[?&]voucher=/i.test(href)) return match;
                return `${prefix}${href}?voucher=${encodedVoucher}${suffix}`;
            });
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
    // Some legacy sitemap URLs currently return 404 on the live source. Keep those
    // URLs useful in the standalone mirror by routing them to the closest localized
    // service page, never to the homepage fallback.
    const unavailableServiceAliases = {
        'ironing-sharjah': 'ironing-dubai',
        'lashes-brows-at-home': 'eyebrow-threading-at-home',
        'lashes-brows-at-home-abu-dhabi': 'eyebrow-threading-at-home',
        'laundry-sharjah': 'laundry-dubai',
        'makeup-service-at-home': 'salon-services-at-home',
        'mani-pedi-for-kids': 'mani-pedi-at-home',
        'mani-pedi-for-kids-dubai': 'mani-pedi-at-home',
        'mobile-ice-bath': 'spa-and-massage-service-at-home',
        'mobile-ice-bath-dubai': 'spa-and-massage-service-at-home',
        'nail-couture-service': 'mani-pedi-at-home',
        'nail-couture-service-dubai': 'mani-pedi-at-home',
        'personal-nutritionist': 'personal-trainer-at-home',
        'pet-grooming-abu-dhabi': 'pet-grooming-dubai',
        'spray-tanning-at-home': 'spa-and-massage-service-at-home'
    };
    if (segments.some((segment) => segment === '.' || segment === '..')) return null;
    if (segments.length === 2 && ['ar-AE', 'ar-SA', 'en-AE'].includes(segments[0])) {
        const alias = unavailableServiceAliases[segments[1]];
        if (alias) {
            const aliased = path.join(__dirname, segments[0], `${alias}.html`);
            if (fs.existsSync(aliased)) return aliased;
        }
    }

    // Language landing pages are stored at the project root.
    if (segments.length === 1 && ['ar-AE', 'ar-SA', 'en-AE'].includes(segments[0])) {
        return path.join(__dirname, `${segments[0]}.html`);
    }

    const candidate = path.resolve(__dirname, `${cleanPath}.html`);
    const projectRoot = path.resolve(__dirname);
    if (!candidate.startsWith(`${projectRoot}${path.sep}`)) return null;
    if (fs.existsSync(candidate)) return candidate;

    const pageAliases = {
        'cleaning-services': 'house-cleaning', 'cleaning-companies': 'house-cleaning', 'deep-cleaning': 'deep-cleaning-dubai',
        'womens-salon': 'salon-services-at-home', 'womens-spa': 'spa-and-massage-service-at-home',
        'mens-grooming': 'mens-salon', 'premium-grooming': 'mens-salon', 'ac-cleaning-at-home': 'ac-cleaning',
        'doctor-at-home': 'doctor-on-call', 'home-painting': 'home-painting-services', 'hair-care': 'hair-salon-at-home',
        'beauty-for-her': 'salon-services-at-home', 'furniture-cleaning-service': 'furniture-cleaning', 'laundry-and-dry-cleaning': 'laundry'
    };
    if (segments.length === 2 && pageAliases[segments[1]]) {
        const alias = path.join(__dirname, segments[0], `${pageAliases[segments[1]]}.html`);
        if (fs.existsSync(alias)) return alias;
    }

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
const checkoutServiceAliases = {
    'home-cleaning': 'home-cleaning', 'house-cleaning': 'home-cleaning',
    'beauty-for-her': 'beauty-for-her', 'salon-services-at-home': 'beauty-for-her',
    'spa-and-massage-service-at-home': 'spa-treatments', 'womens-spa': 'spa-treatments',
    'ac-cleaning': 'ac-cleaning-at-home', 'ac-cleaning-at-home': 'ac-cleaning-at-home', 'ac_cleaning_at_home': 'ac_cleaning_at_home',
    'pcr-at-home': 'pcr-at-home', 'furniture-cleaning': 'furniture-cleaning',
    'carpet-cleaning': 'furniture-cleaning', 'sofa-cleaning': 'furniture-cleaning', 'mattress-cleaning': 'furniture-cleaning', 'curtain-cleaning': 'furniture-cleaning',
    'mens-salon': 'premium-grooming', 'mens-grooming': 'premium-grooming', 'premium-grooming': 'premium-grooming',
    'lab-tests-at-home': 'lab-tests-at-home', 'pest-control': 'pest-control',
    'disinfection': 'disinfection', 'disinfection-service': 'disinfection',
    'doctor-on-call': 'doctor-at-home', 'doctor-at-home': 'doctor-at-home',
    'handyman-services': 'handyman-and-maintenance', 'electrician-services': 'handyman-and-maintenance', 'plumber-services': 'handyman-and-maintenance', 'handyman-and-maintenance': 'handyman-and-maintenance',
    'home-painting-services': 'home-painting', 'home-painting': 'home-painting',
    'laundry': 'laundry-and-dry-cleaning', 'laundry-and-dry-cleaning': 'laundry-and-dry-cleaning',
    'packers-and-movers': 'packers-and-movers', 'personal-trainer-at-home': 'personal-trainer',
    'physiotherapy-at-home': 'physiotherapy-at-home', 'pet-grooming': 'pet-grooming',
    'iv-therapy-at-home': 'iv-therapy-at-home', 'body-adjustment': 'body-adjustment', 'online-therapy-flex': 'online-therapy-flex',
    'babysitting-at-home': 'babysitting-at-home', 'car-wash-at-home': 'car-wash-at-home', 'flu-vaccine-at-home': 'flu-vaccine-at-home', 'at-home-nurse-care': 'at-home-nurse-care'
};
function findCheckoutFile(lang, rest, step) {
    const key = rest.replace(/^\/+|\/+$/g, '').split('/').pop();
    const service = checkoutServiceAliases[key] || key;
    const candidates = [
        path.join(mirroredCheckoutRoot, lang, service, 'checkout', `${step}.html`),
        path.join(mirroredCheckoutRoot, 'en-AE', service, 'checkout', `${step}.html`),
        path.join(mirroredCheckoutRoot, 'ar-AE', service, 'checkout', `${step}.html`)
    ];
    return candidates.find((candidate) => fs.existsSync(candidate));
}
app.get(/^\/(ar-AE|ar-SA|en-AE)\/(.+)\/checkout(?:\/(details|flex))?\/?$/, (req, res, next) => {
    const lang = req.params[0];
    const rest = req.params[1];
    const step = req.params[3] || req.params[2] || 'flex';
    const key = rest.replace(/^\/+|\/+$/g, '').split('/').pop();
    const serviceKey = checkoutServiceAliases[key] || key;
    const checkoutFile = findCheckoutFile(lang, rest, step);
    if (checkoutFile) return sendMirroredHtml(res, checkoutFile, req.query);
    return next();
});

app.get('*', (req, res, next) => {
    const mirroredPage = mirroredPageForRequest(req.path);
    if (mirroredPage && fs.existsSync(mirroredPage)) {
        return sendMirroredHtml(res, mirroredPage, req.query);
    }
    return next();
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'ar-AE.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
