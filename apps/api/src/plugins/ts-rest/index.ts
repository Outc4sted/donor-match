import { contract } from '@repo/ts-rest'
import { initServer } from '@ts-rest/fastify'
import type { FastifyInstance } from 'fastify'
import { organsRoutes } from '../../routes/organs/index.ts'
import { patientsRoutes } from '../../routes/patients/index.ts'
import authHook from '../../hooks/authenticate/index.ts'
import zenstackHook from '../../hooks/zenstack/index.ts'

export default async (fastify: FastifyInstance) => {
  const { router: createRouter, registerRouter } = initServer()
  const router = createRouter(contract, {
    organs: organsRoutes,
    patients: patientsRoutes,
  })

  registerRouter(contract, router, fastify, {
    hooks: {
      onRequest: [authHook(fastify.clerk), zenstackHook(fastify.clerk)],
    },
  })
}
