import { initContract } from '@ts-rest/core'
import { organRouter } from './contracts/organs.ts'
import { patientRouter } from './contracts/patients.ts'

const c = initContract()

export const contract = c.router({
  organs: organRouter,
  patients: patientRouter,
})

export * from '@repo/db/prisma/enums'
