#!/usr/bin/env python3
"""Check every data file in portal/data/ without opening a browser.

    python3 tools/check_data.py            # checks portal/data/*.js
    python3 tools/check_data.py some.js    # or particular files

It reads each `const NAME = {...};` as JSON and reports: unreadable files, passages without an
id or text, duplicate ids, `en` translations that are empty, and suspicious characters (a
byte-order mark, replacement characters, the long s in a text that should have been
normalised, doubled spaces). Exit status 1 if there is any error, so it can run in CI.
The portal's About page runs a similar check on what is actually loaded.
"""
import glob, json, os, re, sys

def load(path):
    src = open(path, encoding='utf-8').read()
    m = re.search(r'^const\s+([A-Z_][A-Z0-9_]*)\s*=\s*', src, re.M)
    if not m: raise ValueError("no `const NAME =` found")
    body = src[m.end():].rstrip()
    if body.endswith(';'): body = body[:-1]
    return m.group(1), json.loads(body)

def main(paths):
    here = os.path.dirname(os.path.abspath(__file__))
    paths = paths or sorted(glob.glob(os.path.join(here, '..', 'portal', 'data', '*.js')))
    errors = warns = 0
    for path in paths:
        name = os.path.basename(path)
        try: glob_name, data = load(path)
        except Exception as e:
            print(f'ERROR {name}: cannot read as `const NAME = <JSON>;` ({e})'); errors += 1; continue
        ps = data.get('passages')
        if not isinstance(ps, list): print(f'ERROR {name}: no passages array'); errors += 1; continue
        ids = set()
        for i, p in enumerate(ps, 1):
            where = f'{name} passage {i} ({p.get("id", "?")})'
            if not p.get('id'): print(f'ERROR {where}: no id'); errors += 1
            elif p['id'] in ids: print(f'ERROR {where}: duplicate id'); errors += 1
            ids.add(p.get('id'))
            t = p.get('text', '')
            if not t.strip(): print(f'WARN  {where}: empty text'); warns += 1
            if '�' in t or '﻿' in t: print(f'WARN  {where}: replacement character or byte-order mark'); warns += 1
            if 'ſ' in t: print(f'WARN  {where}: long s (ſ): fine if you mean it, otherwise normalise it (or add a spelling rule)'); warns += 1
            if '  ' in t: print(f'WARN  {where}: doubled space'); warns += 1
            if 'en' in p and not str(p['en']).strip(): print(f'WARN  {where}: empty translation'); warns += 1
        print(f'ok    {name}: {glob_name}, {len(ps)} passages')
    print(f'\n{errors} error(s), {warns} warning(s)')
    return 1 if errors else 0

if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
