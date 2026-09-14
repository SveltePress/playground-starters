---
title: Internationalization
---

This Starter is a two-locale Default Theme project. Locales are declared in `config/locales.ts` — the Focused file for this Entry.

English stays unprefixed at `/`. Chinese lives under `/zh/` with matching routes in `src/routes/zh/`.

```ts
import type { LocalesConfig } from '@sveltepress/vite'
import navbar from './navbar'
import sidebar from './sidebar'
import zhI18n from './zh/i18n'
import zhNavbar from './zh/navbar'
import zhSidebar from './zh/sidebar'

export const locales: LocalesConfig = {
	'/': {
		lang: 'en',
		label: 'English',
		theme: { navbar, sidebar },
	},
	'/zh/': {
		lang: 'zh',
		label: '中文',
		theme: {
			navbar: zhNavbar,
			sidebar: zhSidebar,
			i18n: zhI18n,
		},
	},
}
```

`vite.config.ts` passes that map to `sveltepress({ locales })`. `src/hooks.server.ts` uses `createLocaleHandle` so the SSR `<html lang>` matches the active locale.

Use the language switcher in the navbar to keep the same logical page (`/guide/i18n/` ↔ `/zh/guide/i18n/`).
