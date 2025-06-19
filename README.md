# The Foundry

This repository is a starting point for a role-based platform built with React and Firebase. It features a token-based onboarding system and an admin dashboard skeleton.

Binary image assets were removed in favour of an SVG icon to avoid large diffs on pull requests.

## Getting Started

1. Install dependencies:
   ```bash
   cd webapp
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```


## Service Account Setup

Some server-side tools require a Firebase service account. Create one in the Firebase console, download the JSON key, and save it as `serviceAccount.json` (this file is ignored by git). Alternatively, set the key contents via the `FIREBASE_SERVICE_ACCOUNT` environment variable.

## Project Structure

- `webapp/` – React app using TypeScript
- `src/firebase.ts` – configure Firebase project credentials

- `src/pages/` – simple placeholder pages (Home, AdminDashboard, OnboardPage)

This is only a minimal scaffold. Further development is required to implement the full feature set described in the project overview.
