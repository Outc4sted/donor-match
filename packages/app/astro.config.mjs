// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import clerk from '@clerk/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react()],

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },

  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',
})
