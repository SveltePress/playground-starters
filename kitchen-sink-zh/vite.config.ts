import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import navbar from './config/navbar.ts'
import sidebar from './config/sidebar.ts'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar,
				sidebar,
				github: 'https://github.com/SveltePress/playground-starters',
				logo: '/sveltepress.svg',
				ga: 'G-XXXXXXXXX',
				pwa: {
					kit: {
						trailingSlash: 'always',
					},
				},
				highlighter: {
					twoslash: true,
					languages: ['svelte', 'sh', 'js', 'html', 'ts', 'md', 'css'],
				},
				// Observation-only: Docsearch / Meilisearch. Pagefind stays the live search (Degraded in WebContainer).
				// docsearch: { appId: 'YOUR_APP_ID', apiKey: 'YOUR_SEARCH_API_KEY', indexName: 'YOUR_INDEX_NAME' },
				// search: '/src/lib/MeilisearchSearch.svelte',
			}),
			siteConfig: {
				title: 'Sveltepress',
				description: '面向内容的站点构建工具',
			},
			// Observation-only: inspect the Vite pipeline; not an author-success demo.
			addInspect: true,
			// Observation-only: llms.txt is a production-build artifact.
			llms: {
				enabled: true,
				baseUrl: 'https://example.com',
			},
		}),
	],
})

export default config
