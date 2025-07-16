import type { patientsModel } from '@repo/db/prisma/models'
import type { z } from 'zod/v4'
import type { PaginationSummary } from '../lib/paginationSummary.ts'
import type { authorizationHeader } from '../schemas/shared/authorizationHeader.ts'

import { initContract } from '@ts-rest/core'

import { createPatientBody } from '../schemas/patients/createPatientBody.ts'
import { getAllPatientsQuery } from '../schemas/patients/getAllPatientsQuery.ts'

const c = initContract()

export const patientRouter = c.router(
  {
    getPatients: {
      summary: 'Get all patients',
      method: 'GET',
      path: '/api/patients',
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
      responses: {
        200: c.type<{ patient: patientsModel }>(),
        404: c.type<{ error: string }>(),
      },
    },
    createPatient: {
      summary: 'Create a new patient',
      method: 'POST',
      path: '/api/patients',
      body: createPatientBody,
      responses: {
        200: c.type<{ patient: patientsModel }>(),
        409: c.type<{ error: string }>(),
        500: c.type<{ error: string }>(),
      },
    },
  },
  {
    baseHeaders: c.type<z.infer<typeof authorizationHeader>>(),
  },
)
