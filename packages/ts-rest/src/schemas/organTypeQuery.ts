import { z } from 'zod'

const OrganTypeEnum = z.enum([
  'KIDNEY',
  'LIVER',
  'LUNG',
  'HEART',
  'PANCREAS',
  'INTESTINES',
])

export const organTypeQuery = z
  .object({
    organTypes: z
      .union([OrganTypeEnum, z.array(OrganTypeEnum)])
      .optional()
      .transform((val) =>
        val === undefined ? [] : Array.isArray(val) ? val : [val],
      ),
  })
  .partial()
