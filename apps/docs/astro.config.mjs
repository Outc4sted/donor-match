// @ts-check
import dmnoAstroIntegration from '@dmno/astro-integration'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    dmnoAstroIntegration(),
    starlight({
      title: 'Donor Match Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/outc4sted/donor-match',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [{ label: 'Getting Started', slug: 'guides/getting-started' }],
        },
        {
          label: 'Apps',
          items: [
            { label: 'Overview', slug: 'apps/overview' },
            { label: 'API App', slug: 'apps/api-overview' },
            { label: 'Web App', slug: 'apps/web-overview' },
            { label: 'Docs App', slug: 'apps/docs-overview' },
          ],
        },
        {
          label: 'Packages',
          items: [
            { label: 'Overview', slug: 'packages/overview' },
            { label: 'DB Library', slug: 'packages/db-overview' },
            { label: 'TS-REST Library', slug: 'packages/ts-rest-overview' },
            { label: 'Store Library', slug: 'packages/store-overview' },
            { label: 'TSConfig Library', slug: 'packages/tsconfig-overview' },
            { label: 'ESLint Library', slug: 'packages/eslint-overview' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  site: DMNO_PUBLIC_CONFIG.SITE_URL,

  server: {
    port: DMNO_PUBLIC_CONFIG.NODE_PORT,
    host: DMNO_PUBLIC_CONFIG.NODE_HOST,
  },
})
