// import globals from 'globals'
// import eslintTS from 'typescript-eslint'
// import eslintAstro from 'eslint-plugin-astro'
// import eslintTailwind from 'eslint-plugin-better-tailwindcss'
// import eslintXOReact from 'eslint-config-xo-react/space'
// import eslintQuery from '@tanstack/eslint-plugin-query'
// import baseConfig from './base.config.mjs'

// /** @type {import('eslint').Linter.Config[]} */
// export default eslintTS.config(
//   // Base config
//   ...baseConfig,

//   // Ignored files
//   {
//     ignores: ['**/.astro'],
//   },

//   // Globals for node and browser
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//         DMNO_CONFIG: 'readonly',
//         DMNO_PUBLIC_CONFIG: 'readonly',
//       },
//       parserOptions: {
//         project: true,
//         parser: eslintTS.parser,
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },

//   // React
//   {
//     files: ['**/*.{ts,tsx}'],
//     extends: [eslintXOReact],
//     rules: {
//       'react/react-in-jsx-scope': 'off',
//     },
//   },

//   // TanStack Query
//   eslintQuery.configs['flat/recommended'],

//   // Astro
//   eslintAstro.configs['flat/recommended'],
//   // eslintAstro.configs['flat/jsx-a11y-strict'],

//   // Tailwind
//   {
//     files: ['**/*.{jsx,tsx,astro}'],
//     languageOptions: {
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//     plugins: {
//       'better-tailwindcss': eslintTailwind,
//     },
//     rules: {
//       ...eslintTailwind.configs['recommended-warn'].rules,
//       ...eslintTailwind.configs['recommended-error'].rules,
//       'better-tailwindcss/enforce-consistent-line-wrapping': [
//         'warn',
//         { printWidth: 160 },
//       ],
//     },
//     settings: {
//       'better-tailwindcss': {
//         entryPoint: 'src/styles/global.css',
//       },
//     },
//   },
// )
