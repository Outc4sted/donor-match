import fastify from 'fastify'
import cookie from '@fastify/cookie'
import requestContext from '@fastify/request-context'
import jwt from '@fastify/jwt'
import config from '@/config'
import swaggerPlugin from '@/plugins/swagger'
import clerkPlugin from '@/plugins/clerk'
import tsRestPlugin from '@/plugins/ts-rest'

export default async (appName: string) => {
  const app = fastify({
    logger: config.Logger[config.Node.env] ?? true,
  })

  app.setErrorHandler(async (error, _request, reply) => {
    app.log.error(`Error with ${appName}`, error.message)
    return reply.code(500).send(error.message)
  })

  await app.register(requestContext)

  await app.register(cookie)

  await app.register(jwt, {
    secret: {
      public: config.Clerk.jwtKey,
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
