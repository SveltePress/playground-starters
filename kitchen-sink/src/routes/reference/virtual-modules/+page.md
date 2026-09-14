---
title: Virtual modules
---

This page is the Focused file for the Virtual modules Entry. All three modules are populated in this Kitchen-sink starter because the tree has `siteConfig`, `locales`, and a versions manifest.

```ts
import site from 'virtual:sveltepress/site'
import { locales } from 'virtual:sveltepress/locale'
import versions from 'virtual:sveltepress/versions'

site.title
locales
versions
```

- `virtual:sveltepress/site` — `siteConfig.title` / `description`
- `virtual:sveltepress/locale` — two-locale map (`/` English, `/zh/` Chinese)
- `virtual:sveltepress/versions` — `sveltepress.versions.json` plus the frozen `1.0` snapshot

Open in Playground on `/reference/site/`, `/reference/locale/`, and `/reference/versions/` lands here.
