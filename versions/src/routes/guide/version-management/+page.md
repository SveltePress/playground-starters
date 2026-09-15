---
title: Document versions
order: 1
---

This Starter is a Default Theme project with a versions manifest, one frozen snapshot, an automatic What's new catalog, auto sidebar, and New badges.

Author-success here is operating the CLI the WebContainer runtime allows:

```sh
pnpm exec sveltepress versions init --current 1.0 --label "1.0"
pnpm exec sveltepress versions create 1.1 --label "1.1"
```

`versions build` is Degraded: Pagefind-backed production build is not full in WebContainers. Inspect `sveltepress.versions.json` (the Focused file) and the frozen snapshot under `src/routes/v/1.0/`.

Open [What's new](/whats-new/) for the generated catalog. The sidebar is `{ enabled: true, roots: ['/guide/'] }` so `/v/` is not a live group.

## New badges

Existing documentation content.

:::since[Automatic New badges]{version="1.1" id="version-new-badges" summary="Title, sidebar, and on-this-page New badges."}
This section is new in 1.1. The Default Theme shows a compact **New** badge in On this page and in the sidebar while you browse 1.1. Switch to 1.0 to see the badges hide.
:::
