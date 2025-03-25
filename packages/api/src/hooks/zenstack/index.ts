import { type FastifyRequest, type FastifyReply } from 'fastify'
import { PrismaClient } from '@prisma/client'
import type { ClerkClient } from '@clerk/backend'
import { enhance } from '@zenstackhq/runtime'

export default (clerk: ClerkClient) =>
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const prisma = new PrismaClient()

      const user = request.requestContext.get('user')
      const memberships = await clerk.users.getOrganizationMembershipList({
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
