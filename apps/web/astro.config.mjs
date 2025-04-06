// @ts-check
import dmnoAstroIntegration from '@dmno/astro-integration'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import clerk from '@clerk/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [dmnoAstroIntegration(), clerk(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  site: DMNO_PUBLIC_CONFIG.SITE_URL,

  server: {
    port: 3000,
  },

  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',
})
