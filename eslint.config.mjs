import globals from "globals";
import eslintJS from '@eslint/js'
import eslintTS from 'typescript-eslint'
import eslintAstro from "eslint-plugin-astro";
import eslintTailwind from "eslint-plugin-tailwindcss";
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import eslintXO from 'eslint-config-xo/space'
import eslintXOReact from "eslint-config-xo-react/space";

/** @type {import('eslint').Linter.Config[]} */
export default eslintTS.config(
  // Ignored files
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.astro',
      '**/.github',
      '**/.changeset',
      'eslint.config.mjs',
      'prettier.config.mjs',
    ],
  },

  // Globals for node and browser
  {
    files: ['**/*.{astro,js,jsx,ts,tsx,cjs,mjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
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

  // React
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintXOReact],
  },

  // Astro
  eslintAstro.configs['flat/recommended'],
  eslintAstro.configs['flat/jsx-a11y-recommended'],

  // Tailwind
  eslintTailwind.configs['flat/recommended'],

  // Prettier
  eslintPrettier,

  // Custom rules
  {
    rules: {
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
    },
  },

  // Rule overrides
  {
    files: ['app/src/components/ui/**/*.tsx'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
      'react/boolean-prop-naming': 'off',
    },
  },
)
