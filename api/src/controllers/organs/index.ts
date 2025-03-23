import { type FastifyInstance } from 'fastify'

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async function (request, reply) {
    return reply.send({ message: 'get organs' })
  })
}
