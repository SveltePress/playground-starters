import { createLocaleHandle } from '@sveltepress/vite/hooks'
import { locales } from '../config/locales.ts'

export const handle = createLocaleHandle(locales)
