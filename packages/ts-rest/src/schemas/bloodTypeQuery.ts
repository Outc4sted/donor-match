import { BloodType } from '@repo/db/prisma/enums'
import { z } from 'zod/v4'

const BloodTypeEnum = z.enum(BloodType)

export const bloodTypeQuery = z
  .object({
    bloodType: z
      .union([BloodTypeEnum, z.array(BloodTypeEnum)])
      .transform((val) => (Array.isArray(val) ? val : [val])),
  })
  .partial()
