import { createClerkClient } from '@clerk/backend'
import { type FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'

export const clerkPlugin = fp(function (fastify: FastifyInstance) {
  const clerk = createClerkClient({
    publishableKey: DMNO_CONFIG.CLERK_PUBLISHABLE_KEY,
    secretKey: DMNO_CONFIG.CLERK_SECRET_KEY,
  })

  fastify.decorate('clerk', clerk)
})
