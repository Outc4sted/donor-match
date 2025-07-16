import type { organsModel, patientsModel } from '@repo/db/prisma/models'
import type { z } from 'zod/v4'
import type { PaginationSummary } from '../lib/paginationSummary.ts'
import type { authorizationHeader } from '../schemas/shared/authorizationHeader.ts'

import { initContract } from '@ts-rest/core'

import { getAllOrgansQuery } from '../schemas/organs/getAllOrgansQuery.ts'

const c = initContract()

export const organRouter = c.router(
  {
    getOrgans: {
      summary: 'Get all organs',
      method: 'GET',
      path: '/api/organs',
      query: getAllOrgansQuery,
      responses: {
        200: c.type<{
          organs: (organsModel & {
            donor: Pick<patientsModel, 'patientId' | 'firstName' | 'lastName'>
            recipient: Pick<
              patientsModel,
              'patientId' | 'firstName' | 'lastName'
            > | null
          })[]
          pagination: PaginationSummary
        }>(),
      },
    },
  },
  {
    baseHeaders: c.type<z.infer<typeof authorizationHeader>>(),
  },
)
