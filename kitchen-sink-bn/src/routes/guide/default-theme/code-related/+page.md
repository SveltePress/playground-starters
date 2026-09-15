---
title: কোড সম্পর্কিত
---

Live code, ইমপোর্ট কোড এবং `install-pkg` এই এন্ট্রিতে ভাঁজ করা।

## হাইলাইট, টাইটেল, লাইন নম্বর

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
  আপনি {count} বার ক্লিক করেছেন
</button>
```

## কোড ইমপোর্ট

@code(/src/lib/hello.ts)

## install-pkg

@install-pkg(svelte)
