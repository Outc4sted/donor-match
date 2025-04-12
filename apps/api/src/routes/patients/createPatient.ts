import { patientService } from '../../services/patientService.ts'
import type { PatientsRouter } from './index.ts'

export const createPatient: PatientsRouter['createPatient'] = async ({
  request,
  body,
}) => {
  const db = request.requestContext.get('db')
  const response = await patientService.createPatient(db, body)

  return response
}
