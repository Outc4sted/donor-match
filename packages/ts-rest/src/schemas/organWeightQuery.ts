import { z } from 'zod'

export const organWeightQuery = z
  .object({
    organMinWeight: z.coerce.number(),
    organMaxWeight: z.coerce.number(),
  })
  .partial()
