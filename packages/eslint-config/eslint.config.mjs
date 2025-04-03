import globals from 'globals'
import eslintJS from '@eslint/js'
import eslintTS from 'typescript-eslint'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import eslintXO from 'eslint-config-xo/space'

/** @type {import('eslint').Linter.Config[]} */
export default eslintTS.config(
  // Ignored files
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.github',
      '**/.changeset',
      '**/.dmno/.typegen',
      '**/eslint.config.mjs',
    ],
  },

  // Globals for node
  {
    files: ['**/*.{js,ts,cjs,mjs,mts}'],
    languageOptions: {
      globals: {
        ...globals.node,
        DMNO_CONFIG: 'readonly',
      },
    },
  },

  // JavaScript
  eslintJS.configs.recommended,

  // TypeScript
  eslintTS.configs.strict,
  eslintTS.configs.stylistic,

  // XO
  eslintXO,

  // Prettier
  eslintPrettier,

  // Custom rules
  // {
  //   rules: {
  //     'object-shorthand': ['error', 'always'],
  //     'no-useless-rename': 'error',
  //     '@typescript-eslint/triple-slash-reference': 'off',
  //     '@typescript-eslint/naming-convention': [
  //       'error',
  //       {
  //         selector: 'variable',
  //         types: ['boolean'],
  //         format: ['PascalCase'],
  //         prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
  //       },
  //     ],
  //     '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  //     'unicorn/expiring-todo-comments': 'off',
  //     '@typescript-eslint/consistent-type-imports': [
  //       'error',
  //       { prefer: 'type-imports' },
  //     ],
  //   },
  // },

  // // Rule overrides
  // {
  //   files: ['**/*.d.ts'],
  //   rules: {
  //     '@typescript-eslint/consistent-type-imports': [
  //       'error',
  //       { disallowTypeAnnotations: false },
  //     ],
  //   },
  // },
)
