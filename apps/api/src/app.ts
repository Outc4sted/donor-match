import fastify from 'fastify'
import cookie from '@fastify/cookie'
import requestContext from '@fastify/request-context'
import jwt from '@fastify/jwt'
import qs from 'qs'
import swaggerPlugin from './plugins/swagger/index.ts'
import clerkPlugin from './plugins/clerk/index.ts'
import tsRestPlugin from './plugins/ts-rest/index.ts'
import { dmnoFastifyPlugin } from '@dmno/fastify-integration'
import { LoggerConfig } from './config/logger.ts'

export default async (appName: string) => {
  const app = fastify({
    logger: LoggerConfig[DMNO_CONFIG.NODE_ENVIRONMENT],
    querystringParser: (str) => qs.parse(str),
  })

  app.setErrorHandler(async (error, _request, reply) => {
    app.log.error(`Error with ${appName}`, error.message)
    return reply.code(500).send(error.message)
  })

  await app.register(dmnoFastifyPlugin)

  await app.register(requestContext)

  await app.register(cookie)

  await app.register(jwt, {
    secret: {
      public: DMNO_CONFIG.CLERK_JWT_KEY,
    },
    verify: {
      algorithms: ['RS256'],
    },
    cookie: {
      cookieName: '__session',
      signed: false,
    },
  })

  await app.register(clerkPlugin)
  await app.register(swaggerPlugin)
  await app.register(tsRestPlugin)

  await app.ready()

  return app
}
