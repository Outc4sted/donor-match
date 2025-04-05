import { initContract } from '@ts-rest/core'
import type { patients } from '@repo/db'
import { authorizationHeader } from '../schemas/authorizationHeader.ts'
import { paginationQuery } from '../schemas/paginationQuery.ts'
import type { PaginationSummary } from '../types/index.ts'
import { bloodTypeQuery } from '../schemas/bloodTypeQuery.ts'
import { searchQuery } from '../schemas/searchQuery.ts'
import { patientAgeQuery } from '../schemas/patientAgeQuery.ts'
import { createSortQuerySchema } from '../schemas/sortQuery.ts'

export const patientKeys = [
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
] satisfies (keyof patients)[]

const c = initContract()

export default c.router({
  getPatients: {
    summary: 'Get all patients',
    method: 'GET',
    path: '/api/patients',
    headers: authorizationHeader,
    query: paginationQuery
      .merge(bloodTypeQuery)
      .merge(patientAgeQuery)
      .merge(searchQuery)
      .merge(createSortQuerySchema(patientKeys as [string, ...string[]])),
    responses: {
      200: c.type<{ patients: patients[]; pagination: PaginationSummary }>(),
    },
  },
})
