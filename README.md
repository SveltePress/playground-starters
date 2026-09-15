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

Each Starter is an independent project root:

| Directory | Starter |
| --- | --- |
| `default-theme` | Default Theme starter |
| `typescript` | TypeScript starter |
| `blog` | Blog starter |
| `i18n` | i18n starter |
| `versions` | Versions starter |
| `custom-theme` | Custom theme starter |
| `kitchen-sink` | Kitchen-sink starter |

Each subdirectory is an independent project root with its own `package.json` and lockfile. Dependencies pin **published** `@sveltepress/*` packages. Do not use `workspace:*` or `catalog:`.

Authored so far:

- `default-theme` — JavaScript, seeded from `create-sveltepress` `template-js`, then grown with extracted `config/navbar.js` / `config/sidebar.js` and Guide-matching routes for every Markdown, Default Theme, and Vite plugin Entry. Example explanations are translated under `src/routes/zh/` and `src/routes/bn/` (not copies of the English pages). Locale Playground chrome opens those files.
- `typescript` — TypeScript, seeded from `create-sveltepress` `template-ts`. Focused file is `vite.config.ts` in every locale.
- `versions` — Default Theme project with `@sveltepress/cli`, a versions manifest, one frozen snapshot, auto sidebar, `/whats-new/`, and New badges on the current 1.1 pages. Translated homes and version-management pages live under `src/routes/zh/` and `src/routes/bn/`.
- `i18n` — three-locale Default Theme project (English + Chinese + Bengali), a subset of Kitchen-sink, focused at `config/locales.ts`.
- `blog` — TypeScript Blog theme project matching the hosted Blog demo's shape (not `example-blog` in place). OG image generation is off so WebContainer boot stays clean. `@resvg/resvg-js` is overridden to `vendor/resvg-js-stub` because `@sveltepress/theme-blog@1.0.3` statically imports the native addon. Focused files are `vite.config.ts`, `src/posts/hello-sveltepress.md` (`.zh.md` / `.bn.md` for locale Playground), `src/posts/editorial-showcase.md`, and `src/app.css`.
- `custom-theme` — newly authored Custom theme starter: no Default Theme, no Blog theme, layout authored in the project. Focused file is `src/routes/+layout.svelte` in every locale.
- `kitchen-sink` — TypeScript Default Theme maximum: Markdown, Default Theme, i18n, versions, Vite plugin, and virtual modules. Not the TypeScript starter. No Blog theme. No custom theme. Focused files are `src/routes/+page.md` (Kitchen sink) and `src/routes/reference/virtual-modules/+page.md` (Virtual modules), with matching `zh` / `bn` trees.

All seven subdirectory roots are authored. sveltepress.site still embeds a git tag rather than `main`. After `@sveltepress/*` npm publish, bump authored trees in a chore on this repo, not the monorepo Changeset PR.

## Contributing

Later Starter tickets land in this repository.

- **SveltePress org admins** can push directly to `main`.
- **Everyone else** opens a pull request against `main`. Maintainers review and merge.

After `@sveltepress/*` publishes to npm, bump the seven manifests and lockfiles here in a chore PR. A human verifies StackBlitz boot, then tags. Do not ride the monorepo Changeset PR.

See [SveltePress/sveltepress#461](https://github.com/SveltePress/sveltepress/issues/461) (Playground) and [SveltePress/sveltepress#462](https://github.com/SveltePress/sveltepress/issues/462) (this repo).
