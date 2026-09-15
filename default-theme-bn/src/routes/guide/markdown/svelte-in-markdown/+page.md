---
title: Markdown এ Svelte
---

`.md` ফাইলে Svelte লেখা যায়। অ্যাট্রিবিউট এক্সপ্রেশন সবসময় কোট দিয়ে ঘিরুন।

```md live no-ast
<script>
  let count = $state(0)
  const items = ['foo', 'bar']
</script>

<button onclick="{() => count++}">
  আপনি {count} বার ক্লিক করেছেন
</button>

<ul>
{#each items as item, i}
  <li>{i + 1}: {item}</li>
{/each}
</ul>
```
