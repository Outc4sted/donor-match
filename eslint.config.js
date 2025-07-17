import { base } from '@repo/eslint-config/base'
import { defineConfig } from '@repo/eslint-config/utils'

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },

  ...base,
)
