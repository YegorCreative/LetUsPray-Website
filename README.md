# LetUsPray-Website

Official website for LetUsPray — a Scripture-centered prayer app designed to help people build a consistent, meaningful prayer life.

## Status

Version 1 homepage is in progress. App Store listing URL, form delivery, Privacy Policy copy, and remaining brand tokens are pending owner approval.

Production hosting is GitHub Pages. DNS for `letusprayapp.com` is managed at the registrar, not in this repository.

## Local development

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

## Hosting

GitHub Pages, static output, deployed from `main` by GitHub Actions.

- Canonical URL: `https://letusprayapp.com`
- Build command: `npm run build`
- Output directory: `dist`

Do not add analytics, advertising, tracking pixels, or marketing cookies.

Astro CLI telemetry is disabled locally for this project. The public site does not include tracking scripts. The GitHub Actions build sets `ASTRO_TELEMETRY_DISABLED=1`.
