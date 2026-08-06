from pathlib import Path
import re, time, requests

ROOT = Path(__file__).parent
langs = ('en-AE','ar-AE')
found=[]
for lang in langs:
    for page in (ROOT/lang).glob('*.html'):
        text=page.read_text(errors='ignore')
        for m in re.finditer(r'href=["\']/(?:en-AE|ar-AE)/([^"\']+)/checkout/(details|flex)', text):
            found.append((lang,m.group(1),m.group(2)))
seen=set()
s=requests.Session()
s.headers.update({'User-Agent':'Mozilla/5.0 (compatible; FreeWayMirror/1.0)'})
for lang,slug,step in sorted(found):
    key=(lang,slug,step)
    if key in seen: continue
    seen.add(key)
    out=ROOT/'mirrored-checkouts'/lang/slug/'checkout'/f'{step}.html'
    if out.exists() and out.stat().st_size>5000: continue
    url=f'https://www.justlife.com/{lang}/{slug}/checkout/{step}'
    try:
        r=s.get(url,timeout=30)
        if r.status_code==200 and len(r.text)>5000:
            out.parent.mkdir(parents=True,exist_ok=True)
            out.write_text(r.text,encoding='utf-8')
            print('downloaded',lang,slug,step,len(r.text))
        else:
            print('failed',lang,slug,step,r.status_code,len(r.text))
    except Exception as e:
        print('error',lang,slug,step,e)
    time.sleep(.15)
