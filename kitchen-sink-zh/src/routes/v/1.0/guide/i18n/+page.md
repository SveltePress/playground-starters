---
title: 国际化
---

这是一个三语言默认主题项目。语言配置写在 `config/locales.ts`。

英文仍在不带前缀的 `/`。中文在 `/zh/`，孟加拉语在 `/bn/`，对应路由在 `src/routes/` 与 `src/routes/`。

`vite.config.ts` 把该映射传给 `sveltepress({ locales })`。`src/hooks.server.ts` 使用 `createLocaleHandle`，让 SSR 的 `<html lang>` 与当前语言一致。

使用导航栏中的语言切换器，可以在同一逻辑页面之间切换（`/guide/i18n/` ↔ `/zh/guide/i18n/` ↔ `/bn/guide/i18n/`）。
