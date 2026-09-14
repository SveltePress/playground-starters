import { fileURLToPath } from 'node:url'

function layout(name) {
	return fileURLToPath(new URL(`./${name}.svelte`, import.meta.url))
}

/**
 * A theme authored in this project. It is not `@sveltepress/theme-default`
 * and not `@sveltepress/theme-blog`.
 */
export function authoredTheme() {
	return {
		name: 'authored-custom-theme',
		globalLayout: layout('GlobalLayout'),
		pageLayout: layout('PageLayout'),
		vitePlugins: corePlugin => [corePlugin],
		highlighter: async code => code,
	}
}
