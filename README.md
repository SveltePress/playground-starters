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

Each subdirectory will have its own `package.json` and lockfile. Dependencies pin **published** `@sveltepress/*` packages. Do not use `workspace:*` or `catalog:`.

Starter trees are not in this repository yet. Playground v1 may author only `default-theme` in a later ticket and still pin a tag.

## Contributing

Later Starter tickets land in this repository.

- **SveltePress org admins** can push directly to `main`.
- **Everyone else** opens a pull request against `main`. Maintainers review and merge.

After `@sveltepress/*` publishes to npm, bump the seven manifests and lockfiles here in a chore PR. A human verifies StackBlitz boot, then tags. Do not ride the monorepo Changeset PR.

See [SveltePress/sveltepress#461](https://github.com/SveltePress/sveltepress/issues/461) (Playground) and [SveltePress/sveltepress#462](https://github.com/SveltePress/sveltepress/issues/462) (this repo).
