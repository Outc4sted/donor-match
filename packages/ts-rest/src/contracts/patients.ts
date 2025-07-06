import type { patientsModel } from '@repo/db/prisma/models'
import { initContract } from '@ts-rest/core'
import { authorizationHeader } from '../schemas/shared/authorizationHeader.ts'
import { getAllPatientsQuery } from '../schemas/patients/getAllPatientsQuery.ts'
import { createPatientBody } from '../schemas/patients/createPatientBody.ts'
import type { PaginationSummary } from '../lib/paginationSummary.ts'

const c = initContract()

export const patientRouter = c.router({
  getPatients: {
    summary: 'Get all patients',
    method: 'GET',
    path: '/api/patients',
    headers: authorizationHeader,
    query: getAllPatientsQuery,
    responses: {
      200: c.type<{
        patients: patientsModel[]
        pagination: PaginationSummary
      }>(),
    },
  },
  getPatient: {
    summary: 'Get a single patient',
    method: 'GET',
    path: '/api/patients/:patientId',
    headers: authorizationHeader,
    responses: {
      200: c.type<{ patient: patientsModel }>(),
      404: c.type<{ error: string }>(),
    },
  },
  createPatient: {
    summary: 'Create a new patient',
    method: 'POST',
    path: '/api/patients',
    headers: authorizationHeader,
    body: createPatientBody,
    responses: {
      200: c.type<{ patient: patientsModel }>(),
      409: c.type<{ error: string }>(),
      500: c.type<{ error: string }>(),
    },
  },
})
