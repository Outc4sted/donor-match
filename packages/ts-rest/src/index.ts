import { initContract } from '@ts-rest/core'
import { organRouter } from './contracts/organs.ts'
import { patientRouter } from './contracts/patients.ts'

const c = initContract()

export const contract = c.router({
  organs: organRouter,
  patients: patientRouter,
})

export { organSortableKeys } from './contracts/organs.ts'
export { patientSortableKeys } from './contracts/patients.ts'
