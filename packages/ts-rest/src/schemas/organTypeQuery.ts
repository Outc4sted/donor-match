import { OrganTypeKeys } from '@repo/db'
import { z } from 'zod'

const OrganTypeEnum = z.enum(OrganTypeKeys)

export const organTypeQuery = z
  .object({
    organType: z
      .union([OrganTypeEnum, z.array(OrganTypeEnum)])
      .transform((val) =>
        val === undefined ? [] : Array.isArray(val) ? val : [val],
      ),
  })
  .partial()
