import type { LocalesConfig } from '@sveltepress/vite'
import bnI18n from './bn/i18n.ts'
import bnNavbar from './bn/navbar.ts'
import bnSidebar from './bn/sidebar.ts'
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
	'/bn/': {
		lang: 'bn',
		label: 'বাংলা',
		theme: {
			navbar: bnNavbar,
			sidebar: bnSidebar,
			i18n: bnI18n,
		},
	},
}
