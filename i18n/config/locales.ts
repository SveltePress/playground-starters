import type { LocalesConfig } from '@sveltepress/vite'
import navbar from './navbar'
import sidebar from './sidebar'
import zhI18n from './zh/i18n'
import zhNavbar from './zh/navbar'
import zhSidebar from './zh/sidebar'

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
