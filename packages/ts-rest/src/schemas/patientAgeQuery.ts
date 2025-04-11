import { z } from 'zod'

export const patientAgeQuery = z
  .object({
    minAge: z.coerce.number(),
    maxAge: z.coerce.number(),
  })
  .partial()
