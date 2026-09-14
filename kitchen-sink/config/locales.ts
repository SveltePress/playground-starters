import type { LocalesConfig } from '@sveltepress/vite'
import navbar from './navbar.ts'
import sidebar from './sidebar.ts'
import zhI18n from './zh/i18n.ts'
import zhNavbar from './zh/navbar.ts'
import zhSidebar from './zh/sidebar.ts'

export const locales: LocalesConfig = {
	'/': {
		lang: 'en',
		label: 'English',
		theme: { navbar, sidebar },
	},
	'/zh/': {
		lang: 'zh',
		label: '中文',
		theme: {
			navbar: zhNavbar,
			sidebar: zhSidebar,
			i18n: zhI18n,
		},
	},
}
