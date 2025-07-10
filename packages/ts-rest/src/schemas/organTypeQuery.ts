import { OrganType } from '@repo/db/prisma/enums'
import { z } from 'zod/v4'

const OrganTypeEnum = z.enum(OrganType)

export const organTypeQuery = z
  .object({
    organType: z
      .union([OrganTypeEnum, z.array(OrganTypeEnum)])
      .transform((val) => (Array.isArray(val) ? val : [val])),
  })
  .partial()
