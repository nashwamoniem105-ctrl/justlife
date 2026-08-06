from pathlib import Path
from html.parser import HTMLParser
import re

ROOT = Path(__file__).parent
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]
    def handle_starttag(self, tag, attrs):
        d=dict(attrs)
        for k in ('href','src','action','onclick'):
            if d.get(k): self.links.append((tag,k,d[k]))

for p in sorted(ROOT.glob('en-AE/*.html')):
    text=p.read_text(errors='ignore')
    parser=Parser(); parser.feed(text)
    hits=[]
    for tag,k,v in parser.links:
        if any(x in v.lower() for x in ('checkout','book','justlife.com','home-cleaning','house-cleaning')):
            hits.append((k,v))
    if hits:
        print(f'--- {p}')
        for k,v in hits[:20]: print(k, v[:400])

print('--- checkout files')
for p in sorted((ROOT/'mirrored-checkouts').glob('**/*.html')):
    print(p.relative_to(ROOT))
