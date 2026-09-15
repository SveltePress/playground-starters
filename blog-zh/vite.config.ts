import { blogTheme } from '@sveltepress/theme-blog'
import { sveltepress } from '@sveltepress/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: blogTheme({
        title: 'SveltePress 博客',
        description: '由 @sveltepress/theme-blog 驱动的 Blog starter',
        base: process.env.SITE_URL ?? 'http://localhost:5173',
        author: {
          name: 'Demo Author',
          avatar: '/avatar.png',
          bio: '写 Svelte、CSS，以及如何让网站保持很快。',
          socials: {
            github: 'sveltepress',
            twitter: 'sveltejs',
            email: 'demo@example.com',
            rss: '/rss.xml',
          },
        },
        about: {
          html: '<p>简短说明：这个 Starter 是演练场的博客树，不是线上博客示例。</p>',
        },
        navbar: [
          { title: '首页', to: '/' },
          { title: '时间线', to: '/timeline/' },
          { title: '标签', to: '/tags/' },
        ],
        rss: {
          enabled: true,
          limit: 20,
          copyright: `© ${new Date().getFullYear()} SveltePress 博客`,
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
        title: 'SveltePress 博客',
        description: '由 @sveltepress/theme-blog 驱动的 Blog starter',
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
