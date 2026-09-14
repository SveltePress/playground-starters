import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import { authoredTheme } from './src/theme/index.js'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: authoredTheme(),
			siteConfig: {
				title: 'Custom theme starter',
				description: 'A SveltePress site whose layout is authored in the project',
			},
			pagefind: false,
		}),
	],
})

export default config
