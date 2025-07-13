import { fixupConfigRules } from '@eslint/compat'

import { compat, defineConfig } from '../utils.js'

import eslintTailwind from 'eslint-plugin-better-tailwindcss'

/**
 * @type {import('typescript-eslint').Config}
 */
export const react = defineConfig(
  ...fixupConfigRules(compat.extends('plugin:react/recommended')),
  ...fixupConfigRules(compat.extends('plugin:react-hooks/recommended')),
  ...fixupConfigRules(compat.extends('plugin:jsx-a11y/strict')),

  // Tailwind plugin
  ...fixupConfigRules({
    // files: ['**/*.{jsx,tsx,astro}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'better-tailwindcss': eslintTailwind,
    },
    rules: {
      ...eslintTailwind.configs['recommended-warn'].rules,
      ...eslintTailwind.configs['recommended-error'].rules,
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
  }),

  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
)
