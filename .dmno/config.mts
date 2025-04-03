import { DmnoBaseTypes, defineDmnoService } from 'dmno'

/** @type {import('dmno').DmnoServiceConfig} */
export default defineDmnoService({
  settings: {
    redactSensitiveLogs: true,
    interceptSensitiveLeakRequests: true,
    preventClientLeaks: true,
  },
  name: 'root',
  schema: {
    APP_ENV: {
      extends: DmnoBaseTypes.enum([
        'local',
        'test',
        'docker',
        'dev',
        'impl',
        'preprod',
        'production',
      ]),
      value: 'local',
      required: true,
      summary: 'Application environment',
      description: 'The environment context the app is being run in',
      ui: {
        icon: 'eos-icons:config-map',
        color: 'f88f22',
      },
    },
  },
})
