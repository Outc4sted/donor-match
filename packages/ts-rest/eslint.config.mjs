import eslintConfig from '@repo/eslint-config/base'

export default [
  ...eslintConfig,

  // Allow Zod error message types
  {
    files: ['**/schemas/**/*.ts'],
    rules: {
      camelcase: ['error', { allow: ['required_error', 'invalid_type_error'] }],
    },
  },
]
