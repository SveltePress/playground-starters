---
title: বিল্ট-ইন কম্পোনেন্ট
---

## লিংক

```md live
* <Link to="/" label="হোম পেজ" />
* <Link to="https://github.com/" label="Github" />
```

## ট্যাব

````md live
<Tabs activeName="Svelte">
  <TabPanel name="Svelte">

```js
const from = 'Svelte প্যানেল'
```

  </TabPanel>
  <TabPanel name="Markdown">

ট্যাবের ভিতরে Markdown।

  </TabPanel>
</Tabs>
````

## এক্সপানশন

```md live
<Expansion title="খুলতে ক্লিক করুন">
  প্যানেল খুললেই দেখা যাবে।
</Expansion>
```
