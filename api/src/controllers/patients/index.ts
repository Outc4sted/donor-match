import { type FastifyInstance } from 'fastify'

export default async (fastify: FastifyInstance) => {
  fastify.get('/', async function (request, reply) {
    fastify.log.info(JSON.stringify(request.body))
    return reply.send({ message: 'get patients' })
  })
}
