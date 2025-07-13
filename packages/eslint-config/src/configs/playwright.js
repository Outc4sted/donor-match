import playwrightPlugin from 'eslint-plugin-playwright'

import { defineConfig } from '../utils.js'

/**
 * @type {import('typescript-eslint').Config}
 */
export const playwright = defineConfig(
  {
    files: ['e2e/**/*.{spec,test}.{ts}'],
    ...playwrightPlugin.configs['flat/recommended'],
  },
  {
    rules: {
      // You can override the recommended rules here
    },
  },
)
