# Facebook

A Facebook-like responsive frontend built with React, React Router, Vite, and TailwindCSS. Uses only client-side navigation and dummy data.

## Requirements
- Node.js 18+

## Install & Run
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually `http://localhost:5173`).

## Pages & Navigation
- Login (`/`): email, password. Login -> Home Feed. Link to Signup.
- Signup (`/signup`): create account -> Home Feed. Link back to Login.
- Home Feed (`/home`): top navbar, left sidebar, feed posts, right contacts.
- Profile (`/profile`): cover, avatar, name, bio, tabs for Posts/About/Friends/Photos.
- Friends (`/friends`): grid of friend cards with buttons.
- Groups (`/groups`): list of groups with Join.
- Marketplace (`/marketplace`): grid of items.
- Settings (`/settings`): user settings form.

Profile menu in navbar: Profile, Settings, Logout (back to Login).

## Tech
- React 18
- React Router v6
- Vite
- TailwindCSS

No backend or real authentication is implemented.
