import { type patients, type organs, type waitlist } from '@prisma/client'
import { BloodTypeKeys, OrganTypeKeys } from './constants/index.ts'

export type { patients, organs, waitlist }
export { BloodTypeKeys, OrganTypeKeys }
