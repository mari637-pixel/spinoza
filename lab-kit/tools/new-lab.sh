#!/usr/bin/env bash
# Make a fresh copy of the Lab Kit as a new repository.
#
#   tools/new-lab.sh ../my-seminar-lab
#
# Copies the kit, renames github/ -> .github/ and dot-claude/ -> .claude/ (they are named
# without the dot in the kit so that they show up in a file listing), makes sources/, and
# runs `git init`. Nothing is pushed anywhere.
set -euo pipefail
[ $# -eq 1 ] || { echo "usage: $0 <new-folder>" >&2; exit 2; }
dest="$1"
here="$(cd "$(dirname "$0")/.." && pwd)"
[ -e "$dest" ] && [ -n "$(ls -A "$dest" 2>/dev/null)" ] && { echo "$dest exists and is not empty; choose a new folder." >&2; exit 1; }
mkdir -p "$dest"
for item in README.md CLAUDE.md index.html portal tools docs method-log github dot-claude; do
  cp -R "$here/$item" "$dest/"
done
mv "$dest/github" "$dest/.github"
mv "$dest/dot-claude" "$dest/.claude"
mkdir -p "$dest/sources" "$dest/Individuals"
printf 'Put the source transcriptions here: the files tools/import_text.py generates data from.\n' > "$dest/sources/README.md"
printf 'One folder each, and each belongs to its owner. Try anything here.\n' > "$dest/Individuals/README.md"
rm -f "$dest/tools/new-lab.sh.bak"
( cd "$dest" && git init -q && git add -A && git commit -q -m "Start from the Lab Kit" 2>/dev/null || true )
echo "Made $dest. Next: open $dest/portal/index.html, then docs/adapting.md."
