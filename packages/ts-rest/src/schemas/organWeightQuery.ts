import { z } from 'zod'

export const organWeightQuery = z
  .object({
    organMinWeight: z.coerce.number().optional(),
    organMaxWeight: z.coerce.number().optional(),
  })
  .partial()
