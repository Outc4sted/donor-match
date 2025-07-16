import { configs, defineConfig } from '@repo/eslint-config'

export default defineConfig(
  ...configs.base,
  ...configs.react,
  ...configs.astro,

  {
    ignores: ['**/components/ui/**/*.tsx'],
  },
)
