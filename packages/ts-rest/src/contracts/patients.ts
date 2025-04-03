import { initContract } from '@ts-rest/core'
import type { patients } from '@repo/db'
import { authorizationHeader } from '../schemas/authorizationHeader.ts'
import { paginationQuery } from '../schemas/paginationQuery.ts'
import type { PaginationSummary } from '../types/index.ts'
import { bloodTypeQuery } from '../schemas/bloodTypeQuery.ts'

const c = initContract()

export default c.router({
  getPatients: {
    summary: 'Get all patients',
    method: 'GET',
    path: '/api/patients',
    headers: authorizationHeader,
    query: paginationQuery.merge(bloodTypeQuery),
    responses: {
      200: c.type<{ patients: patients[]; pagination: PaginationSummary }>(),
    },
  },
})
