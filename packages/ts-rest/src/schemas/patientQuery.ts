import { z } from 'zod/v4'

export const bloodTypeQuery = {
  filters: z
    .object({
      patient: z.string(),
    })
    .partial(),
}
