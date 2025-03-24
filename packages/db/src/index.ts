import { PrismaClient, patients, organs, waitlist } from '@prisma/client'
import { BloodTypeKeys, OrganTypeKeys } from './constants'

export { patients, organs, waitlist, BloodTypeKeys, OrganTypeKeys }
export default new PrismaClient()
