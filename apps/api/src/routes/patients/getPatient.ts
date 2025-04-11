import { patientService } from '../../services/patientService.ts'
import type { PatientsRouter } from './index.ts'

export const getPatient: PatientsRouter['getPatient'] = async ({
  request,
  params: { patientId },
}) => {
  const db = request.requestContext.get('db')
  const patient = await patientService.getPatient(db, patientId)

  if (!patient) {
    return {
      status: 404,
      body: {
        error: 'Patient not found',
      },
    }
  }

  return {
    status: 200,
    body: patient,
  }
}
