---
title: আন্তর্জাতিকীকরণ
---

এটি একটি তিন-লোকেল Default Theme প্রকল্প। লোকেল ঘোষণা আছে `config/locales.ts`-এ — এই এন্ট্রির ফোকাসড ফাইল।

ইংরেজি প্রিফিক্স ছাড়া `/`-এ থাকে। চীনা `/zh/`, বাংলা `/bn/`; মিল রাউট `src/routes/zh/` ও `src/routes/bn/`-এ।

`vite.config.ts` সেই ম্যাপ `sveltepress({ locales })`-এ পাঠায়। `src/hooks.server.ts` `createLocaleHandle` ব্যবহার করে যাতে SSR `<html lang>` সক্রিয় লোকেলের সাথে মেলে।

ন্যাভবারের ভাষা সুইচার দিয়ে একই লজিক্যাল পাতা রাখুন (`/guide/i18n/` ↔ `/zh/guide/i18n/` ↔ `/bn/guide/i18n/`)।
