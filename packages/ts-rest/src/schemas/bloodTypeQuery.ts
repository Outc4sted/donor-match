import { BloodTypeKeys } from '@repo/db'
import { z } from 'zod'

const BloodTypeEnum = z.enum(BloodTypeKeys)

export const bloodTypeQuery = z
  .object({
    bloodType: z
      .union([BloodTypeEnum, z.array(BloodTypeEnum)])
      .optional()
      .transform((val) =>
        val === undefined ? [] : Array.isArray(val) ? val : [val],
      ),
  })
  .partial()
