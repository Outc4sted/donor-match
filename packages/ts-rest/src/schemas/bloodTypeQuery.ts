import { z } from 'zod'

const BloodTypeEnum = z.enum([
  'A_POS',
  'A_NEG',
  'B_POS',
  'B_NEG',
  'O_POS',
  'O_NEG',
  'AB_POS',
  'AB_NEG',
])

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
