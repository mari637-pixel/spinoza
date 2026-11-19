# The Lab Kit

A starter kit for a **history-of-philosophy class or seminar that builds its own reading
portal**: a shared, searchable, annotatable edition of the texts it is working on, made *by
the class*, for the class, during the term.

It comes out of the **Kant Lab**, where the students designed the methods, in this case the
**Logic Portal**, through which the whole seminar read and analysed Kant's logic corpus.
They built it by trial and error. Now that they know how to do it well and quickly, this kit
hands the method on: the portal's skeleton, the tools for getting texts into it, the
workflow that let a class of students ship changes to a shared tool every week, and a plan
for the term.

> The Kant Lab's own repository is the reference implementation, and worth reading beside
> this one: <https://github.com/mikrishnan/kant-lab>. Where this kit's docs say "the Logic
> Portal does X", that is where to look at X working at full size.

## What you get

| Path | What it is |
| --- | --- |
| [portal/](portal/) | The portal: one `index.html`, a `catalogue.js` you edit, a `parallels.js` for links the class makes, and a `data/` folder of texts. **Search** (words with spellings merged, "phrases", `stem*`, `/regex/`), **Read**, **Connections** (same place in another text, curated parallels, shared rare words), **Handouts** (collect passages, add notes, export Markdown or PDF), **About** (credit, accuracy, a health check). No build step, no framework, no server: it opens by double-clicking. |
| [tools/](tools/) | `import_text.py` turns a plain-text transcription into a data file; `check_data.py` checks the data files before the browser does. |
| [method-log/](method-log/) | A page for recording each session's ideas, what was tried, and whether it worked, so the class can study its own method. |
| [docs/](docs/) | **[method.md](docs/method.md)** (the model: read this first), [adapting.md](docs/adapting.md) (your first afternoon), [semester-plan.md](docs/semester-plan.md), [texts-and-rights.md](docs/texts-and-rights.md), [working-with-claude.md](docs/working-with-claude.md), [maintaining.md](docs/maintaining.md) |
| [github/](github/), [dot-claude/](dot-claude/), `CLAUDE.md` | The repository's working arrangements: issue forms, the pull-request template, `CODEOWNERS`, the preview-server config, and the house conventions every AI-assisted session reads. They are named without the leading dot so they show up here; `tools/new-lab.sh` renames them. |
| [index.html](index.html) | A landing page for the published site. |

## Start in fifteen minutes

1. **Look at it.** Open `portal/index.html` in a browser. It runs on a tiny sample corpus
   (Spinoza's *Ethics* I, definitions, with a few invented class notes). Search *substantia*,
   open a passage, look at **Connections**, add a passage to a handout.
2. **Make your own copy.** Either press **Use this template** on GitHub if this kit is a
   template repository, or run

   ```sh
   tools/new-lab.sh ../my-seminar-lab
   ```

   which copies the kit into a fresh folder, renames the dot-folders, and starts a git
   repository there.
3. **Put in one text of your own.** Save it as plain text, then

   ```sh
   python3 tools/import_text.py my-text.txt --global MY_TEXT --work "Author, Title" \
       --out portal/data/my-text.js
   ```

   paste the entry it prints into `portal/catalogue.js`, and reload. That is the whole
   loop; everything else in the kit is about doing it with a class.
4. **Publish it.** Push to GitHub and turn on Pages (Settings → Pages → deploy from `main`).
   The portal is then at `https://<you>.github.io/<repo>/portal/`.

Then read [docs/method.md](docs/method.md) and [docs/semester-plan.md](docs/semester-plan.md).

## Who this is for

- **An instructor** who wants the class to leave the term with an instrument, not just a
  paper, and who has a corpus (a textbook the author lectured from, a set of lecture notes, a
  philosopher's published works with the commentary tradition around them).
- **Students** who have never opened a repository. Nothing in the workflow needs a local
  install: the work happens on github.com and, if the class uses it, in a browser-based
  Claude Code session.
- **A reading group or a single reader** who wants the portal and has no use for the rest.

## What the kit does not do

It does not supply texts. Finding, transcribing and checking them is most of the work and
all of the scholarship, and [docs/texts-and-rights.md](docs/texts-and-rights.md) is about
doing it honestly. It does not decide what your portal should be: the Logic Portal is a
search-and-read instrument because that suited Kant's logic corpus, and yours might be a
concordance, a chronology, a map of arguments, or a handout builder. The kit's job is to make
the first working version cheap, so the class's time goes into the questions.

## Licence and credit

Choose a licence for your copy before you publish it (the kit's author has not chosen one for
you). The sample texts are public-domain and are marked as unproofread. Credit the Kant Lab
where you describe your portal's method.
