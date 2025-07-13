import type { ClerkClient } from '@clerk/backend'

import { PrismaClient } from '@repo/db/prisma/client'
import { enhance } from '@repo/db/zenstack/enhance'
import { type FastifyReply, type FastifyRequest } from 'fastify'

const prisma = new PrismaClient()

export const zenstackHook =
  (clerk: ClerkClient) =>
  async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const user = request.requestContext.get('user')
      const memberships = await clerk.users.getOrganizationMembershipList({
        userId: user.id,
      })
      const membership = memberships.data[0] ?? null

      const db = enhance(prisma, {
        user: {
          id: user.id,
          role: user.publicMetadata.role ?? membership?.role,
          permissions: membership?.permissions,
        },
      }) as ReturnType<typeof enhance>

      request.requestContext.set('db', db)
    } catch (error) {
      reply.code(401).send({
        error: (error as Error).message,
      })
    }
  }
