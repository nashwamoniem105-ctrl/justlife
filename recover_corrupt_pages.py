from pathlib import Path
import re, requests, time
ROOT=Path(__file__).resolve().parent
UA={'User-Agent':'Mozilla/5.0 (compatible; JustlifeMirror/1.0)'}
files=[]
for p in ROOT.rglob('*.html'):
    if '.git' in p.parts or 'node_modules' in p.parts: continue
    text=p.read_text(encoding='utf-8', errors='ignore')
    if re.search(r'/assets-local/[^\s"\']*assets-local/', text):
        files.append(p)
print('corrupt',len(files))
s=requests.Session(); s.headers.update(UA)
recovered=0; failed=[]
for i,p in enumerate(files,1):
    rel=p.relative_to(ROOT).as_posix()
    if rel.startswith('mirrored-checkouts/'):
        path=rel[len('mirrored-checkouts/'):].rsplit('.',1)[0]
    else:
        path=rel.rsplit('.',1)[0]
    url='https://www.justlife.com/'+path
    try:
        r=s.get(url,timeout=25)
        if r.status_code==200 and '<html' in r.text.lower():
            p.write_text(r.text,encoding='utf-8'); recovered+=1
        else:
            failed.append([rel,r.status_code])
    except Exception as e:
        failed.append([rel,str(e)])
    if i%25==0: print(i,'/',len(files),'recovered',recovered)
(Path('/tmp/recovery_failures.json')).write_text(__import__('json').dumps(failed,ensure_ascii=False,indent=2))
print({'recovered':recovered,'failed':len(failed)})
