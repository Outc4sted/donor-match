import { z } from 'zod'

export const searchQuery = z
  .object({
    search: z.string().optional(),
  })
  .partial()
