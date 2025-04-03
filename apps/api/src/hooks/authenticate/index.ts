import { type FastifyRequest, type FastifyReply } from 'fastify'
import type { ClerkClient } from '@clerk/backend'
import type { JwtPayload } from '@clerk/types'

export default (clerk: ClerkClient) =>
  async (request: FastifyRequest, reply: FastifyReply) => {
    const tokenSameOrigin = request.cookies.__session
    const tokenCrossOrigin = request.headers.authorization

    try {
      if (!tokenSameOrigin && !tokenCrossOrigin) {
        throw new Error('Not signed in')
      }

      const decoded = (await request.jwtVerify()) as JwtPayload
      const permittedOrigins = [
        'http://localhost:3000',
        DMNO_CONFIG.FRONTEND_HOST,
      ]

      // Validate the token's expiration (exp) and not before (nbf) claims
      const currentTime = Math.floor(Date.now() / 1000)
      if (decoded.exp < currentTime || decoded.nbf > currentTime) {
        throw new Error('Token is expired or not yet valid')
      }

      // Validate the token's authorized party (azp) claim
      if (decoded.azp && !permittedOrigins.includes(decoded.azp)) {
        throw new Error("Invalid 'azp' claim")
      }

      const user = await clerk.users.getUser(decoded.sub)
      request.requestContext.set('user', user)
    } catch (error) {
      reply.code(401).send({
        error: (error as Error).message,
      })
    }
  }
