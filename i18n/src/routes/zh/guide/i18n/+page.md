---
title: 国际化
---

这是一个三语言默认主题项目。语言配置写在 `config/locales.ts`，也就是本条目的聚焦文件。

英文仍在不带前缀的 `/`。中文在 `/zh/`，孟加拉语在 `/bn/`，对应路由在 `src/routes/zh/` 与 `src/routes/bn/`。

```ts
import type { LocalesConfig } from '@sveltepress/vite'
import bnI18n from './bn/i18n'
import bnNavbar from './bn/navbar'
import bnSidebar from './bn/sidebar'
import navbar from './navbar'
import sidebar from './sidebar'
import zhI18n from './zh/i18n'
import zhNavbar from './zh/navbar'
import zhSidebar from './zh/sidebar'

export const locales: LocalesConfig = {
	'/': { lang: 'en', label: 'English', theme: { navbar, sidebar } },
	'/zh/': { lang: 'zh', label: '中文', theme: { navbar: zhNavbar, sidebar: zhSidebar, i18n: zhI18n } },
	'/bn/': { lang: 'bn', label: 'বাংলা', theme: { navbar: bnNavbar, sidebar: bnSidebar, i18n: bnI18n } },
}
```

`vite.config.ts` 把该映射传给 `sveltepress({ locales })`。`src/hooks.server.ts` 使用 `createLocaleHandle`，让 SSR 的 `<html lang>` 与当前语言一致。

使用导航栏中的语言切换器，可以在同一逻辑页面之间切换（`/guide/i18n/` ↔ `/zh/guide/i18n/` ↔ `/bn/guide/i18n/`）。
