import { type FastifyInstance } from 'fastify'
import OrgansController from '@/controllers/organs'
import PatientsController from '@/controllers/patients'

export default async (fastify: FastifyInstance) => {
  await fastify.register(OrgansController, { prefix: '/organs' })
  await fastify.register(PatientsController, { prefix: '/patients' })
}
