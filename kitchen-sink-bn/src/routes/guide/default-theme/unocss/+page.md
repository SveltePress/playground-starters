---
title: Unocss
---

UnoCSS ইউটিলিটি ক্লাস, `dark:` ভ্যারিয়েন্টসহ। লাইটে সারিতে ৩টি লাল কার্ড, ডার্কে সারিতে ২টি নীল কার্ড।

```svelte live
<div class="grid grid-cols-3 gap-4 dark:grid-cols-2">
  <div class="h-[80px] rounded bg-rose-5 dark:bg-blue-5"></div>
  <div class="h-[80px] rounded bg-rose-5 dark:bg-blue-5"></div>
  <div class="h-[80px] rounded bg-rose-5 dark:bg-blue-5"></div>
  <div class="h-[80px] rounded bg-rose-5 dark:bg-blue-5"></div>
</div>
```
