from pathlib import Path
import hashlib, re

ROOT = Path(__file__).resolve().parent
LOCAL = ROOT / 'assets-local'
SOURCE = ROOT / 'deax38zvkau9d.cloudfront.net' / 'prod' / 'assets'

def digest(p):
    h = hashlib.sha256()
    with p.open('rb') as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()

by_hash = {}
for p in LOCAL.iterdir():
    if p.is_file():
        by_hash[digest(p)] = p.name

url_map = {}
for p in SOURCE.rglob('*'):
    if not p.is_file():
        continue
    name = by_hash.get(digest(p))
    if not name:
        continue
    rel = p.relative_to(SOURCE).as_posix()
    url_map[rel] = f'/assets-local/{name}'

text_files = []
for pattern in ('*.html', '*.js', '*.css', '*.json'):
    text_files.extend(ROOT.rglob(pattern))
changed = 0
replaced = 0
for p in text_files:
    if 'node_modules' in p.parts or '.git' in p.parts or p == Path(__file__):
        continue
    try:
        old = p.read_text(encoding='utf-8')
    except (UnicodeDecodeError, OSError):
        continue
    new = old
    for rel, local_url in url_map.items():
        variants = [
            f'https://deax38zvkau9d.cloudfront.net/prod/assets/{rel}',
            f'//deax38zvkau9d.cloudfront.net/prod/assets/{rel}',
            f'/assets-local/faf9712b1a01f868.bin{rel}',
        ]
        for v in variants:
            n = new.count(v)
            if n:
                new = new.replace(v, local_url)
                replaced += n
    new = re.sub(r'https?://(?:www\.)?justlife\.com(?:/[^"\' ]*)?', '/', new)
    new = re.sub(r'https?://(?:pcr|socket|crm)\.justlife\.com[^"\' ]*', '/', new)
    if new != old:
        p.write_text(new, encoding='utf-8')
        changed += 1
print({'source_assets': len(url_map), 'files_changed': changed, 'references_replaced': replaced})
