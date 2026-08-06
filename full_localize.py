from pathlib import Path
from urllib.parse import urlparse
import hashlib, html, json, mimetypes, re, time
import requests

ROOT = Path(__file__).resolve().parent
ASSETS = ROOT / 'assets-local'
ASSETS.mkdir(exist_ok=True)
TEXT_EXTS = {'.html', '.htm', '.js', '.css', '.json'}
URL_RE = re.compile(r'https?://[^\"\'\s<>\\]+')
ALLOWED_HOSTS = {'a.storyblok.com', 'deax38zvkau9d.cloudfront.net'}

# Existing exact URL -> local path manifest is authoritative for already downloaded files.
manifest_path = ROOT / 'assets-local-manifest.json'
manifest = json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {}
url_map = dict(manifest)
for u, local in list(url_map.items()):
    url_map[html.unescape(u)] = local

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (compatible; JustlifeMirror/1.0)'})
failed = []

def local_name(url, content_type=''):
    parsed = urlparse(url)
    base = Path(parsed.path).name or 'asset'
    suffix = Path(base).suffix
    if not suffix:
        ext = mimetypes.guess_extension((content_type or '').split(';')[0].strip()) or '.bin'
    else:
        ext = suffix[:10]
    return hashlib.sha256(url.encode()).hexdigest()[:24] + ext

def fetch(url):
    clean = html.unescape(url).replace('\\', '')
    if clean in url_map:
        return url_map[clean]
    parsed = urlparse(clean)
    if parsed.hostname not in ALLOWED_HOSTS:
        return None
    try:
        r = session.get(clean, timeout=25)
        r.raise_for_status()
        if not r.content:
            raise RuntimeError('empty response')
        name = local_name(clean, r.headers.get('content-type', ''))
        target = ASSETS / name
        if not target.exists():
            target.write_bytes(r.content)
        local = '/assets-local/' + name
        url_map[clean] = local
        url_map[html.escape(clean, quote=True)] = local
        return local
    except Exception as exc:
        failed.append([clean, str(exc)])
        return None

EXCLUDED = {'server.js', 'full_localize.py', 'localize_refs.py', 'inject_all.py', 'inject_checkout.py', 'inject_router.py', 'inject_smart_location.py'}
files = [p for p in ROOT.rglob('*') if p.is_file() and p.name not in EXCLUDED and p.suffix.lower() in TEXT_EXTS and '.git' not in p.parts and 'node_modules' not in p.parts]
all_urls = set()
for p in files:
    try:
        text = p.read_text(encoding='utf-8')
    except Exception:
        continue
    for u in URL_RE.findall(text):
        all_urls.add(u.rstrip('\\'))

for i, u in enumerate(sorted(all_urls)):
    fetch(u)
    if i and i % 25 == 0:
        print(f'processed {i}/{len(all_urls)}')

# Storyblok transformation URLs may return 404 while the original image is available.
# Reuse the downloaded original for local independence.
for original_url, local in list(url_map.items()):
    if 'a.storyblok.com/' in original_url and '/m/' not in original_url:
        prefix = original_url.split('?', 1)[0]
        for candidate in list(all_urls):
            clean_candidate = html.unescape(candidate).replace('\\', '')
            if clean_candidate.startswith(prefix + '/m/') or clean_candidate.startswith(prefix + '?'):
                url_map[clean_candidate] = local
                url_map[html.escape(clean_candidate, quote=True)] = local

changed = 0
replaced = 0
for p in files:
    try:
        old = p.read_text(encoding='utf-8')
    except Exception:
        continue
    new = old
    # Replace known downloaded URLs, including HTML-escaped and backslash-escaped variants.
    for u, local in sorted(url_map.items(), key=lambda kv: len(kv[0]), reverse=True):
        variants = {u, html.escape(u, quote=True), u.replace('&', '&amp;'), u.replace('\\', '')}
        for v in variants:
            if v and v in new:
                n = new.count(v)
                new = new.replace(v, local)
                replaced += n
    # Convert first-party absolute navigation/API links to local-relative paths.
    def first_party(m):
        path = m.group(2) or '/'
        if not path.startswith('/'):
            path = '/' + path
        return path
    new = re.sub(r'https?://(?:www\.)?justlife\.com((?:/|\?)[^\"\'\s<>\\)]*)?', first_party, new, flags=re.I)
    new = re.sub(r'https?://(?:pcr|socket|crm)\.justlife\.com[^\"\'\s<>\\)]*', '/', new, flags=re.I)
    if new != old:
        p.write_text(new, encoding='utf-8')
        changed += 1

manifest_path.write_text(json.dumps(url_map, ensure_ascii=False, indent=2, sort_keys=True) + '\n', encoding='utf-8')
(ROOT / 'assets-local-failures.json').write_text(json.dumps(failed, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'files': len(files), 'urls_seen': len(all_urls), 'mapped_urls': len(url_map), 'files_changed': changed, 'references_replaced': replaced, 'failures': len(failed)}, ensure_ascii=False))
