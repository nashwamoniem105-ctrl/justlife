from pathlib import Path
import re
import requests
from urllib.parse import urljoin

ROOT = Path(__file__).resolve().parent
NUXT = ROOT / '_nuxt' / '6'
NUXT.mkdir(parents=True, exist_ok=True)
BASE = 'https://www.justlife.com/'
queue = []
seen = set()
for p in ROOT.rglob('*.html'):
    if 'node_modules' in p.parts or '.git' in p.parts:
        continue
    try:
        text = p.read_text(encoding='utf-8')
    except Exception:
        continue
    queue += re.findall(r'(?:(?:https?:)?//[^"\' ]+)?(/_nuxt/6/[^"\' )]+)', text)

saved = 0
failed = []
while queue and len(seen) < 300:
    ref = queue.pop(0)
    ref = ref.split('?', 1)[0].split('#', 1)[0]
    if not ref.startswith('/_nuxt/6/') or ref in seen:
        continue
    seen.add(ref)
    out = ROOT / ref.lstrip('/')
    if not out.exists():
        r = requests.get(urljoin(BASE, ref.lstrip('/')), timeout=30)
        if r.status_code != 200:
            failed.append((ref, r.status_code))
            continue
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_bytes(r.content)
        saved += 1
    if out.suffix in ('.js', '.css'):
        try:
            text = out.read_text(encoding='utf-8')
        except Exception:
            continue
        queue += re.findall(r'(?:(?:https?:)?//[^"\' ]+)?(/_nuxt/6/[^"\' )]+)', text)
        for rel in re.findall(r'(?:from|import)\(["\']\.?/([^"\']+)["\']\)|from["\']\.?/([^"\']+)["\']', text):
            child = next((x for x in rel if x), '')
            if child.endswith(('.js', '.css')):
                queue.append('/_nuxt/6/' + child)
print({'discovered': len(seen), 'saved': saved, 'failed': failed[:20], 'remaining_queue': len(queue)})
