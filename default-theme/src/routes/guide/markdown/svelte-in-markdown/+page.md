---
title: Svelte in Markdown
---

Write Svelte in `.md` files. Always quote attribute expressions.

```md live no-ast
<script>
  let count = $state(0)
  const items = ['foo', 'bar']
</script>

<button onclick="{() => count++}">
  You've clicked {count} times
</button>

<ul>
{#each items as item, i}
  <li>{i + 1}: {item}</li>
{/each}
</ul>
```
