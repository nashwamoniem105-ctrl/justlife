from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urljoin
import json, re, requests, time
ROOT=Path(__file__).resolve().parent
BASE='https://www.justlife.com'
langs={'en-AE','ar-AE'}
rows=[]
for lang in sorted(langs):
    for p in sorted((ROOT/lang).glob('*.html')):
        slug=p.stem
        if slug in {'index','404'}: continue
        rows.append({'lang':lang,'slug':slug,'file':str(p.relative_to(ROOT)),'bytes':p.stat().st_size})

def check(row):
    url=f"{BASE}/{row['lang']}/{row['slug']}"
    try:
        r=requests.get(url,headers={'User-Agent':'FreeWayRouteAudit/1.0'},timeout=15,allow_redirects=True)
        text=r.text if r.status_code==200 else ''
        row.update({'original_url':url,'original_status':r.status_code,'final_url':r.url,'original_bytes':len(r.content),'original_h1':re.findall(r'<h1[^>]*>(.*?)</h1>',text,re.I|re.S)[:1]})
    except Exception as e:
        row.update({'original_url':url,'original_status':'error','error':str(e)})
    return row
with ThreadPoolExecutor(max_workers=8) as ex:
    futs=[ex.submit(check,r) for r in rows]
    out=[]
    for f in as_completed(futs): out.append(f.result())
rows=sorted(out,key=lambda x:(x['lang'],x['slug']))
# Analyze local booking links and first-party leftovers.
for row in rows:
    p=ROOT/row['file']; t=p.read_text(errors='ignore')
    row['local_booking_links']=sorted(set(re.findall(r'href=["\']([^"\']*checkout[^"\']*)',t,re.I)))[:20]
    row['external_first_party']=sorted(set(re.findall(r'https?://[^"\'<>\\ ]*(?:justlife\.com|cloudfront\.net|storyblok\.com)[^"\'<>\\ ]*',t,re.I)))[:10]
summary={'generated_at':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'route_count':len(rows),'by_lang':{},'original_status_counts':{},'missing_or_error':[],'external_first_party_files':0}
for lang in langs: summary['by_lang'][lang]=sum(x['lang']==lang for x in rows)
for x in rows:
    k=str(x['original_status']); summary['original_status_counts'][k]=summary['original_status_counts'].get(k,0)+1
    if x['original_status']!=200: summary['missing_or_error'].append({k:v for k,v in x.items() if k in ['lang','slug','original_url','original_status','error','file']})
    if x['external_first_party']: summary['external_first_party_files']+=1
(ROOT/'route_audit.json').write_text(json.dumps({'summary':summary,'routes':rows},ensure_ascii=False,indent=2))
md=['# Route audit — Free Way vs Justlife','',f"Generated: {summary['generated_at']}",'',f"Local content routes checked: **{len(rows)}**",'', '| Language | Local routes | |\n|---|---:|', *[f"| {k} | {v} |" for k,v in sorted(summary['by_lang'].items())],'', '## Original HTTP status counts','', '| Status | Count |\n|---|---:|', *[f"| {k} | {v} |" for k,v in sorted(summary['original_status_counts'].items())],'',f"Files with first-party external references remaining: **{summary['external_first_party_files']}**",'']
if summary['missing_or_error']:
    md += ['## Non-200 or error routes','', '| Language | Slug | Status | URL |','|---|---|---:|---|']+[f"| {x.get('lang')} | {x.get('slug')} | {x.get('original_status')} | {x.get('original_url')} |" for x in summary['missing_or_error']]
else: md += ['## Non-200 or error routes','', 'None in the checked set.']
(ROOT/'route_audit.md').write_text('\n'.join(md)+'\n')
print(json.dumps(summary,ensure_ascii=False,indent=2))
