from pathlib import Path
import re
import requests

ROOT = Path('/home/ubuntu/justlife')
INV = ROOT / 'full_route_inventory.md'
missing = []
for line in INV.read_text(encoding='utf-8').splitlines():
    if line.startswith('- /'):
        route = line[2:].strip()
        if route.endswith('/sitemap') or '/my-account/' in route:
            continue
        missing.append('/' + route)

session = requests.Session()
session.headers.update({'User-Agent': 'Mozilla/5.0 (compatible; FreeWayMirror/1.0)'})
results = []
for i, route in enumerate(missing, 1):
    url = 'https://www.justlife.com' + route
    target = ROOT / (route.lstrip('/') + '.html')
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        response = session.get(url, timeout=35)
        response.raise_for_status()
        text = response.text
        if '<html' not in text.lower():
            raise RuntimeError('response is not HTML')
        target.write_text(text, encoding='utf-8')
        results.append((route, response.status_code, len(text), str(target.relative_to(ROOT))))
        print(f'{i}/{len(missing)} OK {response.status_code} {route} {len(text)}')
    except Exception as exc:
        results.append((route, 'ERROR', 0, str(exc)))
        print(f'{i}/{len(missing)} ERROR {route} {exc}')

(ROOT / 'missing_pages_fetch_report.md').write_text(
    '# Missing Pages Fetch Report\n\n' + '\n'.join(
        f'| {route} | {status} | {size} | {detail} |' for route, status, size, detail in results
    ) + '\n', encoding='utf-8'
)
