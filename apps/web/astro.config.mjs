// @ts-check

import node from '@astrojs/node'
import react from '@astrojs/react'
import clerk from '@clerk/astro'
import dmnoAstroIntegration from '@dmno/astro-integration'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [dmnoAstroIntegration(), clerk(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  site: DMNO_PUBLIC_CONFIG.SITE_URL,

  server: {
    port: DMNO_PUBLIC_CONFIG.NODE_PORT,
    host: DMNO_PUBLIC_CONFIG.NODE_HOST,
  },

  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',
})
