# panda.github.io

Personal resume site for [https://panda.github.io](https://panda.github.io), built with Vite, React, and TypeScript.

## Customize

Edit [`src/content/resume.ts`](src/content/resume.ts) with your name, experience, education, skills, and projects. Update [`index.html`](index.html) title and meta tags to match.

Optional: replace [`src/assets/photo.jpg`](src/assets/photo.jpg) or set `photoUrl` in `resume.ts`.

Theme colors and spacing live in CSS variables at the top of [`src/index.css`](src/index.css).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Deploy to GitHub Pages

This project is configured for a **user site** repository named `panda.github.io` (served at the domain root).

1. Create a GitHub repository named **`panda.github.io`** under the `panda` account.
2. Push this project to that repository.
3. In the repo **Settings → Pages**, set source to **GitHub Actions** (or deploy `dist/` from the `gh-pages` branch).
4. After deploy, the site will be live at **https://panda.github.io**.

`vite.config.ts` uses `base: '/'`, which is correct for a user Pages site. For a project site at `https://panda.github.io/other-repo/`, you would set `base: '/other-repo/'` instead.

### Other hosts

**Vercel / Netlify:** build command `npm run build`, publish directory `dist`.
