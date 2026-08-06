from pathlib import Path
from urllib.parse import urlparse
import re
root = Path(__file__).parent
refs = {}
for f in root.rglob('*.html'):
    text = f.read_text(errors='ignore')
    for value in re.findall(r'''(?:src|href)=["']([^"']+)["']''', text, re.I):
        if value.startswith(('/assets-local/','/deax38zvkau9d.cloudfront.net/','/_nuxt/')):
            path = value.split('?',1)[0].split('#',1)[0]
            if path.startswith('/assets-local/'):
                target = root / path.lstrip('/')
            elif path.startswith('/deax38zvkau9d.cloudfront.net/'):
                target = root / path.lstrip('/')
            else:
                target = root / path.lstrip('/')
            if not target.exists():
                refs.setdefault(path, []).append(f.relative_to(root).as_posix())
out = root/'missing_asset_audit.md'
with out.open('w') as w:
    w.write('# Missing local asset audit\n\n')
    w.write(f'Missing referenced local assets: **{len(refs)}**\n\n')
    w.write('| Asset path | Example pages |\n|---|---|\n')
    for path, pages in sorted(refs.items()):
        w.write(f'| `{path}` | {", ".join(pages[:5])} |\n')
print(f'missing_assets={len(refs)}')
for path, pages in list(sorted(refs.items()))[:100]: print(path, '<-', pages[0])
