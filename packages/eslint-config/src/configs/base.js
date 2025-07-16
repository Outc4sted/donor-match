import eslintJS from '@eslint/js'
import turboConfig from 'eslint-config-turbo/flat'
import eslintXO from 'eslint-config-xo/space'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import * as eslintRegex from 'eslint-plugin-regexp'
import globals from 'globals'
import eslintTS from 'typescript-eslint'

import { defineConfig } from '../utils.js'

export const base = defineConfig(
  // Ignored files
  {
    ignores: [
      '**/dist',
      '**/generated',
      '**/node_modules',
      '**/.github',
      '**/.changeset',
      '**/.dmno/.typegen',
    ],
  },

  // JavaScript
  eslintJS.configs.recommended,

  // TypeScript
  eslintTS.configs.strictTypeChecked,
  eslintTS.configs.stylisticTypeChecked,

  // XO
  eslintXO,

  // Regex
  eslintRegex.configs['flat/recommended'],

  // Turbo
  ...turboConfig,

  // Prettier
  eslintPrettier,

  // Globals
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
        DMNO_CONFIG: 'readonly',
      },
    },
  },

  // Custom rules
  {
    rules: {
      'object-shorthand': ['error', 'always'],
      'no-useless-rename': 'error',
      '@typescript-eslint/triple-slash-reference': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      'unicorn/expiring-todo-comments': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false,
          fixStyle: 'separate-type-imports',
        },
      ],
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },

  // Rule overrides
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-exports': [
        'error',
        { restrictDefaultExports: { direct: true } },
      ],
    },
  },
)
