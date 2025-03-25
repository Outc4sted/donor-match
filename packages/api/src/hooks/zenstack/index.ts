import {
  type FastifyRequest,
  type FastifyReply,
  FastifyInstance,
} from 'fastify'

import PrismaClient from '@donor-match/db'
import { enhance } from '@zenstackhq/runtime'

export default (fastify: FastifyInstance) =>
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const prisma = new PrismaClient()

      const user = request.requestContext.get('user')
      const memberships =
        await fastify.clerk.users.getOrganizationMembershipList({
          userId: user.id,
        })
      const membership = memberships?.data?.[0] ?? null

      const db = enhance(prisma, {
        user: {
          id: user.id,
          role: user.publicMetadata?.role ?? membership?.role,
          permissions: membership?.permissions,
        },
      })

      request.requestContext.set('db', db)
    } catch (error) {
      reply.code(401).send({
        error: (error as Error).message,
      })
    }
  }
