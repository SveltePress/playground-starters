---
title: ডকুমেন্ট সংস্করণ ব্যবস্থাপনা
order: 1
---

এই Starter-এ versions manifest, একটি ফ্রোজেন স্ন্যাপশট, স্বয়ংক্রিয় What's new ক্যাটালগ, অটো সাইডবার এবং New ব্যাজ আছে।

এখানে লেখক-সাফল্য WebContainer যে CLI চালাতে দেয়:

```sh
pnpm exec sveltepress versions init --current 1.0 --label "1.0"
pnpm exec sveltepress versions create 1.1 --label "1.1"
```

`versions build` অবনমিত: WebContainer-এ Pagefind-backed প্রোডাকশন বিল্ড পূর্ণ নয়। ফোকাসড ফাইল `sveltepress.versions.json` এবং `src/routes/v/1.0/` দেখুন।

জেনারেটেড ক্যাটালগের জন্য [নতুন কী](/whats-new/) খুলুন। সাইডবার `{ enabled: true, roots: ['/guide/'] }` তাই `/v/` লাইভ গ্রুপ নয়।

## New ব্যাজ

আগের ডকুমেন্টেশন কনটেন্ট।

:::since[স্বয়ংক্রিয় New ব্যাজ]{version="1.1" id="version-new-badges" summary="টাইটেল, সাইডবার এবং অন-দিস-পেজ New ব্যাজ।"}
এই সেকশন 1.1-এ নতুন। 1.1 ব্রাউজ করলে Default Theme On this page ও সাইডবারে ছোট **New** ব্যাজ দেখায়। 1.0-এ গেলে ব্যাজ লুকোয়।
:::
