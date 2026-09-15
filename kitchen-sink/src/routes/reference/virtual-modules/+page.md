---
title: Virtual modules
---

This page is the Focused file for the Virtual modules Entry. All three modules are populated in this Kitchen-sink starter because the tree has `siteConfig`, `locales`, and a versions manifest.

This page writes Svelte in markdown and inspects the modules with the same `JsonViewer` used on the docs site `virtual:sveltepress/site`, `locale`, and `versions` pages.

<script>
  import { JsonViewer } from 'svelte-json-discovery'
  import site from 'virtual:sveltepress/site'
  import { locales } from 'virtual:sveltepress/locale'
  import versions from 'virtual:sveltepress/versions'
</script>

<div class="stack">
  <section class="viewer">
    <p class="label">virtual:sveltepress/site</p>
    <JsonViewer data="{site}" />
  </section>
  <section class="viewer">
    <p class="label">virtual:sveltepress/locale</p>
    <JsonViewer data="{locales}" />
  </section>
  <section class="viewer">
    <p class="label">virtual:sveltepress/versions</p>
    <JsonViewer data="{versions}" />
  </section>
</div>
<style>
  .stack {
    display: grid;
    gap: 1rem;
  }
  .label {
    margin: 0 0 0.5rem;
    font-weight: 600;
  }
  .viewer {
    max-height: 32vh;
    overflow: auto;
  }
  :global(html.dark) .viewer {
    --discovery-background-color: #1a1a1a;
    --sjd-app-bg: #1a1a1a;
    --sjd-fmt-color: #999;
    --sjd-fmt-hover-color: #aaa;
    --sjd-fmt-property-color: #d17a8c;
    --sjd-fmt-number-color: #0f8dc2;
    --sjd-fmt-atom-color: #0f8dc2;
    --sjd-fmt-string-color: #7faf20;
    --sjd-fmt-string-underline-color: #85ab51;
    --sjd-fmt-string-hover-color: #97cf26;
    --sjd-ui-color: #ccc;
    --sjd-match-bg: #565638;
    --sjd-match-border: #a7a73b;
    --sjd-error-border: #0004;
    --sjd-error-bg: #622b29;
    --sjd-error-color: #c66;
    --sjd-error-message-bg: #443232;
    --sjd-toggle-color: #72b372;
    --sjd-touch-button-color: #aaa;
    --sjd-touch-button-bg: #50505080;
    --sjd-popup-bg: #333;
    --sjd-popup-color: #ccc;
    --sjd-popup-notes-color: #999;
    --sjd-popup-error-color: #e66;
    color-scheme: dark;
  }
</style>

- `virtual:sveltepress/site` — `siteConfig.title` / `description`
- `virtual:sveltepress/locale` — two-locale map (`/` English, `/zh/` Chinese)
- `virtual:sveltepress/versions` — `sveltepress.versions.json` plus the frozen `1.0` snapshot

Open in Playground on `/reference/site/`, `/reference/locale/`, and `/reference/versions/` lands here.
