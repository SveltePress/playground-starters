import { createLocaleHandle } from '@sveltepress/vite/hooks'
import { locales } from '../config/locales'

export const handle = createLocaleHandle(locales)
