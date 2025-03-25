import fastify from 'fastify'
import cookie from '@fastify/cookie'
import requestContext from '@fastify/request-context'
import jwt from '@fastify/jwt'
import config from '@/config'
import swaggerPlugin, { swaggerPath } from '@/plugins/swagger'
import clerkPlugin from '@/plugins/clerk'
import tsRestPlugin from '@/plugins/ts-rest'
import authHook from '@/hooks/authenticate'
import zenstackHook from '@/hooks/zenstack'

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

  app.addHook('onRequest', async (request, reply) => {
    if (!request.raw.url.includes(swaggerPath)) {
      await authHook(app)(request, reply)
      await zenstackHook(app)(request, reply)
    }
  })

  await app.ready()

  return app
}
