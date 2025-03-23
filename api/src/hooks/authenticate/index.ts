import {
  type FastifyRequest,
  type FastifyReply,
  FastifyInstance,
} from 'fastify'
import type { JwtPayload } from '@clerk/types'
import config from '@/config'

export default (fastify: FastifyInstance) =>
  async (request: FastifyRequest, reply: FastifyReply) => {
    const tokenSameOrigin = request.cookies.__session
    const tokenCrossOrigin = request.headers.authorization

    try {
      if (!tokenSameOrigin && !tokenCrossOrigin) {
        throw new Error('Not signed in')
      }

      const decoded = (await request.jwtVerify()) as JwtPayload
      const permittedOrigins = [config.Frontend.host]

      // Validate the token's expiration (exp) and not before (nbf) claims
      const currentTime = Math.floor(Date.now() / 1000)
      if (decoded.exp < currentTime || decoded.nbf > currentTime) {
        throw new Error('Token is expired or not yet valid')
      }

      // Validate the token's authorized party (azp) claim
      if (decoded.azp && !permittedOrigins.includes(decoded.azp)) {
        throw new Error("Invalid 'azp' claim")
      }

      request.requestContext.set(
        'user',
        await fastify.clerk.users.getUser(decoded.sub),
      )
    } catch (error) {
      reply.code(401).send({
        error: (error as Error).message,
      })
    }
  }
