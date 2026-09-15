---
title: 自定义主题
---

这个 Starter **没有默认主题**，也 **没有博客主题**。布局写在本项目里。彩色边框对应布局层级的每一层包裹：

`theme.globalLayout` → `src/routes/+layout.svelte` → `theme.pageLayout` → 页面。

中文演练场打开 `src/routes/+layout.svelte` — 编辑那里的页头，预览会更新。打开[嵌套分区](/foo) 还能看到 `src/routes/foo/+layout.svelte`。

```js
// 在主题高亮器被替换之前，代码块仍是普通 <pre>。
export const ready = true
```
