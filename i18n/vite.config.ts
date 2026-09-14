import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import { locales } from './config/locales'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				github: 'https://github.com/SveltePress/sveltepress',
				logo: '/sveltepress.svg',
			}),
			locales,
			siteConfig: {
				title: 'Sveltepress',
				description: 'A content centered site build tool',
			},
		}),
	],
})

export default config
