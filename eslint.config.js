import { configs, defineConfig } from '@repo/eslint-config'

export default defineConfig(
  {
    ignores: ['apps', 'packages'],
  },

  ...configs.base,
)
