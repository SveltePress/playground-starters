---
title: আন্তর্জাতিকীকরণ
---

এটি একটি তিন-লোকেল Default Theme প্রকল্প। লোকেল `config/locales.ts`-এ ঘোষিত।

ইংরেজি `/`-এ। চীনা `/zh/`, বাংলা `/bn/`। মিল রাউট `src/routes/` ও `src/routes/`-এ।

`vite.config.ts` ম্যাপটি `sveltepress({ locales })`-এ পাঠায়। `src/hooks.server.ts` `createLocaleHandle` ব্যবহার করে।

ন্যাভবারের ভাষা সুইচার একই লজিক্যাল পাতা রাখে।
