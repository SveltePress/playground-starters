---
title: 国际化
---

这是一个双语言默认主题项目。语言配置写在 `config/locales.ts`，也就是本条目的聚焦文件。

英文仍在不带前缀的 `/`。中文在 `/zh/`，对应路由在 `src/routes/zh/`。

`vite.config.ts` 把该映射传给 `sveltepress({ locales })`。`src/hooks.server.ts` 使用 `createLocaleHandle`，让 SSR 的 `<html lang>` 与当前语言一致。

使用导航栏中的语言切换器，可以在同一逻辑页面之间切换（`/guide/i18n/` ↔ `/zh/guide/i18n/`）。
