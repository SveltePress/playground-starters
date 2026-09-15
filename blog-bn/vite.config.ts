import { blogTheme } from '@sveltepress/theme-blog'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: blogTheme({
        title: 'SveltePress ব্লগ',
        description: '@sveltepress/theme-blog দিয়ে চালিত Blog starter',
        base: process.env.SITE_URL ?? 'http://localhost:5173',
        author: {
          name: 'Demo Author',
          avatar: '/avatar.png',
          bio: 'Svelte, CSS এবং ওয়েব দ্রুত রাখা নিয়ে লেখেন।',
          socials: {
            github: 'sveltepress',
            twitter: 'sveltejs',
            email: 'demo@example.com',
            rss: '/rss.xml',
          },
        },
        about: {
          html: '<p>সংক্ষিপ্ত নোট: এই Starter প্লেগ্রাউন্ডের ব্লগ গাছ, হোস্টেড ব্লগ ডেমো নয়।</p>',
        },
        navbar: [
          { title: 'হোম', to: '/' },
          { title: 'টাইমলাইন', to: '/timeline/' },
          { title: 'ট্যাগ', to: '/tags/' },
        ],
        rss: {
          enabled: true,
          limit: 20,
          copyright: `© ${new Date().getFullYear()} SveltePress ব্লগ`,
        },
        // Degraded packaging: skip Satori/resvg OG PNG generation so WebContainer boot stays clean.
        // theme-blog@1.0.3 still statically imports @resvg/resvg-js; package.json
        // overrides that package with vendor/resvg-js-stub so WebContainer boot
        // does not dlopen a native addon.
        ogImage: {
          enabled: false,
        },
        // Uncomment and fill with real values from https://giscus.app to enable comments.
        // giscus: {
        //   repo: 'you/your-repo',
        //   repoId: 'R_xxxxxxxx',
        //   category: 'Announcements',
        //   categoryId: 'DIC_xxxxxxxx',
        //   mapping: 'pathname',
        // },
      }),
      siteConfig: {
        title: 'SveltePress ব্লগ',
        description: '@sveltepress/theme-blog দিয়ে চালিত Blog starter',
      },
    }),
  ],
  ssr: {
    // Fontsource CSS packages imported from theme-blog's GlobalLayout must be
    // bundled (not externalised) so Node's ESM loader doesn't try to load raw
    // `.css` files during SSR.
    noExternal: ['@fontsource-variable/fraunces', '@fontsource/inter'],
  },
})

export default config
