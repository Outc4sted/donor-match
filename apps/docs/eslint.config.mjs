import astroConfig from '@repo/eslint-config/astro'
import baseConfig from '@repo/eslint-config/base'
import reactConfig from '@repo/eslint-config/react'

export default [...baseConfig, ...reactConfig, ...astroConfig]
