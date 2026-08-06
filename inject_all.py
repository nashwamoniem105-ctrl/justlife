import os

files = ["ar-AE.html", "en-AE.html", "index.html"]
scripts = [
    '<script src="/smart_location.js"></script>',
    '<script src="/client_router.js"></script>',
    '<script src="/multi_step_checkout.js"></script>',
    '<script src="/service_renderer.js"></script>'
]

for fname in files:
    fpath = os.path.join("/home/ubuntu/justlife-project", fname)
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        modified = False
        for s in scripts:
            script_name = s.split('"')[1]
            if script_name not in content:
                if "</head>" in content:
                    content = content.replace("</head>", f"{s}\n</head>")
                    modified = True
        
        if modified:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Injected service_renderer into {fname}")

print("All injections complete.")
