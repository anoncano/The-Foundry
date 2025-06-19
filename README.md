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
3. Build the project for production:
   ```bash
   npm run build
   ```

## Deploying to Firebase Hosting

Ensure you have the Firebase CLI installed and are logged in:

```bash
npm install -g firebase-tools
firebase login
```

To deploy the built React app to Firebase Hosting:

```bash
firebase deploy
```

## Continuous Integration

This repository uses GitHub Actions to run tests on every push and pull request.
The workflow configuration is in `.github/workflows/ci.yml`.

## Project Structure

- `webapp/` – React app using TypeScript
- `src/firebase.ts` – configure Firebase project credentials
- `firestore.rules` – basic security rules requiring authentication
- `src/pages/` – simple placeholder pages (Home, AdminDashboard, OnboardPage)

This is only a minimal scaffold. Further development is required to implement the full feature set described in the project overview.
