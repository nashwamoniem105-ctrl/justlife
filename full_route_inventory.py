from pathlib import Path
import re

ROOT = Path('/home/ubuntu/justlife')
SOURCES = [
    Path('/home/ubuntu/upload/www.justlife.com_ar-AE_sitemap_1786055398251.md'),
    Path('/home/ubuntu/upload/www.justlife.com_en-AE_sitemap_1786055398222.md'),
]

source_routes = set()
for source in SOURCES:
    if source.exists():
        text = source.read_text(encoding='utf-8', errors='ignore')
        for route in re.findall(r'https://www\.justlife\.com/((?:ar|en)-AE/[^)\s]+)', text):
            source_routes.add('/' + route.split('?')[0].rstrip('/'))

local_routes = set()
for html in ROOT.rglob('*.html'):
    rel = html.relative_to(ROOT).as_posix()
    if rel.startswith(('mirrored-checkouts/', 'assets-local/')):
        continue
    if rel.endswith('.html'):
        route = '/' + rel[:-5].rstrip('/')
        if route.endswith('/index'):
            route = route[:-6] or '/'
        local_routes.add(route)

checkout_files = sorted(p.relative_to(ROOT).as_posix() for p in ROOT.glob('mirrored-checkouts/*/*/checkout/*.html'))
source_service_routes = sorted(r for r in source_routes if '/checkout' not in r and not any(x in r for x in ['/sitemap', '/my-account/']))
missing = sorted(r for r in source_service_routes if r not in local_routes)

lines = [
    '# Full Route Inventory',
    '',
    f'Source routes: {len(source_routes)}',
    f'Source service/content routes: {len(source_service_routes)}',
    f'Local HTML routes: {len(local_routes)}',
    f'Local checkout HTML files: {len(checkout_files)}',
    f'Missing source service/content routes by exact local filename: {len(missing)}',
    '',
    '## Missing routes',
]
lines.extend(f'- {route}' for route in missing)
lines.extend(['', '## Checkout files'])
lines.extend(f'- {item}' for item in checkout_files)
(ROOT / 'full_route_inventory.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
print('\n'.join(lines[:9]))
