---
title: 内置组件
---

## 链接

```md live
* <Link to="/" label="首页" />
* <Link to="https://github.com/" label="Github" />
```

## 标签页

````md live
<Tabs activeName="Svelte">
  <TabPanel name="Svelte">

```js
const from = 'Svelte 面板'
```

  </TabPanel>
  <TabPanel name="Markdown">

标签页里的 Markdown。

  </TabPanel>
</Tabs>
````

## 折叠面板

```md live
<Expansion title="点击展开">
  打开面板后才会显示。
</Expansion>
```
