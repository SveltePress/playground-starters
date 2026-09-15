---
title: Internationalization
---

This Starter is a three-locale Default Theme project. Locales are declared in `config/locales.ts`.

English stays unprefixed at `/`. Chinese lives under `/zh/` and Bengali under `/bn/`, with matching routes in `src/routes/zh/` and `src/routes/bn/`.

`vite.config.ts` passes that map to `sveltepress({ locales })`. `src/hooks.server.ts` uses `createLocaleHandle` so the SSR `<html lang>` matches the active locale.

Use the language switcher in the navbar to keep the same logical page (`/guide/i18n/` ↔ `/zh/guide/i18n/` ↔ `/bn/guide/i18n/`).
