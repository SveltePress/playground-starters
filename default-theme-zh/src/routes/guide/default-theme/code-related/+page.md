---
title: 代码相关
---

Live code、导入代码和 `install-pkg` 都收在本条目里。

## 高亮、标题、行号

````md live
```js title="hello.js" ln
const msg = 'world'
console.log(msg)
```
````

## Live Svelte

```svelte live ln title=Counter.svelte
<script>
  let count = $state(0)
</script>
<button onclick="{() => count++}">
  你点击了 {count} 次
</button>
```

## 导入代码

@code(/src/lib/hello.js)

## install-pkg

@install-pkg(svelte)
