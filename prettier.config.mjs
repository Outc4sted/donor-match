/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: "always",
  singleAttributePerLine: true,
  endOfLine: "lf",
  bracketSpacing: true,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  semi: false,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
          parser: "astro"
      }
    }
  ]
};

export default config;
