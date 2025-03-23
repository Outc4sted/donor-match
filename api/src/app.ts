import fastify from 'fastify'
import cookie from '@fastify/cookie'
import requestContext from '@fastify/request-context'
import jwt from '@fastify/jwt'
import config from '@/config'
import routes from '@/routes'
import SwaggerPlugin from '@/plugins/swagger'
import ClerkPlugin from '@/plugins/clerk'
import authHook from '@/hooks/authenticate'

export default async (appName: string) => {
  const app = fastify({
    logger: config.Logger[config.Node.env] ?? true,
  })

  app.setErrorHandler(async (error, _request, reply) => {
    app.log.error(`Error with ${appName}`, error.message)
    return reply.code(500).send(error.message)
  })

  await app.register(requestContext)

  app.register(cookie)

  app.register(jwt, {
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

  await app.register(ClerkPlugin)

  await app.register(SwaggerPlugin)

  await app.register(routes)

  app.addHook('onRequest', authHook(app))

  await app.ready()

  return app
}
