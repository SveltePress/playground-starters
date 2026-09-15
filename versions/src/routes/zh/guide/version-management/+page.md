---
title: 文档版本管理
order: 1
---

这个 Starter 带 versions 清单、一份冻结快照、自动「新增内容」目录、自动侧边栏和 New 徽章。

这里的可编写验证是运行 WebContainer 允许的 CLI：

```sh
pnpm exec sveltepress versions init --current 1.0 --label "1.0"
pnpm exec sveltepress versions create 1.1 --label "1.1"
```

`versions build` 是降级：WebContainer 里基于 Pagefind 的生产构建不完整。请查看 `sveltepress.versions.json`（聚焦文件）以及 `src/routes/v/1.0/` 下的冻结快照。

打开 [新增内容](/whats-new/) 查看生成的目录。侧边栏是 `{ enabled: true, roots: ['/guide/'] }`，所以 `/v/` 不是活动分组。

## New 徽章

已有文档内容。

:::since[自动 New 徽章]{version="1.1" id="version-new-badges" summary="标题、侧边栏与页内导航上的 New 徽章。"}
这一节是 1.1 新增的。浏览 1.1 时，默认主题会在「当前页面」和侧边栏显示紧凑的 **New** 徽章。切到 1.0 后徽章会隐藏。
:::
