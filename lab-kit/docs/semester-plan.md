# A plan for the term

A suggested twelve-week shape for a seminar that builds its portal as it reads. This is a
proposal assembled from how the Kant Lab worked, not a record of its calendar: adjust the
pacing to your texts and your students. The principle throughout is that **every week
produces something the whole class uses the next week**.

| Week | In seminar | Who builds what | Leaves the room with |
| --- | --- | --- | --- |
| **0** (before term) | — | Instructor: copy the kit, put in one clean text, publish, set `CODEOWNERS`, invite everyone | A portal that opens, with one text |
| **1** | Read the first text together using the portal. Search, open passages, build a first handout live. | Everyone: open an issue; try a one-line change in `Individuals/<you>/` | Everyone has opened the portal, an issue and a sandbox |
| **2** | How the data is made: the source file, the importer, the data file. Check a page against the print. | Two **data owners** take over the importer and `portal/data/`; the rest file *text-error* issues | A first round of corrections, each with a source |
| **3** | A second layer: choose the commentary, lecture notes or translation to add. Agree the shared `ref`. | Data owners import it; others test Connections | Two connected texts |
| **4** | Each person brings one passage and one question. Search for it; note what the search cannot do. | Everyone: propose a feature as an issue | A prioritised list of proposals |
| **5** | Build the top three proposals in seminar, one at a time. | Pairs: ask for the change in plain words, preview, review each other | Three merged changes |
| **6** | Start a **study**: choose one question the class will follow through the corpus. | A study folder with a README and a journal | A question, and starting points in the portal |
| **7** | Handouts for teaching: each student prepares a handout for one session. | Everyone: collect passages, write notes, hold answers back | Handouts used in class |
| **8** | Measure the corpus: if any text is OCR or machine-translated, check a sample and record the accuracy. | Data owners: set `accuracy`, publish the figure | Honest labels on every text |
| **9** | A teaching tool: something small the room needs (a screen view of a handout, a timeline, a table). | One or two builders, in their own folder, reading the portal through `window.PORTAL` | One new tool |
| **10** | Method Log: go back over the term's sessions and sort the ideas into worked / partly / failed. | Everyone adds the sessions they remember | A log, and the first patterns |
| **11** | Retire and pin: fold early experiments into the portal, redirect their addresses, freeze the student work the portal reads. | Whoever owns each tool | A tidy repository |
| **12** | Present the study's findings, and the method. Write the handover note for the next class. | Everyone | A handover note |

## Roles that worked

- **Data owners** (two or three students): own `portal/data/`, `tools/` and `sources/`, and
  approve each other's changes there. They decide how texts are cleaned.
- **Default reviewers** (several students): any one of them can approve what has no owner.
- **The instructor:** sets who approves what, keeps the landing page true, and unblocks.
- **Everyone else:** a personal folder, issues, and changes to the portal itself.

## What to ask the class to produce besides code

A portal is a research instrument; its outputs are claims. Alongside the build, require:

- **Text-error reports** with sources (the experts' contribution);
- **Parallels with reasons** in `parallels.js`;
- **A study journal** of what was searched, found and decided;
- **A handover note** for the next class: what the method is, what went wrong, what to do first.

## Pacing notes

- Do not wait for a clean corpus. Put the first text in in week 0 and let the class's
  corrections improve it.
- A new feature should be small enough to review by clicking in a minute. If it is not,
  break it into steps in the issue and ask for one at a time.
- Keep the first three weeks free of design debates. Use the portal and let its limits
  produce the proposals.
