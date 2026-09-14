---
title: Built-in Components
---

## Links

```md live
* <Link to="/" label="Home page" />
* <Link to="https://github.com/" label="Github" />
```

## Tabs

````md live
<Tabs activeName="Svelte">
  <TabPanel name="Svelte">

```js
const from = 'Svelte panel'
```

  </TabPanel>
  <TabPanel name="Markdown">

Markdown in a tab.

  </TabPanel>
</Tabs>
````

## Expansion

```md live
<Expansion title="Click to expand">
  Hidden until you open the panel.
</Expansion>
```
