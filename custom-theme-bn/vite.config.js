import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import { authoredTheme } from './src/theme/index.js'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: authoredTheme(),
			siteConfig: {
				title: 'কাস্টম থিম Starter',
				description: 'যে SveltePress সাইটের লেআউট এই প্রকল্পে লেখা',
			},
			pagefind: false,
		}),
	],
})

export default config
