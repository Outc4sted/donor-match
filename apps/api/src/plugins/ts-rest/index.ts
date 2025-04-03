import { contract } from '@repo/ts-rest'
import { initServer } from '@ts-rest/fastify'
import type { FastifyInstance } from 'fastify'
import organsController from '../../controllers/organs/index.ts'
import patientsController from '../../controllers/patients/index.ts'
import authHook from '../../hooks/authenticate/index.ts'
import zenstackHook from '../../hooks/zenstack/index.ts'

export default async (fastify: FastifyInstance) => {
  const s = initServer()
  const router = s.router(contract, {
    organs: organsController,
    patients: patientsController,
  })

  s.registerRouter(contract, router, fastify, {
    hooks: {
      onRequest: [authHook(fastify.clerk), zenstackHook(fastify.clerk)],
    },
  })
}
