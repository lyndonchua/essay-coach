# Economics Essay Writing Coach

GitHub/Vercel-ready app.

## Vercel Environment Variable Required

Add this in Vercel → Project → Settings → Environment Variables:

```text
OPENROUTER_API_KEY=your_openrouter_key_here
```

Optional:

```text
OPENROUTER_MODEL=openai/gpt-4o-mini
```

## Firebase

Firebase config is already pasted into `index.html` for project `essay-coach-f2f8a`.

## New build changes

- Removed gamification references such as “Final Boss” and “Essay Power-Ups”.
- Students can upload PDF/photo/text outline in Step 1.
- Students can upload PDF/photo/text essay drafts in Requirement 1 and Requirement 2.
- If a full essay contains both R1 and R2, students can upload the same file in both sections.
- PDF text is extracted in the browser where possible.
- Photos are sent to the AI for reading, so use a vision-capable OpenRouter model.

## Teacher Dashboard

Passcode:

```text
0804
```
