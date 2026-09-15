---
title: 搜索
---

本地搜索（Pagefind）默认开启。在这个 Hosted editor 里它是 **降级**：索引是生产构建产物，所以 `pnpm dev` 只会显示提示而不是结果。

Docsearch 和 Meilisearch 是 **仅观察**。请看 `vite.config.ts`（本条目的聚焦文件）里注释掉的选项。
