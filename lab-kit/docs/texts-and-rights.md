# Texts, accuracy and rights

Most of a portal's value, and most of the work of building one, is in the texts. This is the
working guide to choosing them, getting them into the portal and saying honestly what you have.

## What to put in

Think in **layers** (the catalogue's `layer`): a main text, the commentary or textbook it
answers, the author's own notes, lecture notes by students, published works, the class's
own notes. A portal with two connected layers is more useful than one with a hundred
unconnected texts. Start with the pair you will read first.

## Where texts come from, and how clean they are

| Source | Typical cleanliness | What to do |
| --- | --- | --- |
| A scholarly digital edition (TEI/XML, an online corpus) | clean, with apparatus | Use it where the licence allows; keep its page/section numbers as `cite` and `ref` |
| A library or archive's transcription (HTML, plain text) | mostly clean, spot-check | Spot-check a sample against the page images; record who transcribed it |
| **OCR of a scan** (Internet Archive, Google Books, HathiTrust) | 95–99% of words, worse in old type and margins | Run it, **measure it** (below), label it, keep the page-image numbers |
| Typing it yourselves | as good as your proofreading | Proofread in pairs; record who did |
| Machine translation | readable, sometimes confidently wrong | Label it as machine translation in the interface and every export |

## Measure what you have

If you have **any** part of a text in a clean version, run the OCR on that part too and
compare the two. The Kant Lab did this on one lecture transcript that existed both ways,
found about 98% of words right (case and punctuation set aside; 96.5% exactly as printed),
and published that figure beside every passage from the OCR'd lectures. Copy that practice:

1. Choose a stretch with a clean version. Compare word by word after normalising case and
   punctuation.
2. Report the share of words right and what *kinds* of errors dominate (long *s*, hyphens,
   columns, marginalia, footnotes).
3. Record it in the catalogue entry: `accuracy: { ocr: true, words: 98, how: '…' }`. The
   portal shows the badge on the text and beside every passage, with the explanation on hover.
4. Say in `source` that quotations should be checked against the page image.

## Rights, briefly

This is orientation, not legal advice; ask your library.

- **Public domain** (typically author dead 70+ years and the *edition* old enough): free to
  use. But a modern critical edition's apparatus, pagination and editorial text are the
  editor's, even when the underlying words are old. The Academy Edition's volume and page
  numbers are citations, not text, and can be used as references; its editorial text is
  another matter. Check each edition.
- **Under copyright:** a published translation or modern commentary generally cannot be
  put in a public repository in full. Options: keep that text in a private repository; put
  only short quotations in; link to it instead; ask the publisher; or have the class make
  its own translation and own it.
- **Library-licensed:** many databases permit personal or classroom use but not
  redistribution. A public GitHub Pages site *is* redistribution.
- **A volume the host asks you to download as a whole, with a login,** is not something to
  script. The Kant Lab took nothing from such a host and says so on the portal's home page.
  Name the gap in `PORTAL_CONFIG.about` instead.
- **Your students' work** is theirs. Ask before publishing it, and credit it in the
  catalogue's `credit` field.

**The repository is public and so is the site.** Anything committed is published. Decide
what is private before the first commit; use a private repository, or keep that material out
of the repo entirely.

## Cutting a text into passages

A passage is the unit of search, citation, handouts and links. Choose it to match how scholars
cite the text:

- **A numbered § or proposition:** one passage each; `id` = the number; `ref` = the same
  number in the commentary that numbers its paragraphs the same way.
- **A page-and-line edition:** a passage per paragraph, `cite` the page where it begins.
- **Lecture notes with long unbroken paragraphs:** keep the transcript's paragraphs as the
  passages (so every link to them matches the source) and let the *reading view* break them
  for display, as the Kant Lab's portal does.
- **Verse or aphorisms:** `--split line`.

Never change a passage's `id` once links to it exist. If an extraction must change, keep the
old ids.

## Translations

The `en` field puts a translation beside each passage. Give the translation the same
division as the text so each passage has its counterpart. Say in the catalogue whose
translation it is, and whether it is machine-made.

## The spelling problem

Early modern texts spell the same word several ways (*Urtheil*, *Urteil*; *vniversal*,
*universal*). The portal's `spelling` rules map them to one normal form for searching and
matching, and the Overview tab shows the spellings actually found, so that nobody mistakes
the normal form for the text. Keep the printed spelling in the data; never normalise the text
itself.
