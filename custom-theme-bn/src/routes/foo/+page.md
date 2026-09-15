---
title: নেস্টেড সেকশন
---

এই লিফ পেজ `src/routes/foo/+layout.svelte`-এর ভিতরে। আপনি যে র‍্যাপ দেখছেন:

`theme.globalLayout` → `src/routes/+layout.svelte` →
`src/routes/foo/+layout.svelte` → `theme.pageLayout` → এই পেজ।

এটি [লেআউট অনুক্রম](https://sveltepress.site/bn/guide/introduction/#Layout-hierarchy)-এর সাথে মিলে। SveltePress `theme.pageLayout` দিয়ে পেজকে ঘিরে, নেস্টেড লেআউটকে নয় — তাই সেকশন লেআউট পেজ শেলের বাইরে থাকে।
