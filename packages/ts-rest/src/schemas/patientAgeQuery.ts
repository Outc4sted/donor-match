import { z } from 'zod/v4'

export const patientAgeQuery = z
  .object({
    minAge: z.coerce.number(),
    maxAge: z.coerce.number(),
  })
  .partial()
