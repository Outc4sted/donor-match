import astroConfig from '@repo/eslint-config/astro'

export default [
  ...astroConfig,

  {
    files: ['**/*.{astro,js,jsx,ts,tsx,cjs,mjs}'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // Allow children props for TanStack Form
  {
    files: ['**/components/**/*Form/**/*.tsx'],
    rules: {
      'react/no-children-prop': 'off',
    },
  },

  // Allow Zod error message types
  {
    files: ['**/components/**/*.{ts,tsx}'],
    rules: {
      camelcase: ['error', { allow: ['required_error', 'invalid_type_error'] }],
    },
  },
]
