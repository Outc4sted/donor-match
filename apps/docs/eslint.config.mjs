// import astroConfig from '@repo/eslint-config/astro'
import { configs, defineConfig } from '@repo/eslint-config'

export default defineConfig(...configs.base)

// export default [
//   ...astroConfig,

//   {
//     files: ['**/*.{astro,js,jsx,ts,tsx,cjs,mjs}'],
//     languageOptions: {
//       parserOptions: {
//         project: true,
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },
// ]
