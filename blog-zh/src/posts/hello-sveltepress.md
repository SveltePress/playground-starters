---
title: 你好，Sveltepress 博客主题！
date: 2026-04-01
tags: [svelte, sveltepress, web]
category: Announcements
author: Demo Author
cover: /covers/hello.svg
---

# 你好，Sveltepress 博客主题！

欢迎来到由 `@sveltepress/theme-blog` 驱动的 **示例博客** — 一套杂志风格的 Ember 配色主题。

## 特性

- 🔥 带特色文章的瀑布流卡片
- 🏷️ 标签与分类
- 📡 RSS 订阅生成
- ⚡ 零配置路由脚手架
- 🌙 Ember 深色配色

## 开始使用

安装包并加入 Vite 配置：

```ts
import { blogTheme } from '@sveltepress/theme-blog'
import { sveltepress } from '@sveltepress/vite'

export default defineConfig({
  plugins: [
    sveltepress({
      theme: blogTheme({ title: '我的博客' }),
      siteConfig: { title: '我的博客', description: '...' },
    }),
  ],
})
```

就这些 — 首次构建会自动搭好路由。

## 结语

Sveltepress 博客主题让漂亮的内容站点变得轻松。开始写吧！
