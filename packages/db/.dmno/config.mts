import { DmnoBaseTypes, defineDmnoService, pick, switchBy } from 'dmno'

export default defineDmnoService({
  schema: {
    APP_ENV: pick(),
    DATABASE_URL: {
      required: true,
      sensitive: true,
      summary: 'Primary DB URL used for the Zenstack enhanced Prisma client',
      description: 'Houses all of the data for donor-match',
      typeDescription: 'Postgres connection url',
      externalDocs: {
        description: 'Explanation (from prisma docs)',
        url: 'https://www.prisma.io/dataguide/postgresql/short-guides/connection-uris#a-quick-overview',
      },
      extends: DmnoBaseTypes.string,
      value: () =>
        `postgresql://${DMNO_CONFIG.POSTGRES_USER}:${DMNO_CONFIG.POSTGRES_PASSWORD}@${DMNO_CONFIG.POSTGRES_HOST}:${DMNO_CONFIG.POSTGRES_PORT}/${DMNO_CONFIG.POSTGRES_DB}`,
      ui: {
        icon: 'devicon:postgresql',
      },
    },
    POSTGRES_USER: {
      required: true,
      sensitive: true,
      summary: 'Database user for docker image',
      extends: DmnoBaseTypes.string,
      value: 'postgres',
      ui: {
        icon: 'devicon:postgresql',
      },
    },
    POSTGRES_PASSWORD: {
      required: true,
      sensitive: true,
      summary: 'Database password for docker image',
      extends: DmnoBaseTypes.string,
      value: 'password',
      ui: {
        icon: 'devicon:postgresql',
      },
    },
    POSTGRES_DB: {
      required: true,
      sensitive: true,
      summary: 'Database name for docker image',
      extends: DmnoBaseTypes.string,
      value: 'donor-match-dev',
      ui: {
        icon: 'devicon:postgresql',
      },
    },
    POSTGRES_PORT: {
      required: true,
      sensitive: true,
      summary: 'Database port for docker image',
      extends: DmnoBaseTypes.port,
      value: 5432,
      ui: {
        icon: 'devicon:postgresql',
      },
    },
    POSTGRES_HOST: {
      required: true,
      sensitive: true,
      summary: 'Database host for docker image',
      extends: DmnoBaseTypes.string,
      value: switchBy('APP_ENV', { local: '127.0.0.1', docker: 'postgres' }),
      ui: {
        icon: 'devicon:postgresql',
      },
    },
  },
})
