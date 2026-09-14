import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar: [
					{
						title: 'Document versions',
						to: '/guide/version-management/',
					},
				],
				sidebar: {
					'/guide/version-management/': [
						{
							title: 'Document versions',
							to: '/guide/version-management/',
						},
					],
				},
				github: 'https://github.com/SveltePress/sveltepress',
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'Sveltepress',
				description: 'A content centered site build tool',
			},
		}),
	],
})

export default config
