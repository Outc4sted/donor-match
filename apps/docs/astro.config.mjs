// @ts-check
import dmnoAstroIntegration from '@dmno/astro-integration'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    dmnoAstroIntegration(),
    starlight({
      title: 'My Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],

  site: DMNO_PUBLIC_CONFIG.SITE_URL,

  server: {
    port: DMNO_PUBLIC_CONFIG.NODE_PORT,
    host: DMNO_PUBLIC_CONFIG.NODE_HOST,
  },
})
