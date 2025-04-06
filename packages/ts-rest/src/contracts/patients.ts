import type { patients } from '@repo/db'
import { initContract } from '@ts-rest/core'
import { authorizationHeader } from '../schemas/authorizationHeader.ts'
import { paginationQuery } from '../schemas/paginationQuery.ts'
import type { PaginationSummary } from '../types/index.ts'
import { bloodTypeQuery } from '../schemas/bloodTypeQuery.ts'
import { searchQuery } from '../schemas/searchQuery.ts'
import { patientAgeQuery } from '../schemas/patientAgeQuery.ts'
import { createSortQuerySchema } from '../schemas/sortQuery.ts'

export const patientScalarSortKeys = [
  'createdAt',
  'updatedAt',
  'deactivatedAt',
  'patientId',
  'latitude',
  'longitude',
  'firstName',
  'lastName',
  'age',
  'ssn',
  'bloodType',
] as const
const patientCompositeSortKeys = ['patient', 'location'] as const
const c = initContract()

export const patientSortableKeys = [
  ...patientScalarSortKeys,
  ...patientCompositeSortKeys,
] as const

export const patientRouter = c.router({
  getPatients: {
    summary: 'Get all patients',
    method: 'GET',
    path: '/api/patients',
    headers: authorizationHeader,
    query: paginationQuery
      .merge(bloodTypeQuery)
      .merge(patientAgeQuery)
      .merge(searchQuery)
      .merge(createSortQuerySchema(patientSortableKeys)),
    responses: {
      200: c.type<{ patients: patients[]; pagination: PaginationSummary }>(),
    },
  },
  getPatient: {
    summary: 'Get a single patient',
    method: 'GET',
    path: '/api/patients/:patientId',
    headers: authorizationHeader,
    responses: {
      200: c.type<{ patient: patients }>(),
      404: c.type<{ error: string }>(),
    },
  },
})
