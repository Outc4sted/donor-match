declare module 'fastify' {
  interface FastifyInstance {
    clerk: import('@clerk/backend').ClerkClient
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: import('@clerk/types').JwtPayload
    user: import('@clerk/types').JwtPayload
  }
}

declare global {
  interface UserPublicMetadata {
    role?: string
  }
}

declare module '@fastify/request-context' {
  interface RequestContextData {
    user: import('@clerk/backend').User
    db: import('@zenstackhq/runtime').PrismaClient
  }
}
