---
title: Custom theme
---

This Starter has **no Default Theme** and **no Blog theme**. Layout is authored
in this project. Colored frames mark each wrap from the layout hierarchy:

`theme.globalLayout` → `src/routes/+layout.svelte` → `theme.pageLayout` → page.

The Hosted editor opens `src/routes/+layout.svelte` — edit the header there and
the preview updates. Open [Nested section](/foo) to also see
`src/routes/foo/+layout.svelte`.

```js
// Fences stay plain <pre> until the theme highlighter is replaced.
export const ready = true
```
