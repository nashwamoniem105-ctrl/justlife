from pathlib import Path
from urllib.parse import urlparse
import hashlib, html, json, mimetypes, re, requests
ROOT=Path(__file__).resolve().parent
ASSETS=ROOT/'assets-local'; ASSETS.mkdir(exist_ok=True)
files=[p for p in ROOT.rglob('*') if p.is_file() and p.suffix.lower() in {'.html','.htm','.css','.js','.json'} and p.name not in {'server.js','full_localize.py','localize_refs.py','apply_safe_local_map.py'} and '.git' not in p.parts and 'node_modules' not in p.parts]
url_re=re.compile(r'https?://[^"\'\s<>\\]+')
allowed={'a.storyblok.com','deax38zvkau9d.cloudfront.net','d222mnpmkyzhbp.cloudfront.net','d3e54v103j8qbb.cloudfront.net'}
try:
    old=json.loads((ROOT/'assets-local-manifest.json').read_text())
except Exception: old={}
url_map={k:v for k,v in old.items() if k.startswith('http') and isinstance(v,str) and v.startswith('/assets-local/')}
s=requests.Session(); s.headers['User-Agent']='Mozilla/5.0 (compatible; JustlifeMirror/1.0)'
failed=[]
def local_name(u,ctype):
    ext=Path(urlparse(u).path).suffix
    if not ext: ext=mimetypes.guess_extension(ctype.split(';')[0]) or '.bin'
    return hashlib.sha256(u.encode()).hexdigest()[:24]+ext
texts={}
urls=set()
for p in files:
    try: t=p.read_text(encoding='utf-8')
    except: continue
    texts[p]=t
    urls.update(x.rstrip('\\') for x in url_re.findall(t))
for u in sorted(urls):
    clean=html.unescape(u)
    host=urlparse(clean).hostname
    if host not in allowed: continue
    if clean not in url_map:
        try:
            r=s.get(clean,timeout=20); r.raise_for_status()
            name=local_name(clean,r.headers.get('content-type',''))
            (ASSETS/name).write_bytes(r.content)
            url_map[clean]='/assets-local/'+name
        except Exception as e: failed.append([clean,str(e)])
# Map transformation URLs to their original Storyblok image when available.
for u in list(urls):
    c=html.unescape(u)
    if 'a.storyblok.com/' in c and '/m/' in c:
        base=c.split('/m/',1)[0]
        if base in url_map: url_map[c]=url_map[base]
changed=replaced=0
for p,t in texts.items():
    n=t
    for u,local in sorted(url_map.items(),key=lambda kv:len(kv[0]),reverse=True):
        for v in {u,html.escape(u,quote=True),u.replace('&','&amp;')}: n=n.replace(v,local)
    n=re.sub(r'https?://(?:www\.)?justlife\.com((?:/|\?)[^"\'\s<>\\)]*)?',lambda m: m.group(1) if m.group(1) and m.group(1).startswith('/') else '/',n,flags=re.I)
    n=re.sub(r'https?://(?:pcr|socket|crm)\.justlife\.com[^"\'\s<>\\)]*','/',n,flags=re.I)
    if n!=t: p.write_text(n,encoding='utf-8'); changed+=1
    replaced += sum(t.count(x) for x in url_map)
(ROOT/'mirror-url-map.json').write_text(json.dumps(url_map,ensure_ascii=False,indent=2)+'\n')
(ROOT/'mirror-download-failures.json').write_text(json.dumps(failed,ensure_ascii=False,indent=2)+'\n')
print({'files':len(files),'urls':len(urls),'mapped':len(url_map),'changed':changed,'failures':len(failed)})
