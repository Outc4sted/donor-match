// // @ts-check

// import eslintJS from '@eslint/js'
// import eslintTS from 'typescript-eslint'
// import eslintPrettier from 'eslint-plugin-prettier/recommended'
// import eslintXO from 'eslint-config-xo/space'

// export default eslintTS.config(
//   // Ignored files
//   {
//     ignores: [
//       '**/dist',
//       '**/generated',
//       '**/node_modules',
//       '**/.github',
//       '**/.changeset',
//       '**/.dmno/.typegen',
//     ],
//   },

//   // JavaScript
//   eslintJS.configs.recommended,

//   // TypeScript
//   {
//     files: ['**/*.ts', '**/*.tsx'],
//     extends: [
//       eslintTS.configs.strictTypeChecked,
//       eslintTS.configs.stylisticTypeChecked,
//       // XO
//       eslintXO,

//     ],
//     languageOptions: {
//       parserOptions: {
//         projectService: true,
//         // tsconfigRootDir: import.meta.dirname,
//       },
//     },
//   },

//   // Prettier
//   eslintPrettier,

//   // Custom rules
//   {
//     rules: {
//       'object-shorthand': ['error', 'always'],
//       'no-useless-rename': 'error',
//       '@typescript-eslint/triple-slash-reference': 'off',
//       '@typescript-eslint/naming-convention': [
//         'error',
//         {
//           selector: 'variable',
//           types: ['boolean'],
//           format: ['PascalCase'],
//           prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
//         },
//       ],
//       '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
//       'unicorn/expiring-todo-comments': 'off',
//       '@typescript-eslint/consistent-type-imports': [
//         'error',
//         {
//           prefer: 'type-imports',
//           disallowTypeAnnotations: false,
//           fixStyle: 'separate-type-imports',
//         },
//       ],
//       '@typescript-eslint/restrict-template-expressions': 'off',
//     },
//   },

//   // Rule overrides
//   {
//     files: ['**/*.d.ts'],
//     rules: {
//       '@typescript-eslint/consistent-type-imports': [
//         'error',
//         { disallowTypeAnnotations: false },
//       ],
//     },
//   },
//   {
//     files: ['**/*.ts', '**/*.tsx'],
//     rules: {
//       'no-restricted-exports': [
//         'error',
//         { restrictDefaultExports: { direct: true } },
//       ],
//     },
//   },
// )
