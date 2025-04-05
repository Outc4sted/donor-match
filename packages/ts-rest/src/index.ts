import { initContract } from '@ts-rest/core'
import organsContract from './contracts/organs.ts'
import patientsContract from './contracts/patients.ts'

const c = initContract()

export const contract = c.router({
  organs: organsContract,
  patients: patientsContract,
})

export { sortableKeys as organsSortableKeys } from './contracts/organs.ts'
