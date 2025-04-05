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

const organScalarSortKeys = [
  'createdAt',
  'updatedAt',
  'deactivatedAt',
  'latitude',
  'longitude',
  'organType',
  'bloodType',
  'organSize',
] as const
const organCompositeSortKeys = ['donor', 'recipient', 'location'] as const
const c = initContract()

export const organSortableKeys = [
  ...organScalarSortKeys,
  ...organCompositeSortKeys,
] as const

export const organRouter = c.router({
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
      .merge(createSortQuerySchema(organSortableKeys)),
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
