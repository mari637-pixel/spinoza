# Adapting the kit: your first afternoon

From a fresh copy to a portal with your own text in it, a published site and a first
connection. Allow two to three hours; the slowest step is getting a clean text.

## 0. Decide the question, not the tool

Before touching any file, write down in two sentences what the class will be able to do with
the portal that it cannot do with a bookshelf. The Logic Portal's was: *put a question to the
whole logic corpus the moment it comes up in class, and follow the answer from lecture to
textbook to Kant's notes to Jäsche and back.* Yours might be a concordance, a chronology, a
comparison of translations, a map of an argument. Put the sentences in `portal/catalogue.js`
(`subtitle`) and in the root `README.md`.

## 1. Make your copy

```sh
tools/new-lab.sh ../my-seminar-lab      # copies the kit, renames dot-folders, git init
cd ../my-seminar-lab
```

Open `portal/index.html` in a browser to check it runs. Then rename the placeholders:

- `portal/catalogue.js` → `PORTAL_CONFIG.title`, `subtitle`, `about`, and `storagePrefix` (a
  short name for your portal, so two portals in one browser keep separate handouts).
- `index.html` (root) → the landing page.
- `.github/CODEOWNERS` → real GitHub handles (see [maintaining.md](maintaining.md)).

## 2. Get one text in

1. **Find a clean transcription** and save it as plain text, UTF-8 ([texts-and-rights.md](texts-and-rights.md)).
2. **Mark it up lightly** so it can be cut into passages: a blank line between passages, or a
   marker at the start of each (`§ 12`, `[3.14]`, a verse number). Lines starting with `# ` are
   section headings.
3. **Import it:**

   ```sh
   python3 tools/import_text.py sources/my-text.txt --global MY_TEXT \
       --work "Author, Title (edition, year)" --split regex --pattern '^§\s*(\d+)' \
       --cite '§ {n}' --id-prefix s --year 1752 --out portal/data/my-text.js
   ```

   (`--split blank` for paragraphs, `--split line` for one passage per line; `--en` attaches a
   translation split the same way.) Keep the source file in `sources/`: the data file is
   generated from it, never edited by hand.
4. **Check it:** `python3 tools/check_data.py`.
5. **Catalogue it:** paste the entry the importer printed into `PORTAL_TEXTS`, set `layer`,
   `date`, `source`, `credit` and, if it is not a clean transcription, `accuracy`.
6. **Reload the portal** and search for a word you know is in the text.

## 3. Set the spelling rules

Open **Search**, look up a word you know occurs in several spellings, and open **Overview**
to see them. Add rules to `PORTAL_CONFIG.spelling` until they merge. A rule is
`[pattern, replacement]`, applied in order to a lower-cased word with accents already
stripped. The sample file has examples for Latin, early modern German and early modern
English. Rules widen a match and never narrow it, and they will occasionally join two
different words; say so on your About page.

Add the commonest function words to `stopwords`, so the machine-found connections are about
content.

## 4. Add a second text, and connect them

The portal becomes interesting at two texts. Choose a second layer: a commentary, a
translation, lecture notes, the class's own notes. Give passages in both texts a shared
`ref` (whatever the editions' apparatus numbers: a §, a verse, `AA 3:42`). Reload, open a
passage, press **Connections**.

If the second text has no shared numbering, the class's own parallels go in
`portal/parallels.js`: `{ a: 'text1:id', b: 'text2:id', note: '…', by: 'Maya' }`. The About
page's health check reports a parallel that points at a passage that does not exist.

## 5. Publish

Push to GitHub. In **Settings → Pages**, deploy from the `main` branch, root folder. The
site is at `https://<owner>.github.io/<repo>/`. Because the portal loads its data with plain
`<script>` tags, nothing else has to be configured.

For a preview of a pull request before it merges:

```
https://raw.githack.com/<owner>/<repo>/<commit-id>/portal/index.html
```

## 6. Check what you made

- [ ] About page: health check shows no problems.
- [ ] A search for a known word finds it in every spelling the text uses.
- [ ] A passage's **Copy link** opens it again in a new tab.
- [ ] A handout exports to Markdown and the quotation's citation is right.
- [ ] Every text says where it came from and how accurate it is.
- [ ] The browser console shows no red errors.

## When something does not work

| Symptom | Likely cause |
| --- | --- |
| The page says "Loading the texts…" forever | A data file failed to load or is not valid JavaScript. Open the console. |
| About says "could not load …" | The `file:` path in `PORTAL_TEXTS` is wrong; it is relative to `portal/`. |
| About says "does not declare …" | The `global:` in the catalogue differs from the `const NAME` in the data file. |
| A search finds nothing for a word you can see | The word has a spelling your rules do not merge yet; try a `stem*` or a `/regex/`. |
| Handouts vanished | Browser site data was cleared. Use **Save to file** regularly. |
