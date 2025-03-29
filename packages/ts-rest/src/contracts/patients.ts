import type { patients } from '@donor-match/db'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export default c.router({
  getPatients: {
    method: 'GET',
    path: '/api/patients',
    query: z
      .object({
        page: z.preprocess(
          (val) => (typeof val === 'string' ? Number(val) : undefined),
          z
            .number()
            .min(1, { message: 'Page must be at least 1' })
            .transform(Number)
            .optional(),
        ),
        limit: z.preprocess(
          (val) => (typeof val === 'string' ? Number(val) : undefined),
          z
            .number()
            .min(20, { message: 'Limit must be at least 1' })
            .max(100, { message: 'Limit must be 100 or less' })
            .transform(Number)
            .optional(),
        ),
      })
      .transform((data) => {
        // If a limit is provided but page is not, default page to 1.
        if (data.limit !== undefined && data.page === undefined) {
          return { ...data, page: 1 }
        }

        return data
      })
      .optional(),
    responses: {
      200: c.type<{ patients: patients[]; total: number }>(),
    },
    headers: z.object({
      authorization: z.string(),
    }),
    summary: 'Get all patients',
  },
})
