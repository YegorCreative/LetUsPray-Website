# LetUsPray-Website

Official website for LetUsPray — a Scripture-centered prayer app designed to help people build a consistent, meaningful prayer life.

## Status

Version 1 homepage is in progress. App Store listing URL, form delivery, Privacy Policy copy, and remaining brand tokens are pending owner approval.

This repository is not deployed. DNS for `letusprayapp.com` is not configured here.

## Local development

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

## Planned hosting

Cloudflare Pages, static output.

- Canonical URL (planned): `https://letusprayapp.com`
- Build command: `npm run build`
- Output directory: `dist`
- `www` should eventually redirect to the apex domain

Do not add analytics, advertising, tracking pixels, or marketing cookies.

Astro CLI telemetry is disabled locally for this project. The public site does not include tracking scripts. If Cloudflare Pages is connected later, set `ASTRO_TELEMETRY_DISABLED=1` in the build environment so the CLI does not send usage data.
