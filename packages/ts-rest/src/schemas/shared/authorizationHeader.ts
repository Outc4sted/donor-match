import { z } from 'zod/v4'

export const authorizationHeader = z
  .object({
    authorization: z.string().optional(),
    cookie: z.string().optional(),
  })
  .refine(
    (headers) =>
      Boolean(headers.authorization) ||
      (headers.cookie !== undefined && headers.cookie.includes('__session=')),
    {
      error:
        'Either an authorization header or a __session cookie must be provided',
    },
  )
