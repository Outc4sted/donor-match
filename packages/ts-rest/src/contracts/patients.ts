import { authorizationSchema } from '@/schemas/authorizationSchema'
import { paginationSchema } from '@/schemas/paginationSchema'
import type { patients } from '@donor-match/db'
import { initContract } from '@ts-rest/core'

const c = initContract()

export default c.router({
  getPatients: {
    summary: 'Get all patients',
    method: 'GET',
    path: '/api/patients',
    query: paginationSchema,
    responses: {
      200: c.type<{ patients: patients[]; total: number }>(),
    },
    headers: authorizationSchema,
  },
})
