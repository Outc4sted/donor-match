import { z } from 'zod'

export const bloodTypeQuery = {
  filters: z
    .object({
      patient: z.string(),
    })
    .partial(),
}
