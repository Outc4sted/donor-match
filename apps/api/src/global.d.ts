import type { ClerkClient, User } from '@clerk/backend'
import type { JwtPayload } from '@clerk/types'
import type { PrismaClient } from '@zenstackhq/runtime'

declare module 'fastify' {
  interface FastifyInstance {
    clerk: ClerkClient
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: JwtPayload
    user: JwtPayload
  }
}

declare global {
  interface UserPublicMetadata {
    role?: string
  }
}

declare module '@fastify/request-context' {
  interface RequestContextData {
    user: User
    db: PrismaClient
  }

  interface RequestContext {
    get<K extends keyof RequestContextData>(_key: K): RequestContextData[K]
  }
}
