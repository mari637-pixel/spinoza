/* ─────────────────────────────────────────────────────────────────────────────
   The sessions committed to the repository, which the Method Log page shows beside what
   anyone types into it (that stays in their browser). Add a session: write it on the page,
   press "Copy as sessions.js entry", and paste it into this list in a pull request.

   Session fields   date (YYYY-MM-DD), title, type (class | lab | work session | office hours),
                    goal, summary, changed (what we changed in tools, questions or method),
                    next, ideas: [ idea ]
   Idea fields      idea (the question or main idea), tried, kind (search | feature | prompt |
                    discussion | other), version (a preview link or commit id, so it can be
                    re-checked against the tool as it was), verdict (worked | partly | failed |
                    not judged yet), why, raisedBy, thread (a short tag that follows one idea
                    from session to session)
   ───────────────────────────────────────────────────────────────────────────── */

const METHOD_SESSIONS = [
  { date: '2026-01-15', title: 'Sample session: first look at the portal', type: 'class',
    goal: 'Search the sample corpus and find what a search cannot do.',
    summary: 'Searched for "substantia" and "essentia"; noticed the portal merges j/i and u/v spellings. Asked what else should connect.',
    changed: 'Added a parallel between E1 def. 3 and def. 5.', next: 'Each person brings one passage and a question.',
    ideas: [
      { idea: 'Does a phrase search beat a word search for finding a definition?', tried: 'Searched "in se est" against the single word "est".', kind: 'search',
        version: '', verdict: 'worked', why: 'The phrase found def. 3 at once; the word returned every definition.', raisedBy: 'student', thread: 'definitions' },
    ] },
];
