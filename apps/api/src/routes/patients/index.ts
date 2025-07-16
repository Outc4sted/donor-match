import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'

import { createPatient } from './createPatient.ts'
import { getPatient } from './getPatient.ts'
import { getPatients } from './getPatients.ts'

export type PatientsRouter = RouterImplementation<typeof contract.patients>

export const patientsRoutes: PatientsRouter = {
  getPatients,
  getPatient,
  createPatient,
}
