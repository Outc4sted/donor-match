import { DmnoBaseTypes, defineDmnoService, pick, switchBy } from 'dmno'

export default defineDmnoService({
  schema: {
    APP_ENV: pick(),
    NODE_PORT: {
      required: true,
      summary: 'Astro Starlight server port',
      extends: DmnoBaseTypes.number,
      value: '2999',
      ui: {
        icon: 'vscode-icons:file-type-astro',
      },
    },
    NODE_HOST: pick('web'),
    SITE_URL: {
      required: true,
      summary: 'Astro Starlight public site URL',
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
  },
})
