---
title: Code related
---

Live code, Import code, and `install-pkg` are folded into this Entry.

## Highlight, title, line numbers

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
  You've clicked {count} times
</button>
```

## Import code

@code(/src/lib/hello.js)

## install-pkg

@install-pkg(svelte)
