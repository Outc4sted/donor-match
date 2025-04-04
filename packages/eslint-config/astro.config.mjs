import globals from 'globals'
import eslintJS from '@eslint/js'
import eslintTS from 'typescript-eslint'
import eslintAstro from 'eslint-plugin-astro'
import eslintTailwind from 'eslint-plugin-tailwindcss'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import eslintXO from 'eslint-config-xo/space'
import eslintXOReact from 'eslint-config-xo-react/space'
import eslintQuery from '@tanstack/eslint-plugin-query'

/** @type {import('eslint').Linter.Config[]} */
export default eslintTS.config(
  // Base config
  // baseConfig,

  // Ignored files
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.astro',
      '**/.github',
      '**/.changeset',
      '**/.dmno',
      'eslint.config.mjs',
      '**/components/ui/**/*.tsx',
    ],
  },

  // Globals for node and browser
  {
    files: ['**/*.{astro,js,jsx,ts,tsx,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        DMNO_CONFIG: 'readonly',
      },
      parserOptions: {
        project: true,
        parser: eslintTS.parser,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        },
      ],
    },
  },

  // JavaScript
  eslintJS.configs.recommended,

  // TypeScript
  eslintTS.configs.strict,
  eslintTS.configs.stylistic,

  // XO
  eslintXO,

  // React
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintXOReact],
  },

  // TanStack Query
  eslintQuery.configs['flat/recommended'],

  // Astro
  eslintAstro.configs['flat/recommended'],
  // eslintAstro.configs['flat/jsx-a11y-strict'],

  // Tailwind
  eslintTailwind.configs['flat/recommended'],

  // Prettier
  eslintPrettier,

  // Custom rules
  {
    rules: {
      'object-shorthand': ['error', 'always'],
      'no-useless-rename': 'error',
      'react/react-in-jsx-scope': 'off',
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
        { prefer: 'type-imports' },
      ],
    },
  },

  // Rule overrides
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: false },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-restricted-exports': [
        'error',
        { restrictDefaultExports: { direct: true } },
      ],
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          // Tailwind eslint only supports v3 atm...
          whitelist: ['min-w-sm'],
        },
      ],
    },
  },
)
