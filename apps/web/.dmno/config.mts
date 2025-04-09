import { DmnoBaseTypes, defineDmnoService, pick, switchBy } from 'dmno'

export default defineDmnoService({
  name: 'web',
  schema: {
    APP_ENV: pick(),
    DONOR_MATCH_API: {
      required: true,
      summary: 'Host for the api',
      extends: DmnoBaseTypes.url,
      value: switchBy('APP_ENV', {
        local: 'http://localhost:3001',
        docker: 'http://fastify:3001',
        _default: 'http://127.0.0.1:3001',
      }),
    },
    NODE_HOST: {
      required: true,
      summary: 'Astro host',
      extends: DmnoBaseTypes.string,
      value: switchBy('APP_ENV', {
        local: 'localhost',
        _default: '0.0.0.0',
      }),
      ui: {
        icon: 'vscode-icons:file-type-astro',
      },
    },
    NODE_PORT: {
      required: true,
      summary: 'Astro server port',
      extends: DmnoBaseTypes.number,
      value: '3000',
      ui: {
        icon: 'vscode-icons:file-type-astro',
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
        local: () => `http://localhost:${DMNO_CONFIG.NODE_PORT}`,
        _default: () => `http://127.0.0.1:${DMNO_CONFIG.NODE_PORT}`,
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
