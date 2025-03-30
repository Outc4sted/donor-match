import { z } from 'zod'

export const authorizationSchema = z
  .object({
    authorization: z.string().optional(),
    cookie: z.string().optional(),
  })
  .refine(
    (headers) =>
      Boolean(headers.authorization) ||
      (headers.cookie !== undefined && headers.cookie.includes('__session=')),
    {
      message:
        'Either an authorization header or a __session cookie must be provided',
    },
  )
