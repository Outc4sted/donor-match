import { initContract } from '@ts-rest/core'
import { organRouter } from './contracts/organs.ts'
import { patientRouter } from './contracts/patients.ts'
import type { BloodType } from '@repo/db/prisma/enums'
import { OrganType } from '@repo/db/prisma/enums'

const c = initContract()

export const contract = c.router({
  organs: organRouter,
  patients: patientRouter,
})

export const bloodTypes: Record<BloodType, string> = {
  A_POS: 'A+',
  A_NEG: 'A-',
  B_POS: 'B+',
  B_NEG: 'B-',
  O_POS: 'O+',
  O_NEG: 'O-',
  AB_POS: 'AB+',
  AB_NEG: 'AB-',
}

export const organTypes: Record<OrganType, string> = Object.fromEntries(
  Object.values(OrganType).map((organ) => [
    organ,
    organ.charAt(0).toUpperCase() + organ.slice(1).toLowerCase(),
  ]),
) as Record<OrganType, string>

export * from '@repo/db/prisma/enums'
