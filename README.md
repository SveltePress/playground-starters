# playground-starters

Independent SveltePress **Starter** trees for the [sveltepress.site Playground](https://sveltepress.site/). This repository is the source of truth for those trees.

The [SveltePress/sveltepress](https://github.com/SveltePress/sveltepress) monorepo is **not** a fork target. StackBlitz project ids are **not** the source of truth.

sveltepress.site embeds a **git tag** of a subdirectory root:

```text
embedGithubProject('SveltePress/playground-starters/tree/<tag>/<subdir>')
```

It does **not** embed `main`. Open in StackBlitz uses the same tag and subdirectory:

```text
https://stackblitz.com/fork/github/SveltePress/playground-starters/tree/<tag>/<subdir>
```

## Layout

This is **not** a pnpm workspace and not part of the Sveltepress monorepo. The repo root is this README (optional helpers to run install/dev in each directory may live here later).

Each Starter is an independent project root. English lives at the unprefixed name. Chinese and Bengali Playground URLs embed a same-path copy (`*-zh`, `*-bn`) written in that language at the default files (`src/routes/+page.md`, `config/navbar.js`). Those copies do **not** add `/zh/` or `/bn/` routes.

| Directory | Starter |
| --- | --- |
| `default-theme`, `default-theme-zh`, `default-theme-bn` | Default Theme starter |
| `typescript`, `typescript-zh`, `typescript-bn` | TypeScript starter |
| `blog`, `blog-zh`, `blog-bn` | Blog starter |
| `i18n` | i18n starter (three-locale demo; every Playground locale embeds this tree) |
| `versions`, `versions-zh`, `versions-bn` | Versions starter |
| `custom-theme`, `custom-theme-zh`, `custom-theme-bn` | Custom theme starter |
| `kitchen-sink`, `kitchen-sink-zh`, `kitchen-sink-bn` | Kitchen-sink starter |

Each subdirectory is an independent project root with its own `package.json` and lockfile. Dependencies pin **published** `@sveltepress/*` packages. Do not use `workspace:*` or `catalog:`.

Authored so far:

- `default-theme` — JavaScript, seeded from `create-sveltepress` `template-js`, then grown with extracted `config/navbar.js` / `config/sidebar.js` and Guide-matching routes for every Markdown, Default Theme, and Vite plugin Entry. Locale copies write those same files in Chinese or Bengali.
- `typescript` — TypeScript, seeded from `create-sveltepress` `template-ts`. Focused file is `vite.config.ts` in every locale.
- `versions` — Default Theme project with `@sveltepress/cli`, a versions manifest, one frozen snapshot, auto sidebar, `/whats-new/`, and New badges on the current 1.1 pages. Locale copies keep `/v/`, not `/zh/v/`.
- `i18n` — three-locale Default Theme project (English + Chinese + Bengali). This is the Playground Entry that demonstrates i18n. Focused file is `config/locales.ts`.
- `blog` — TypeScript Blog theme project matching the hosted Blog demo's shape (not `example-blog` in place). OG image generation is off so WebContainer boot stays clean. `@resvg/resvg-js` is overridden to `vendor/resvg-js-stub` because `@sveltepress/theme-blog@1.0.3` statically imports the native addon. Locale copies write `src/posts/hello-sveltepress.md` and `src/posts/editorial-showcase.md` in that language.
- `custom-theme` — newly authored Custom theme starter: no Default Theme, no Blog theme, layout authored in the project. Colored frames in the preview mark `GlobalLayout.svelte`, `src/routes/+layout.svelte`, `PageLayout.svelte`, and the page (and `src/routes/foo/+layout.svelte` on `/foo`). Focused files are `src/routes/+layout.svelte` and `src/routes/+page.md`. Locale copies write those same files in Chinese or Bengali.
- `kitchen-sink` — TypeScript Default Theme maximum: Markdown, Default Theme, i18n, versions, Vite plugin, and virtual modules. Not the TypeScript starter. No Blog theme. No custom theme. The running instance is single-locale; the three-locale demo is the i18n Entry.

All subdirectory roots are authored. sveltepress.site still embeds a git tag rather than `main`. After `@sveltepress/*` npm publish, bump authored trees in a chore on this repo, not the monorepo Changeset PR.

## Contributing

Later Starter tickets land in this repository.

- **SveltePress org admins** can push directly to `main`.
- **Everyone else** opens a pull request against `main`. Maintainers review and merge.

After `@sveltepress/*` publishes to npm, bump the manifests and lockfiles here in a chore PR. A human verifies StackBlitz boot, then tags. Do not ride the monorepo Changeset PR.

See [SveltePress/sveltepress#461](https://github.com/SveltePress/sveltepress/issues/461) (Playground) and [SveltePress/sveltepress#462](https://github.com/SveltePress/sveltepress/issues/462) (this repo).
