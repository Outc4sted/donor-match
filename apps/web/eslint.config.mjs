import { configs, defineConfig } from '@repo/eslint-config'

export default defineConfig(...configs.base)


//
// export default [
//   ...astroConfig,

//   {
//     ignores: ['**/components/ui/**/*.tsx'],
//   },

//   {
//     files: ['**/*.{astro,js,jsx,ts,tsx,cjs,mjs}'],
//     languageOptions: {
//       parserOptions: {
//         project: true,
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },

//   // Allow children props for TanStack Form
//   {
//     files: ['**/components/**/*Form/**/*.tsx'],
//     rules: {
//       'react/no-children-prop': 'off',
//     },
//   },
// ]
