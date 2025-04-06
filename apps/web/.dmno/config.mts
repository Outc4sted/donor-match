import { DmnoBaseTypes, defineDmnoService, pick, switchBy } from 'dmno'

export default defineDmnoService({
  name: 'web',
  schema: {
    APP_ENV: pick(),
    API_NODE_HOST: pick('api', 'NODE_HOST'),
    API_NODE_PORT: pick('api', 'NODE_PORT'),
    DONOR_MATCH_API: {
      required: true,
      summary: 'Host for the api',
      extends: DmnoBaseTypes.url,
      value() {
        const protocol = ['local', 'docker', 'test'].includes(
          DMNO_CONFIG.APP_ENV,
        )
          ? 'http'
          : 'https'
        return `${protocol}://${DMNO_CONFIG.API_NODE_HOST}:${DMNO_CONFIG.API_NODE_PORT}`
      },
    },
    SITE_URL: {
      required: true,
      summary: 'Astro public site URL',
      description: 'Used to generate the sitemap and canonical URLs',
      externalDocs: {
        description: 'Explanation (from astro docs)',
        url: 'https://docs.astro.build/en/reference/configuration-reference/#site',
      },
      extends: DmnoBaseTypes.url,
      value: switchBy('APP_ENV', {
        local: 'http://localhost:3000',
        _default: 'http://127.0.0.1:3000',
      }),
      ui: {
        icon: 'vscode-icons:file-type-astro',
      },
    },
    CLERK_SECRET_KEY: pick('api'),
    PUBLIC_CLERK_PUBLISHABLE_KEY: pick('api', 'CLERK_PUBLISHABLE_KEY'),
    CI: {
      summary: 'CI flag',
      description: 'Used to alter the behavior of Playwright workers',
      externalDocs: {
        description: 'Explanation (from playwright docs)',
        url: 'https://playwright.dev/docs/ci',
      },
      extends: DmnoBaseTypes.boolean,
      value: switchBy('APP_ENV', {
        local: false,
        docker: false,
        _default: true,
      }),
      ui: {
        icon: 'logos:playwright',
      },
    },
  },
})
