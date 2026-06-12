# Economics Essay Writing Coach

Student-facing Economics essay coach for 10m and 15m A-Level Economics essays.

## Files

- `index.html` — student app
- `api/chat.js` — Vercel serverless function that calls OpenRouter
- `package.json` — basic project file

## Deploy on Vercel

1. Upload these files to a GitHub repository.
2. Import the repository into Vercel.
3. In Vercel, go to Project Settings → Environment Variables.
4. Add:

```text
OPENROUTER_API_KEY=your_openrouter_key_here
```

Optional:

```text
OPENROUTER_MODEL=openai/gpt-4o-mini
```

5. Redeploy the project.

## Important

Students will not see or type the OpenRouter API key. The key is hidden in Vercel environment variables.
