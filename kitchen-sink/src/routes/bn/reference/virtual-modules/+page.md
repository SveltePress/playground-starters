---
title: ভার্চুয়াল মডিউল
---

এটি Virtual modules এন্ট্রির ফোকাসড ফাইল। Kitchen-sink starter-এ `virtual:sveltepress/site`, `locale` ও `versions` সব পপুলেট।

এই পাতা markdown-এ সরাসরি Svelte লিখে ডক সাইটের একই `JsonViewer` দিয়ে তিনটি মডিউল দেখায়।

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


- `virtual:sveltepress/site` — সাইট টাইটেল ও বর্ণনা
- `virtual:sveltepress/locale` — তিন-লোকেল ম্যাপ (`/` ইংরেজি, `/zh/` চীনা, `/bn/` বাংলা)
- `virtual:sveltepress/versions` — ভার্সন ম্যানিফেস্ট ও ফ্রোজেন স্ন্যাপশট
