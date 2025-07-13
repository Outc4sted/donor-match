// @ts-check

import js from '@eslint/js'
import turboConfig from 'eslint-config-turbo/flat'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import * as regexpPlugin from 'eslint-plugin-regexp'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import { defineConfig } from '../utils.js'

export const base = defineConfig(
  {
    ignores: ['.next', '.astro', 'dist', 'storybook-static'],
  },

  // Base JS/TS configs
  js.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Good to have extras
  regexpPlugin.configs['flat/recommended'],
  ...turboConfig,

  // Prettier config to disable conflicting rules
  eslintPrettier,

  // JSDoc plugin only for TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    extends: [jsdoc.configs['flat/recommended-typescript-error']],
  },

  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
)
