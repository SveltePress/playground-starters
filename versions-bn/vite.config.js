import { defaultTheme } from '@sveltepress/theme-default'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import navbar from './config/navbar.js'
import sidebar from './config/sidebar.js'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar,
				sidebar,
				github: 'https://github.com/SveltePress/sveltepress',
				logo: '/sveltepress.svg',
			}),
			siteConfig: {
				title: 'Sveltepress',
				description: 'কন্টেন্ট কেন্দ্রিক সাইট বিল্ড টুল',
			},
		}),
	],
})

export default config
