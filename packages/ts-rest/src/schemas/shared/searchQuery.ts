import { z } from 'zod/v4'

export const searchQuery = z
  .object({
    search: z.string(),
  })
  .partial()
