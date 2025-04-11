import { contract } from '@repo/ts-rest'
import { ServerInferResponseBody } from '@ts-rest/core'
import { DbClient } from '../types.ts'

export async function getPatient(
  db: DbClient,
  patientId: string,
): Promise<ServerInferResponseBody<
  typeof contract.patients.getPatient,
  200
> | null> {
  const patient = await db.patients.findUnique({
    where: { patientId },
  })

  return patient ? { patient } : null
}
