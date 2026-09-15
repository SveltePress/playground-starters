import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'
import { authoredTheme } from './src/theme/index.js'

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: authoredTheme(),
			siteConfig: {
				title: '自定义主题 Starter',
				description: '布局写在本项目里的 SveltePress 站点',
			},
			pagefind: false,
		}),
	],
})

export default config
