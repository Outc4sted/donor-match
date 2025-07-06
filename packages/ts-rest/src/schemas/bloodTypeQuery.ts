import { BloodType } from '@repo/db/prisma/enums'

import { z } from 'zod'

const BloodTypeEnum = z.nativeEnum(BloodType)

export const bloodTypeQuery = z
  .object({
    bloodType: z
      .union([BloodTypeEnum, z.array(BloodTypeEnum)])
      .transform((val) =>
        val === undefined ? [] : Array.isArray(val) ? val : [val],
      ),
  })
  .partial()
