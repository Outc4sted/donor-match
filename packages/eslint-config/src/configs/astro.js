import eslintParserTypeScript from '@typescript-eslint/parser'
import eslintParserAstro from 'astro-eslint-parser'
import eslintAstro from 'eslint-plugin-astro'

import { defineConfig } from '../utils.js'

import eslintTailwind from 'eslint-plugin-better-tailwindcss'

export const astro = defineConfig(
  // Ignored files
  {
    ignores: ['**/.astro'],
  },

  // Astro
  ...eslintAstro.configs.recommended,

  // Tailwind plugin
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintParserAstro,
      parserOptions: {
        parser: eslintParserTypeScript,
      },
    },
    plugins: {
      'better-tailwindcss': eslintTailwind,
    },
    rules: {
      ...eslintAstro.configs['jsx-a11y-strict'].rules,
      ...eslintTailwind.configs.recommended.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        { printWidth: 160 },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles/global.css',
      },
    },
  },

  // Globals
  {
    languageOptions: {
      globals: {
        DMNO_PUBLIC_CONFIG: 'readonly',
      },
    },
  },
)
