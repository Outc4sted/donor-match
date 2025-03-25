import { initContract } from '@ts-rest/core'
import organsContract from '@/contracts/organs'
import patientsContract from '@/contracts/patients'

const c = initContract()

export const contract = c.router({
  organs: organsContract,
  patients: patientsContract,
})
