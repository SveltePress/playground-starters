---
title: 嵌套分区
---

这个终端页面位于 `src/routes/foo/+layout.svelte` 内部。你看到的包裹顺序是：

`theme.globalLayout` → `src/routes/+layout.svelte` →
`src/routes/foo/+layout.svelte` → `theme.pageLayout` → 本页。

这与[布局层级](https://sveltepress.site/zh/guide/introduction/#Layout-hierarchy) 对应。SveltePress 用 `theme.pageLayout` 包裹的是页面本身，所以分区布局会出现在页面外壳外侧。
