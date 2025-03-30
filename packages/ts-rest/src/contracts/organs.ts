import { authorizationSchema } from '@/schemas/authorizationSchema'
import { paginationSchema } from '@/schemas/paginationSchema'
import type { organs, patients } from '@donor-match/db'
import { initContract } from '@ts-rest/core'

const c = initContract()

export default c.router({
  getOrgans: {
    summary: 'Get all organs',
    method: 'GET',
    path: '/api/organs',
    query: paginationSchema,
    responses: {
      200: c.type<{
        organs: (organs & {
          donor: Pick<patients, 'patientId' | 'firstName' | 'lastName'>
          recipient: Pick<patients, 'patientId' | 'firstName' | 'lastName'>
        })[]
        total: number
      }>(),
    },
    headers: authorizationSchema,
  },
})
