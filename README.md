# Economics Essay Writing Coach

Student-facing Economics essay coach for 10m and 15m A-Level Economics essays.

## Features

- Student writes outline first
- AI checks outline, Requirement 1, Requirement 2, full analysis and evaluation
- Teacher can paste or upload a full answer as AI reference
- Student feedback is recorded in Firebase Firestore
- Teacher dashboard protected by passcode `0804`
- Teacher can view records, class analytics, AI class analysis and export CSV
- Students can download or email feedback to themselves
- Students never see the OpenRouter API key

## Files

- `index.html` — student app and teacher dashboard
- `api/chat.js` — Vercel serverless function that calls OpenRouter
- `api/firebase-config.js` — sends Firebase config from Vercel environment variables to the frontend
- `package.json` — basic project file

## Vercel Environment Variables

Add these in Vercel → Project Settings → Environment Variables.

### OpenRouter

```text
OPENROUTER_API_KEY=your_openrouter_key_here
```

Optional:

```text
OPENROUTER_MODEL=openai/gpt-4o-mini
```

### Firebase

```text
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

## Firebase Setup

1. Go to Firebase Console.
2. Create or select a project.
3. Create a Web App and copy the Firebase config values into Vercel Environment Variables.
4. Enable Firestore Database.
5. Start with test rules for classroom testing, then tighten later.

Example testing rules:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /econsEssayCoachSubmissions/{docId} {
      allow read, write: if true;
    }
  }
}
```

Important: the teacher passcode is a classroom gate on the frontend, not strong security. For sensitive data, use Firebase Authentication later.

## Deploy

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add all environment variables above.
4. Redeploy.
