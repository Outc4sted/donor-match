import type { organs, patients } from '@repo/db'
import { initContract } from '@ts-rest/core'
import { authorizationHeader } from '../schemas/authorizationHeader.ts'
import { paginationQuery } from '../schemas/paginationQuery.ts'
import type { PaginationSummary } from '../types/index.ts'
import { bloodTypeQuery } from '../schemas/bloodTypeQuery.ts'
import { organTypeQuery } from '../schemas/organTypeQuery.ts'
import { searchQuery } from '../schemas/searchQuery.ts'
import { organWeightQuery } from '../schemas/organWeightQuery.ts'
import { createSortQuerySchema } from '../schemas/sortQuery.ts'

export const organKeys = [
  'createdAt',
  'updatedAt',
  'deactivatedAt',
  'organId',
  'donorId',
  'recipientId',
  'latitude',
  'longitude',
  'organType',
  'bloodType',
  'organSize',
] satisfies (keyof organs)[]

const c = initContract()

export default c.router({
  getOrgans: {
    summary: 'Get all organs',
    method: 'GET',
    path: '/api/organs',
    headers: authorizationHeader,
    query: paginationQuery
      .merge(bloodTypeQuery)
      .merge(organTypeQuery)
      .merge(organWeightQuery)
      .merge(searchQuery)
      .merge(createSortQuerySchema(organKeys as [string, ...string[]])),
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
