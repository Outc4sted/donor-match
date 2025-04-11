import { type DbClient, patientStore } from '@repo/store'
import { ServerInferRequest, ServerInferResponseBody } from '@ts-rest/core'
import { contract } from '@repo/ts-rest'

export const patientService = {
  async getPatients(
    db: DbClient,
    query: ServerInferRequest<typeof contract.patients.getPatients>['query'],
  ): Promise<
    ServerInferResponseBody<typeof contract.patients.getPatients, 200>
  > {
    return patientStore.getPatients(db, query)
  },

  async getPatient(
    db: DbClient,
    patientId: string,
  ): Promise<ServerInferResponseBody<
    typeof contract.patients.getPatient,
    200
  > | null> {
    return patientStore.getPatient(db, patientId)
  },
}
