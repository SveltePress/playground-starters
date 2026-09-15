---
title: Nested section
---

This leaf sits inside `src/routes/foo/+layout.svelte`. The wrap you see is:

`theme.globalLayout` → `src/routes/+layout.svelte` →
`src/routes/foo/+layout.svelte` → `theme.pageLayout` → this page.

That matches [Layout hierarchy](https://sveltepress.site/guide/introduction/#Layout-hierarchy),
with the section layout around the page shell because SveltePress wraps the
page (not the nested layout) with `theme.pageLayout`.
