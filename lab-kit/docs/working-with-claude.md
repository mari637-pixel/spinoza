# Working with Claude

At the Kant Lab, most changes to the portal were made by asking an AI assistant (Claude
Code, in the browser at claude.ai/code) in plain words. This page is how to do that well. It
is optional: everything in the kit can be edited by hand, and a pull request made on
github.com without any assistant works the same.

## What to ask for

Ask for **one thing at a time**, in the terms a colleague would understand, and make it
**checkable by clicking**:

> In `portal/parallels.js`, add a parallel between `ethics:d3` and `ethics:d5` with the note
> "d5 inverts d3 clause by clause", by me. When you are done, push your branch and give me the
> preview link.

> The Read page's contents list is too long to scroll. Let me fold the sections. Only change
> `portal/index.html`.

> In `Individuals/maya/timeline.html`, make a timeline of the dates in the `year` field of
> every passage in the `notes` text, reading them through `window.PORTAL`. Only change files
> in `Individuals/maya/`.

Good requests:

- name the **file or folder** that may change, and say "only";
- say **what you will click** to know it worked;
- stay **small**. A pull request a reviewer can check in a minute is worth more than a big one.
  For a bigger piece, write the steps in the issue and ask for one at a time.

## What to tell it not to do

- **Do not hand-edit a generated data file.** Ask for the importer or the source to change.
- **Do not widen the change.** "Only change files in X."
- **Do not invent text.** If a passage, a citation or a translation is needed, give it, or
  ask for a placeholder that says it is one.
- **Do not skip the check.** Ask it to run `python3 tools/check_data.py` after changing data,
  and to report anything it could not run.

## The loop in a session

1. Open claude.ai/code, choose the repository, and make your request.
2. Claude works on a branch of its own and pushes it. It replies with a **preview link**.
3. Open the link. Click through what you asked for. Open the browser console and look for
   red errors.
4. Ask for the next change, or say what is wrong.
5. When it is right, ask Claude to open the pull request. A reviewer who is not you opens the
   preview, tries it, and approves or says what failed. Merge. The site updates in minutes.

## `CLAUDE.md`: the house conventions

Every session reads the repository's `CLAUDE.md` first, so conventions apply without being
repeated. The kit's root `CLAUDE.md` says what the layout is, that there is no build step,
that generated data is never hand-edited, how to check a change, and where a change must
stay. Edit it as the class learns: when a session does something the class did not want, add
a line to `CLAUDE.md` saying not to, so the next session does not. A folder can have its own
`CLAUDE.md` for its own rules (the Kant Lab gives each teaching tool and each study one).

## Verifying without a display

The portal has no tests; verification is visual. A session can still check that nothing is
broken:

- **Syntax:** `node --check portal/data/my-text.js` where Node is installed.
- **Data:** `python3 tools/check_data.py`.
- **Does it render:** `google-chrome --headless=new --virtual-time-budget=5000
  --screenshot=out.png file:///abs/path/portal/index.html` shows the page after its
  scripts have run, and `--dump-dom` prints the resulting DOM.
- **Health check:** the portal's **About** page lists every file that failed to load and
  every dangling link.

A pull request should say which of these were done and which were not.

## Judging what it gives you

An assistant can write a plausible importer, a plausible translation and a plausible
parallel. Treat all three as claims to check. Record which parts of the portal are
machine-made, in the interface where they appear and in the Method Log, so that the class can
later say what the assistant was good for and what it was not.
