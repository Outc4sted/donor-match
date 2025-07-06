import { z } from 'zod/v4'

export const organWeightQuery = z
  .object({
    organMinWeight: z.coerce.number(),
    organMaxWeight: z.coerce.number(),
  })
  .partial()
