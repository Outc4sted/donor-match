import type { patients } from '@donor-match/db'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export default c.router({
  getPatients: {
    method: 'GET',
    path: '/api/patients',
    responses: {
      200: c.type<{ patients: patients[] }>(),
    },
    headers: z.object({
      authorization: z.string(),
    }),
    summary: 'Get all patients',
  },
})
