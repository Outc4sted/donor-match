import { contract } from '@donor-match/ts-rest'
import { initServer } from '@ts-rest/fastify'
import { FastifyInstance } from 'fastify'
import fp from 'fastify-plugin'
import organsController from '@/controllers/organs'
import patientsController from '@/controllers/patients'

export default fp(async function (fastify: FastifyInstance) {
  const s = initServer()
  const router = s.router(contract, {
    organs: organsController,
    patients: patientsController,
  })

  fastify.register(s.plugin(router))
})
