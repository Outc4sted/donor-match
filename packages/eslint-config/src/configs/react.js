import { fixupConfigRules } from '@eslint/compat'
import eslintXOReact from 'eslint-config-xo-react/space'
import globals from 'globals'

import { compat, defineConfig } from '../utils.js'

import eslintTailwind from 'eslint-plugin-better-tailwindcss'

export const react = defineConfig(
  ...fixupConfigRules(compat.extends('plugin:jsx-a11y/strict')),

  // Tailwind plugin
  {
    files: ['**/*.tsx'],
    plugins: {
      'better-tailwindcss': eslintTailwind,
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: `${import.meta.dirname}/src/styles/global.css`,
      },
    },
    rules: {
      ...eslintTailwind.configs.recommended.rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        { printWidth: 160 },
      ],
    },
  },

  // XO
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintXOReact],
  },

  // Globals
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        DMNO_PUBLIC_CONFIG: 'readonly',
      },
    },
  },

  // Rule overrides
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': [
        'error',
        {
          allowFunctions: true,
        },
      ],
      'react/jsx-tag-spacing': [
        'error',
        {
          beforeSelfClosing: 'always',
        },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  },
)
