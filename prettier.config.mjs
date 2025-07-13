/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'always',
  singleAttributePerLine: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
    'prettier-plugin-astro',
  ],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
  importOrder: [
    '',
    '^react$',
    '^next(/.*)?$',
    '',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@orbitkit/(.*)$',
    '',
    '^@/(.*)$',
    '',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderTypeScriptVersion: '5.8.3',
}

export default config
