---
title: হ্যালো, Sveltepress ব্লগ থিম!
date: 2026-04-01
tags: [svelte, sveltepress, web]
category: Announcements
author: Demo Author
cover: /covers/hello.svg
draft: true
---

# হ্যালো, Sveltepress ব্লগ থিম!

`@sveltepress/theme-blog` চালিত **উদাহরণ ব্লগ**-এ স্বাগতম — ম্যাগাজিন-স্টাইল Ember প্যালেট থিম।

## ফিচার

- 🔥 ফিচার্ড পোস্টসহ ম্যাসনরি কার্ড গ্রিড
- 🏷️ ট্যাগ ও ক্যাটাগরি
- 📡 RSS ফিড জেনারেশন
- ⚡ জিরো-কনফিগ রাউট স্ক্যাফোল্ড
- 🌙 Ember ডার্ক প্যালেট

## শুরু করুন

প্যাকেজ ইনস্টল করে Vite কনফিগে যোগ করুন:

```ts
import { blogTheme } from '@sveltepress/theme-blog'
import { sveltepress } from '@sveltepress/vite'

export default defineConfig({
  plugins: [
    sveltepress({
      theme: blogTheme({ title: 'আমার ব্লগ' }),
      siteConfig: { title: 'আমার ব্লগ', description: '...' },
    }),
  ],
})
```

এটুকুই — প্রথম বিল্ডে রাউট আপনাআপনি তৈরি হয়।

## শেষ কথা

Sveltepress Blog Theme সুন্দর কনটেন্ট সাইট তোলা সহজ করে। লিখতে থাকুন!
