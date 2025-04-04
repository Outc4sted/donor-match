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
]
