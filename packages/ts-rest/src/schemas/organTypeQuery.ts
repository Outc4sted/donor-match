import { OrganType } from '@repo/db/prisma/enums'
import { z } from 'zod'

const OrganTypeEnum = z.nativeEnum(OrganType)

export const organTypeQuery = z
  .object({
    organType: z
      .union([OrganTypeEnum, z.array(OrganTypeEnum)])
      .transform((val) =>
        val === undefined ? [] : Array.isArray(val) ? val : [val],
      ),
  })
  .partial()
