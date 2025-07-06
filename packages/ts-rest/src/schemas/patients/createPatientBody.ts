import { BloodType } from '@repo/db/prisma/enums'
import { z } from 'zod/v4'

export const createPatientBody = z.object({
  firstName: z.string().min(1, { error: 'First name cannot be empty' }),
  lastName: z.string().min(1, { error: 'Last name cannot be empty' }),
  age: z.coerce
    .number({ error: 'Age must be a number' })
    .min(18, { error: 'Patient must be at least 18 to become an organ donor' }),
  bloodType: z.enum(BloodType, {
    error: 'Blood type is required',
  }),
  ssn: z.string().regex(/^(?!000|666|9\d{2})\d{3}-\d{2}-\d{4}$/, {
    error: 'SSN must be in valid format (e.g. 123-45-6789)',
  }),
})
