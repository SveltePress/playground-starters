---
title: ডকুমেন্ট সংস্করণ ব্যবস্থাপনা
---

এই Starter-এ versions manifest এবং একটি ফ্রোজেন স্ন্যাপশট আছে।

এখানে লেখক-সাফল্য WebContainer যে CLI চালাতে দেয়:

```sh
pnpm exec sveltepress versions init --current 1.0 --label "1.0"
pnpm exec sveltepress versions create 1.1 --label "1.1"
```

`versions build` অবনমিত: WebContainer-এ Pagefind-backed প্রোডাকশন বিল্ড পূর্ণ নয়। `sveltepress.versions.json` এবং `src/routes/v/1.0/` দেখুন।
