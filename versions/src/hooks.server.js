import { createLocaleHandle } from '@sveltepress/vite/hooks'
import { locales } from '../config/locales.js'

export const handle = createLocaleHandle(locales)
