import astroConfig from '@repo/eslint/astro'
import baseConfig from '@repo/eslint/base'
import reactConfig from '@repo/eslint/react'

export default [...baseConfig, ...reactConfig, ...astroConfig]
