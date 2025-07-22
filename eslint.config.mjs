import baseConfig from '@repo/eslint/base'

export default [
  {
    ignores: ['apps', 'packages', 'tooling'],
  },

  ...baseConfig,
]
