import os

files = ["ar-AE.html", "index.html", "en-AE.html"]
script_tag = '<script src="/smart_location.js"></script>\n</head>'

for fname in files:
    fpath = os.path.join("/home/ubuntu/justlife-project", fname)
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        if "smart_location.js" not in content:
            if "</head>" in content:
                content = content.replace("</head>", script_tag)
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Injected smart_location into {fname}")

print("Injection complete.")
