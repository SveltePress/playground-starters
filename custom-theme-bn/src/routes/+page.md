---
title: কাস্টম থিম
---

এই Starter-এ **Default Theme নেই** এবং **Blog theme নেই**। লেআউট এই প্রকল্পে লেখা। রঙিন ফ্রেম লেআউট অনুক্রমের প্রতিটি স্তর দেখায়:

`theme.globalLayout` → `src/routes/+layout.svelte` → `theme.pageLayout` → পেজ।

বাংলা প্লেগ্রাউন্ড `src/routes/+layout.svelte` খোলে — হেডার সম্পাদনা করলে প্রিভিউ আপডেট হয়। [নেস্টেড সেকশন](/foo) খুললে `src/routes/foo/+layout.svelte`-ও দেখা যায়।

```js
// থিম হাইলাইটার বদলানো পর্যন্ত ফেন্স সাধারণ <pre> থাকে।
export const ready = true
```
