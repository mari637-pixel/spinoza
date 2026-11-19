# Maintaining the lab's repository

For the instructor, and for whoever holds the admin role. The students' view of the workflow
is in [method.md](method.md); this assumes you have read it.

## Set-up (once)

1. **Create the repository** (public if the site is to be public, which is simplest;
   remember that everything in it is then published).
2. **Pages:** Settings → Pages → deploy from `main`, root folder.
3. **Collaborators:** invite each participant with **Write** access (Settings →
   Collaborators). They connect their GitHub account at claude.ai/code the first time they use it.
   Anyone named in `CODEOWNERS` must have Write access, or GitHub silently ignores their line.
4. **CODEOWNERS:** edit `.github/CODEOWNERS` to real handles. The last matching line wins.
5. **A ruleset on `main`** (Settings → Rules → Rulesets): require a pull request, block force
   pushes, block deleting `main`. Bypass only for the repository admin, and use the bypass
   for housekeeping, not for routine changes to the tools.
6. **Labels:** `proposal`, `bug`, `text-error` (the issue forms apply them).

## Who approves what (the kit's default)

| A change touches | Who approves |
| --- | --- |
| only `Individuals/<name>/` | nobody; the author merges |
| only `portal/` | nobody; whoever changes it merges |
| `portal/data/`, `tools/`, `sources/` | one of the data owners who is not the author |
| `.github/CODEOWNERS` | the instructor alone |
| anything else (docs, root files) | the instructor or a default reviewer |

Change this table to suit your class. The Kant Lab left the portal open to everyone because
the weekly rhythm depended on changes landing the same day, and put the owners' approval on
the data, where a mistake spreads furthest.

## Weekly routine

1. **Pull requests waiting on you:** filter by `is:open review-requested:@me`.
2. **Triage issues:** label each; assign each one you want worked on to **one** person, its
   driver.
3. **Keep the landing page true** to what the portal now does.
4. **Look at the live site** for whatever merged that week.
5. **After a session,** make sure the Method Log has an entry.

## When something breaks

- **A merged change broke the site:** press **Revert** on the merged pull request first, and
  ask questions afterwards.
- **A data file is corrupt:** run `python3 tools/check_data.py`; regenerate it from its
  source with `tools/import_text.py`.
- **Two people changed the same thing:** the later pull request merges `main` into its branch
  and resolves the conflict; never rewrite history on someone else's branch.

## Handing over

At the end of term write `HANDOVER.md`: what the method is, what went wrong, what to do on day
one, who owns what. Archive the term's repository (Settings → Archive) or leave it as the
published record, and start the next class from a fresh copy of the kit plus whatever texts
are reusable. [method.md](method.md) and the Method Log are the best raw material.
