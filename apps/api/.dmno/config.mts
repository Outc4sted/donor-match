import { DmnoBaseTypes, defineDmnoService, pick, switchBy } from 'dmno'

export default defineDmnoService({
  schema: {
    APP_ENV: pick(),
    NODE_ENVIRONMENT: {
      required: true,
      summary: 'Node environment context',
      extends: DmnoBaseTypes.enum(['development', 'production']),
      value: switchBy('APP_ENV', {
        local: 'development',
        _default: 'production',
      }),
      ui: {
        icon: 'logos:nodejs-icon',
      },
    },
    NODE_PORT: {
      required: true,
      summary: 'Fastify server port',
      extends: DmnoBaseTypes.number,
      value: '3001',
      ui: {
        icon: 'simple-icons:fastify',
      },
    },
    NODE_HOST: {
      required: true,
      summary: 'Fastify host',
      extends: DmnoBaseTypes.string,
      value: switchBy('APP_ENV', {
        local: '127.0.0.1',
        _default: '0.0.0.0',
      }),
      ui: {
        icon: 'simple-icons:fastify',
      },
    },
    FRONTEND_HOST: pick('web', 'SITE_URL'),
    CLERK_PUBLISHABLE_KEY: {
      required: true,
      summary: 'Clerk public API Key',
      externalDocs: {
        description: 'Explanation (from clerk docs)',
        url: 'https://clerk.com/glossary#publishable-key',
      },
      extends: DmnoBaseTypes.string,
      ui: {
        icon: 'simple-icons:clerk',
      },
    },
    CLERK_SECRET_KEY: {
      required: true,
      sensitive: true,
      summary: 'Clerk secret API Key',
      externalDocs: {
        description: 'Explanation (from clerk docs)',
        url: 'https://clerk.com/glossary#secret-key',
      },
      extends: DmnoBaseTypes.string,
      ui: {
        icon: 'simple-icons:clerk',
      },
    },
    CLERK_JWT_KEY: {
      required: true,
      sensitive: true,
      summary: 'Clerk JWT signing key',
      externalDocs: {
        description: 'Explanation (from clerk docs)',
        url: 'https://clerk.com/docs/backend-requests/manual-jwt#use-authenticate-request-to-verify-a-session-token',
      },
      extends: DmnoBaseTypes.string,
      ui: {
        icon: 'simple-icons:clerk',
      },
    },
    DATABASE_URL: pick('@repo/db'),
  },
})
