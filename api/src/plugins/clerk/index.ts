import { type FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import { createClerkClient } from '@clerk/backend'
import config from '@/config'

export default fp(async function (fastify: FastifyInstance) {
  const clerk = createClerkClient({
    publishableKey: config.Clerk.publishableKey,
    secretKey: config.Clerk.secretKey,
  })

  fastify.decorate('clerk', clerk)
})
