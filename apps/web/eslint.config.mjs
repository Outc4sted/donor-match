// export { default } from '@repo/eslint-config/astro'
//
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

  {
    'tailwindcss/no-custom-classname': [
      'warn',
      {
        // Tailwind eslint only support v3 atm...
        whitelist: ['min-w-sm'],
      },
    ],
  },
]
