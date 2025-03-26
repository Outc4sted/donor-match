import type { organs, patients } from '@donor-match/db'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export default c.router({
  getOrgans: {
    method: 'GET',
    path: '/api/organs',
    responses: {
      200: c.type<{
        organs: (organs & {
          donor: Pick<patients, 'firstName' | 'lastName'>
          recipient: Pick<patients, 'firstName' | 'lastName'>
        })[]
      }>(),
    },
    headers: z.object({
      authorization: z.string(),
    }),
    summary: 'Get all organs',
  },
})
