# Economics Essay Coach

Firebase config has already been pasted directly into `index.html`.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the GitHub repo into Vercel.
3. Add this Vercel Environment Variable:

```
OPENROUTER_API_KEY=your_openrouter_key_here
```

Optional:

```
OPENROUTER_MODEL=openai/gpt-4o-mini
```

4. Redeploy.

## Firebase

The app records student attempts in Firestore collection:

```
econsEssayCoachSubmissions
```

Teacher dashboard passcode:

```
0804
```
