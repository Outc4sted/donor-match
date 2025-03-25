import { contract } from '@donor-match/ts-rest'
import { initServer } from '@ts-rest/fastify'
import type { FastifyInstance } from 'fastify'
import organsController from '@/controllers/organs'
import patientsController from '@/controllers/patients'
import authHook from '@/hooks/authenticate'
import zenstackHook from '@/hooks/zenstack'

export default async (fastify: FastifyInstance) => {
  const s = initServer()
  const router = s.router(contract, {
    organs: organsController,
    patients: patientsController,
  })

  await fastify.register(s.plugin(router))
  fastify.addHook('onRequest', authHook(fastify.clerk))
  fastify.addHook('onRequest', zenstackHook(fastify.clerk))
}
