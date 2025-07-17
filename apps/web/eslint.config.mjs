import { defineConfig } from '@repo/eslint-config'
import { astro } from '@repo/eslint-config/astro'
import { base } from '@repo/eslint-config/base'
import { react } from '@repo/eslint-config/react'

export default defineConfig(
  ...base,
  ...react,
  ...astro,

  {
    ignores: ['**/components/ui/**/*.tsx'],
  },
)
