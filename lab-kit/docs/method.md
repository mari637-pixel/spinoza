# The method

This is what the Kant Lab learned, set down as a method another seminar can adopt. The
reference implementation is the [kant-lab repository](https://github.com/mikrishnan/kant-lab)
(its root `README.md`, `CLAUDE.md` and `docs/maintaining.md` are the long form); this file is
the short one, with the reasons.

## 1. The class is the team, and the portal is the shared tool

The seminar worked as **one team**; there were no working groups. Everyone's changes went
into one shared tool, the **portal**. Everyone also had a personal folder
(`Individuals/<name>/`) in which to try anything without asking, and what proved useful
there was folded into the portal. That split, a shared tool and personal sandboxes, is what
let a whole seminar work in one repository without waiting on each other.

> **In your repo:** `portal/` is shared (whoever changes it merges it); `Individuals/<name>/`
> belongs to its author. `github/CODEOWNERS` writes this down.

## 2. Plain files, no build, nothing to install

Each tool is an `.html` file with its markup, style and script in it, and its texts in `.js`
files beside it, pulled in with ordinary `<script src>` tags. There is no `package.json`, no
bundler, no framework. Two reasons that matter for a class:

- **A student can open it by double-clicking**, and a reviewer can too. Nothing has to be
  installed, started or fixed first.
- **Any file can be read and changed by someone who has never programmed.** When the
  seminar's changes were made by asking an AI assistant in plain words, files that are
  simple enough to read made the changes small enough to review.

The cost is that state does not persist unless a page stores it in the browser, and that big
texts have to be split into files. Both were worth paying.

## 3. The text comes first, and it is labelled with how good it is

Most of the early work is getting texts into a form a program can use. The habits that
mattered:

- **Passages are the unit.** Every text becomes a list of passages, each with a stable `id`
  and a `cite` the class's scholars would recognise (an Academy-edition page, a §, a line).
  Links to a passage are `textKey:id`, so they survive re-extraction.
- **Generated data is never hand-edited.** A script turns the source transcription into the
  data file. A correction goes into the source or the script, so it survives the next run.
  (`tools/import_text.py`; the Kant Lab's own extractors are in its `scripts/`.)
- **Say how accurate each text is.** The Kant Lab ran OCR on several volumes, *measured*
  the OCR against a clean transcription of one of them (about 98% of words right), and put
  that figure on the text and beside every passage, with "check quotations against the page
  image". The catalogue's `accuracy` field does this. A portal that quietly mixes clean and
  uncorrected texts invites misquotation.
- **Say what is missing.** The Logic Portal states on its home page that half of one volume
  is not there, and why. A gap you name is a result; a gap you hide is a trap.

[texts-and-rights.md](texts-and-rights.md) is the working guide.

## 4. Layers, and connections between them

The Kant Lab's corpus has layers: the textbook Kant lectured from, Kant's own notes in its
margins, student transcripts of his lectures, his published works. What made the portal more
than a search box was **following a passage across layers**: from a lecture to the textbook
paragraph it comments on, to Kant's notes on that paragraph, and back.

The kit gives you three kinds of connection, in order of trust:

1. **A shared `ref`.** Passages in different texts that carry the same `ref` (a § number, a
   verse, `E1d3`) are shown together. This is the cheapest and the most reliable link: it
   comes from the editions' own apparatus.
2. **Curated parallels** (`parallels.js`). A pair of addresses and a sentence saying why.
   Each carries a `by`, so a link is always somebody's claim.
3. **Found by machine** (rare words in common). Useful for discovery, and labelled "not
   checked by hand" wherever it appears.

Keep those three visibly separate. The portal's value to a scholar depends on being able to
tell what an editor asserted, what a student argued and what an algorithm suggested.

## 5. The working loop

> **issue → change → review → merge → live**

- **An issue** is where a bug, a proposal or a *text error* starts. Text errors are the most
  valuable thing students file: they are the experts on the text. The form asks for the
  source.
- **A change is asked for in plain words**, one small thing at a time, in a browser-based
  Claude Code session: *"Clicking a § number on a card should scroll the text to that §.
  Only change files in `Individuals/your-name/`."* There is no spec to write first. The
  request should be checkable by clicking. Every session reads the repository's `CLAUDE.md`,
  so the house conventions apply without being repeated.
- **Review is by using it.** A reviewer opens the pull request's preview link, tries what the
  description says changed, opens the browser console to look for red errors, and approves or
  says what failed. They do not read the code.
- **Merge, and it is live** within minutes. If it breaks something, the pull request's
  **Revert** button is pressed first and questions come afterwards.
- **Who approves what is written down** in `CODEOWNERS`: no approval for the portal or a
  personal folder, the data's owners for the data, the instructor for the rules.

Fixing the portal *in seminar*, the moment discussion turns up a problem, is this loop made
fast: say out loud that you are taking it, make the change, show the room.

## 6. Hand the class the tools to teach with

Two things grew out of using the portal in the room:

- **Handouts.** While reading, you collect passages instead of copying them into a document;
  add notes, labels and headings; reorder; and export. The class sees the same passages the
  instructor chose. (Kit: the **Handouts** tab.)
- **Small teaching tools beside the portal**, a new one most weeks: a handout on the room's
  screen passage by passage, with the answer to a question held back until asked for. They
  read the portal through one global, `window.PORTAL`, and never edit it.

## 7. Studies, and retiring things

- A **study** is a sandbox built around one question (the Kant Lab's was *"What are the kinds
  of nothing in Baumgarten and in Kant, and how does Kant's account change?"*), with its own
  folder, journal and tools, drawing on the portal. It gives a research question a home
  without changing the shared tool.
- **Retire what the portal has absorbed.** When the portal took in everything two early
  reader tools did, they were turned into redirects to the same place in the portal, each
  naming the commit where it last stood. Old addresses keep working; nothing is deleted.
- **Pin student work you depend on.** A copy of a participant's file the portal reads is
  frozen, so that a later edit in their sandbox cannot break the shared tool.

## 8. Study your own method

The **Method Log** records, per session, the ideas discussed, what was tried, the tool
version (a preview link with its commit id) and a verdict: worked, partly, failed, not judged
yet. Over a term it shows which ways of working with the portal and with AI answered research
questions and which did not. This is what lets a class say, at the end, *how* it did what it
did; it is also the best material for the next class.

## 9. Things that went wrong, or would

Drawn from the Kant Lab's repository and its maintenance notes; add your own.

- **Two people fixing the same thing.** Say out loud, or assign the issue to yourself.
- **Hand-editing generated data**, and losing the edit at the next extraction. Edit the
  extractor.
- **One shared secret.** The Kant Lab's handouts are locked with a class password; its
  README says honestly what that can and cannot protect. In a public repository, nothing in
  the repository is private. Decide what is private before the first commit.
- **Tooling that only works on one machine.** The Kant Lab's extraction used a macOS-only
  converter; making the plain-text step portable is an open task in its own to-do list.
- **Unreviewed machine output.** OCR, machine translation and "found by machine" links are
  all useful and all wrong sometimes. Label them where they appear, in the interface and in
  every export.
