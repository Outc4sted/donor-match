import { z } from 'zod/v4'

const sortDirEnum = z.enum(['asc', 'desc'])

export function createSortQuerySchema<T extends string>(
  keys: readonly [T, ...T[]],
) {
  return z
    .object({
      sort: z.enum(keys),
      sortDir: sortDirEnum,
    })
    .partial()
}
