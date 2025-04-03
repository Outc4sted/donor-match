import { type FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import { createClerkClient } from '@clerk/backend'

export default fp(async function (fastify: FastifyInstance) {
  const clerk = createClerkClient({
    publishableKey: DMNO_CONFIG.CLERK_PUBLISHABLE_KEY,
    secretKey: DMNO_CONFIG.CLERK_SECRET_KEY,
  })

  fastify.decorate('clerk', clerk)
})
