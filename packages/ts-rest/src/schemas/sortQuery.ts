import { z } from 'zod'

const sortDirEnum = z.enum(['asc', 'desc'])

export function createSortQuerySchema<T extends string>(
  keys: readonly [T, ...T[]],
) {
  return z.object({
    sort: z.enum(keys).optional(),
    sortDir: sortDirEnum.optional(),
  })
}
