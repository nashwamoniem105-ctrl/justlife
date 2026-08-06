from pathlib import Path
from urllib.parse import urlparse
import re

root = Path(__file__).parent
html_files = list(root.rglob('*.html'))
local_routes = set()
for f in html_files:
    rel = f.relative_to(root).as_posix()
    if rel in {'index.html','ar-AE.html','ar-SA.html','en-AE.html'}:
        continue
    local_routes.add('/' + rel[:-5].rstrip('/'))

href_re = re.compile(r'''(?:href|action)=["']([^"']+)["']''', re.I)
internal = {}
for f in html_files:
    text = f.read_text(errors='ignore')
    for href in href_re.findall(text):
        if href.startswith(('http://','https://','mailto:','#','javascript:')):
            continue
        path = urlparse(href).path
        if not path or not path.startswith(('/en-AE/','/ar-AE/','/ar-SA/')):
            continue
        clean = path.rstrip('/')
        if clean.endswith('.html'):
            clean = clean[:-5]
        internal.setdefault(clean, set()).add(f.relative_to(root).as_posix())

missing = []
for route, sources in sorted(internal.items()):
    if route in {'/en-AE','/ar-AE','/ar-SA'}:
        continue
    candidates = [route, route + '.html']
    if not any((root / c.lstrip('/')).exists() for c in candidates):
        missing.append((route, sorted(sources)[:3]))

out = root / 'internal_route_audit.md'
with out.open('w') as w:
    w.write('# Internal route audit\n\n')
    w.write(f'- HTML files: {len(html_files)}\n- Local route files: {len(local_routes)}\n- Unique internal links: {len(internal)}\n- Missing direct files: {len(missing)}\n\n')
    w.write('| Missing route | Example source files |\n|---|---|\n')
    for route, sources in missing:
        w.write(f'| `{route}` | {", ".join(sources)} |\n')
print(out)
print(f'html={len(html_files)} routes={len(internal)} missing={len(missing)}')
for route, sources in missing[:80]:
    print(route, '<-', ', '.join(sources))
