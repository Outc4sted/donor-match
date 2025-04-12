import type { organs, patients } from '@repo/db'
import { initContract } from '@ts-rest/core'
import { authorizationHeader } from '../schemas/shared/authorizationHeader.ts'
import type { PaginationSummary } from '../types/index.ts'
import { getAllOrgansQuery } from '../schemas/organs/getAllOrgansQuery.ts'

const c = initContract()

export const organRouter = c.router({
  getOrgans: {
    summary: 'Get all organs',
    method: 'GET',
    path: '/api/organs',
    headers: authorizationHeader,
    query: getAllOrgansQuery,
    responses: {
      200: c.type<{
        organs: (organs & {
          donor: Pick<patients, 'patientId' | 'firstName' | 'lastName'>
          recipient: Pick<
            patients,
            'patientId' | 'firstName' | 'lastName'
          > | null
        })[]
        pagination: PaginationSummary
      }>(),
    },
  },
})
