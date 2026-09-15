---
title: 文档版本管理
---

这个 Starter 带 versions 清单和一份冻结快照。

这里的可编写验证是运行 WebContainer 允许的 CLI：

```sh
pnpm exec sveltepress versions init --current 1.0 --label "1.0"
pnpm exec sveltepress versions create 1.1 --label "1.1"
```

`versions build` 是降级：WebContainer 里基于 Pagefind 的生产构建不完整。请查看 `sveltepress.versions.json` 以及 `src/routes/v/1.0/` 下的冻结快照。
