import { type FastifyInstance } from 'fastify'

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async function (request, reply) {
    const db = request.requestContext.get('db')
    const organs = await db.organs.findMany()

    return reply.send(organs)
  })
}
