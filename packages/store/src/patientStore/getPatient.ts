import { contract } from '@repo/ts-rest'
import { ServerInferResponses } from '@ts-rest/core'
import { DbClient } from '../types.ts'

export async function getPatient(
  db: DbClient,
  patientId: string,
): Promise<ServerInferResponses<typeof contract.patients.getPatient>> {
  const patient = await db.patients.findUnique({
    where: { patientId },
  })

  if (!patient)
    return {
      status: 404,
      body: { error: 'Patient not found' },
    }

  return {
    status: 200,
    body: { patient },
  }
}
