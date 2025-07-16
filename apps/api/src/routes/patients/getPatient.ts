import type { PatientsRouter } from './index.ts'

import { patientService } from '../../services/patientService.ts'

export const getPatient: PatientsRouter['getPatient'] = async ({
  request,
  params: { patientId },
}) => {
  const db = request.requestContext.get('db')
  const response = await patientService.getPatient(db, patientId)

  return response
}
