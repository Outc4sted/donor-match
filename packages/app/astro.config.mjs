// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import clerk from '@clerk/astro'
import { loadEnv } from 'vite'

const { DONOR_MATCH_API, SITE_URL } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
)

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), react()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '/api': {
          target: DONOR_MATCH_API,
        },
      },
    },
  },

  site: SITE_URL,

  server: {
    port: 3000,
  },

  adapter: node({
    mode: 'standalone',
  }),

  output: 'server',
})
