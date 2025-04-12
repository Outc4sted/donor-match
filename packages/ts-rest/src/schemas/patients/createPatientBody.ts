import { BloodTypeKeys } from '@repo/db'
import { z } from 'zod'

export const createPatientBody = z.object({
  firstName: z.string().min(1, { message: 'First name cannot be empty' }),
  lastName: z.string().min(1, { message: 'Last name cannot be empty' }),
  age: z.coerce
    .number({
      invalid_type_error: 'Age must be a number',
    })
    .min(18, {
      message: 'Patient must be at least 18 to become an organ donor',
    }),
  bloodType: z.enum(BloodTypeKeys, {
    required_error: 'Blood type is required',
  }),
  ssn: z.string().regex(/^(?!000|666|9\d{2})\d{3}-\d{2}-\d{4}$/, {
    message: 'SSN must be in valid format (e.g. 123-45-6789)',
  }),
})
