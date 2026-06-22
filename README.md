# Economics Essay Writing Coach

GitHub/Vercel-ready app for SAJC Economics essay coaching.

## What this build adds

- Stronger Snorkl-style AI feedback with diagnostic score tables and K/C/A judgement.
- Teacher dashboard passcode: `0804`.
- Teacher enters active question and hidden model answer.
- AI can build a hidden reference checklist/rubric from the teacher model answer.
- Students only see the active question.
- Students can upload PDF/photo/text for outline, Requirement 1, and Requirement 2.
- Scanned PDFs are rendered into images so the AI can OCR/read them.
- Students can click OCR / Read Upload into Box.
- Students can upload one full essay document and click Auto-Split Uploaded Full Essay to populate Outline, Requirement 1, Requirement 2, and Evaluation.
- Feedback and student records save to Firebase.
- Students can download or email themselves feedback.

## Vercel environment variables

Required:

```text
OPENROUTER_API_KEY=your_openrouter_key
```

Recommended:

```text
OPENROUTER_MODEL=anthropic/claude-sonnet-4
```

Firebase config is already pasted into `index.html` for project `essay-coach-f2f8a`.

## Deploy

1. Push the files to GitHub.
2. Import the GitHub repo into Vercel.
3. Add `OPENROUTER_API_KEY` in Vercel Environment Variables.
4. Redeploy.
