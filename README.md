# MiLux AI Labs — corporate website (React + Tailwind)

Futuristic, privacy-first company site for **MiLux AI Labs**, built as a static multi-page React app for **GitHub Pages**.

## Pages
- `/` — one-page landing: Hero, Projects, Why MiLux, Roadmap, FAQ, Contact, Footer.
- `/projects/tik-mathik/` — Tik‑Mathik AI project page.
- `/projects/tikdrive/` — TikDrive project page.
- `/projects/tikeverylang/` — TikEveryLang AI project page.
- `/privacy/` — Privacy Policy (PL/EN).

## Tech
- Vite + React + TypeScript
- Tailwind CSS
- Static multi-page build (each route has its own `index.html`, so clean URLs work on GitHub Pages)

## Local development
Requirements: Node.js 20+

- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`

## Deployment (GitHub Pages)
This repo includes a workflow: `.github/workflows/deploy.yml`.

1. In GitHub repo settings, enable **Pages** and select **GitHub Actions** as the source.
2. Push to `main`.
3. Workflow builds and deploys `dist/`.

Custom domain:
- The domain is configured via `CNAME` / `public/CNAME`.
- Update `public/robots.txt` + `public/sitemap.xml` if the domain changes.

## Privacy policy URL for app stores
Use the deployed URL:
- `https://matmilux.pl/privacy/`

If you deploy under a different domain, update the sitemap/robots accordingly.

