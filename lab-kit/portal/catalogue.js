/* ─────────────────────────────────────────────────────────────────────────────
   YOUR PORTAL'S CATALOGUE — the one file you edit to make this portal yours.
   Hand-written: edit it directly. (The Kant Lab's own is logic-portal/catalogue.js.)

   1. PORTAL_CONFIG   the portal's name, how spellings are merged, which words to ignore
   2. PORTAL_TEXTS    every text it reads, in the order it lists them
   Adding a text: put it in a data file (tools/import_text.py makes one from a plain-text
   file), add one entry to PORTAL_TEXTS, reload. Search, Read, Connections and the Handout
   tray all pick it up. Nothing else changes.

   Text fields
     key      short stable id, used in links (#p=key:passageId). Never change it later.
     title    the work as your class cites it
     short    a label for tight spaces
     layer    one of the `layers` below: how the portal groups the texts
     date     the date as the sources give it, verbatim ("ca. 1771")
     year     a number to put the texts in order
     file     the data file, relative to this folder
     global   the name the file declares (`const NAME = …`)
     on       optional: the key of the text this one comments on, so Connections can say
              "the same place in <that text>"
     source   where the transcription came from, and how clean it is
     credit   whose work brought the text in, for the About page
     accuracy optional: { label, how }, or { ocr: true, words: 98, how } for a machine reading;
              shown on the text and beside every passage, so nobody quotes OCR as if it were clean

   The data file's shape (one only: `passages`)
     { meta: { work, volume },
       passages: [ { id, cite, text,
                     en,    optional — an English (or other) translation, shown beside the text
                     ref,   optional — a shared address: passages in different texts with the same
                            ref are shown together under Connections (a § number, 'E1d3', 'AA 3:42')
                     sec,   optional — the heading the Read page's contents list shows
                     year } ] }
   ───────────────────────────────────────────────────────────────────────────── */

const PORTAL_CONFIG = {
  title: 'Seminar Text Portal',
  subtitle: 'Sample corpus: Spinoza, Ethics I (definitions), with sample class notes',
  // The groups texts are listed under, in this order.
  layers: [
    { key: 'primary', label: 'Primary texts' },
    { key: 'notes',   label: 'Our notes and commentary' },
  ],
  // Spellings that should count as one word. Applied in order to a lower-cased word whose
  // accents are already stripped, as [pattern, replacement]. Examples:
  //   Early modern German: ['th','t'], ['ſ','s'], ['ey','ei'], ['v','u']
  //   Latin:               ['j','i'], ['v','u'], ['ae','e'], ['oe','e']   (used below)
  //   Early modern English:['v','u'], ['j','i'], ['ſ','s']
  spelling: [['j', 'i'], ['v', 'u'], ['ae', 'e'], ['oe', 'e']],
  // Words that carry no meaning of their own; they are left out of "shared words" matching.
  stopwords: ['et', 'est', 'in', 'ad', 'ab', 'a', 'ex', 'ut', 'sed', 'vel', 'sive', 'hoc', 'id', 'ea', 'quae', 'quod', 'quo', 'qui', 'non', 'nec', 'per', 'aut', 'cum', 'si', 'the', 'of', 'and', 'or', 'to', 'is', 'it', 'by', 'that', 'which', 'a', 'an', 'be', 'as', 'its', 'are', 'in', 'on', 'from'],
  // Shown on the About page. HTML allowed.
  about: '<p>This is the <b>Lab Kit</b> starter portal, running on a tiny sample corpus. Replace the texts in <code>catalogue.js</code> with your own; <code>docs/adapting.md</code> in the kit says how.</p>',
  storagePrefix: 'labkit',      // the prefix of this portal's keys in the browser's local storage
};

const PORTAL_TEXTS = [
  { key: 'ethics', title: 'Spinoza, Ethica, Pars I: Definitiones', short: 'Ethica I', layer: 'primary',
    date: '1677', year: 1677,
    file: 'data/sample-ethics.js', global: 'SAMPLE_ETHICS',
    source: 'Latin after the Gebhardt edition (1925) and Elwes’s English (1883), both in the public domain; typed in as a sample, check before quoting',
    credit: 'Lab Kit sample data',
    accuracy: { label: 'sample', how: 'Typed in by hand as a demonstration; not proofread against an edition.' } },

  { key: 'notes', title: 'Sample seminar notes on Ethica I', short: 'Our notes', layer: 'notes',
    date: 'invented', year: 2026, on: 'ethics',
    file: 'data/sample-notes.js', global: 'SAMPLE_NOTES',
    source: 'Invented for the sample, to show how a class’s own notes sit beside the text they comment on',
    credit: 'Lab Kit sample data' },
];
