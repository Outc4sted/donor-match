import type { RouterImplementation } from '@ts-rest/fastify'
import type { contract } from '@repo/ts-rest'
import { getPatients } from './getPatients.ts'
import { getPatient } from './getPatient.ts'

export type PatientsRouter = RouterImplementation<typeof contract.patients>

export const patientsRoutes: PatientsRouter = {
  getPatients,
  getPatient,
}
