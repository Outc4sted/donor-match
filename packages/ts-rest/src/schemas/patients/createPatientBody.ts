import { BloodType } from '@repo/db/prisma/enums'
import { z } from 'zod/v4'

export const createPatientBody = z.object({
  firstName: z.string().min(1, { error: 'First name cannot be empty' }),
  lastName: z.string().min(1, { error: 'Last name cannot be empty' }),
  age: z
    .string()
    .min(1, { error: 'Age is required' })
    .pipe(
      z.transform((value, ctx) => {
        try {
          const age = Number.parseInt(value, 10)

          if (age < 18) {
            ctx.issues.push({
              code: 'custom',
              message: 'Must be at least 18 to become an organ donor',
              input: value,
            })
            return z.NEVER
          }

          return age
        } catch {
          ctx.issues.push({
            code: 'custom',
            message: 'Age must be a number',
            input: value,
          })
          return z.NEVER
        }
      }),
    ),
  bloodType: z.enum(BloodType, {
    error: 'Blood type is required',
  }),
  ssn: z.string().regex(/^(?!000|666|9\d{2})\d{3}-\d{2}-\d{4}$/, {
    error: 'SSN must be in valid format (e.g. 123-45-6789)',
  }),
})
