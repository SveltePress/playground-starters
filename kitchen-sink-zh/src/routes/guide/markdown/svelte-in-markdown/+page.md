---
title: 在 Markdown 中使用 Svelte
---

可以在 `.md` 里写 Svelte。属性表达式请始终用引号包起来。

```md live no-ast
<script>
  let count = $state(0)
  const items = ['foo', 'bar']
</script>

<button onclick="{() => count++}">
  你点击了 {count} 次
</button>

<ul>
{#each items as item, i}
  <li>{i + 1}: {item}</li>
{/each}
</ul>
```
