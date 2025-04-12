import { getPatients } from './getPatients/index.ts'
import { getPatient } from './getPatient.ts'
import { createPatient } from './createPatient.ts'

export const patientStore = {
  getPatients,
  getPatient,
  createPatient,
}
