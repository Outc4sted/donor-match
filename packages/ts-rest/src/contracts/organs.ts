import { organs } from '@donor-match/db'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()
export const contract = c.router({
  getOrgans: {
    method: 'GET',
    path: '/api/organs',
    responses: {
      200: c.type<{ posts: organs[]; total: number }>(),
    },
    headers: z.object({
      pagination: z.string().optional(),
    }),
    summary: 'Get all organs',
  },
})
