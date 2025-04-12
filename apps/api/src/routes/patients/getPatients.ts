import type { PatientsRouter } from './index.ts'
import { patientService } from '../../services/patientService.ts'

export const getPatients: PatientsRouter['getPatients'] = async ({
  request,
  query,
}) => {
  const db = request.requestContext.get('db')
  const response = await patientService.getPatients(db, query)

  return response
}
