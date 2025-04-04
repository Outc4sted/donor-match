import { z } from 'zod'

export const patientAgeQuery = z
  .object({
    minAge: z.coerce.number().optional(),
    maxAge: z.coerce.number().optional(),
  })
  .partial()
