---
title: Document versions
---

This Starter is a Default Theme project with a versions manifest and one frozen snapshot.

Author-success here is operating the CLI the WebContainer runtime allows:

```sh
pnpm exec sveltepress versions init --current 1.0 --label "1.0"
pnpm exec sveltepress versions create 1.1 --label "1.1"
```

`versions build` is Degraded: Pagefind-backed production build is not full in WebContainers. Inspect `sveltepress.versions.json` (the Focused file) and the frozen snapshot under `src/routes/v/1.0/`.
