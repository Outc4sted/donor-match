import { z } from 'zod'

export const paginationQuery = z
  .object({
    page: z.preprocess(
      (val) => (val === undefined || val === '' ? undefined : val),
      z.coerce.number().min(1).default(1),
    ),
    limit: z.preprocess(
      (val) => (val === undefined || val === '' ? undefined : val),
      z.coerce.number().min(1).max(100),
    ),
  })
  .partial()
