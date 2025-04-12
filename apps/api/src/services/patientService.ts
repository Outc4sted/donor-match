import { type DbClient, patientStore } from '@repo/store'
import { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { contract } from '@repo/ts-rest'

export const patientService = {
  async getPatients(
    db: DbClient,
    query: ServerInferRequest<typeof contract.patients.getPatients>['query'],
  ): Promise<ServerInferResponses<typeof contract.patients.getPatients>> {
    return patientStore.getPatients(db, query)
  },

  async getPatient(
    db: DbClient,
    patientId: string,
  ): Promise<ServerInferResponses<typeof contract.patients.getPatient>> {
    return patientStore.getPatient(db, patientId)
  },

  async createPatient(
    db: DbClient,
    body: ServerInferRequest<typeof contract.patients.createPatient>['body'],
  ): Promise<ServerInferResponses<typeof contract.patients.createPatient>> {
    return patientStore.createPatient(db, body)
  },
}
