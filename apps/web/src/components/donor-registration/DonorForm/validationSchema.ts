import { BloodType } from '@repo/ts-rest'
import { z } from 'zod/v4'

export const validationSchema = z.object({
  firstName: z.string().min(1, { error: 'Must provide your first name' }),
  lastName: z.string().min(1, { error: 'Must provide your last name' }),
  age: z.coerce
    .number({
      error: 'Must provide your age',
    })
    .min(18, {
      error: 'Must be at least 18 to become an organ donor',
    }),
  bloodType: z.enum(BloodType, { error: 'Must specify your Blood type' }),
  ssn: z.string().regex(/^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/, {
    error: 'SSN must be in valid format (e.g. 123-45-6789)',
  }),
})
