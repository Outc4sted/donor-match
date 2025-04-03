import { z } from 'zod'

const schema = z
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

export const paginationQuery = schema.transform((data) => ({
  page: data.page ?? 1,
  limit: data.limit ?? undefined,
}))
