import bnI18n from './bn/i18n.js'
import bnNavbar from './bn/navbar.js'
import bnSidebar from './bn/sidebar.js'
import navbar from './navbar.js'
import sidebar from './sidebar.js'
import zhI18n from './zh/i18n.js'
import zhNavbar from './zh/navbar.js'
import zhSidebar from './zh/sidebar.js'

/** @type {import('@sveltepress/vite').LocalesConfig} */
export const locales = {
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
