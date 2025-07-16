import type { contract } from '@repo/ts-rest'
import type { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'

import { type DbClient } from '@repo/db/types'
import {
  createPatient,
  getPatient,
  getPatients,
} from '@repo/store/patientStore'

export const patientService = {
  async getPatients(
    db: DbClient,
    query: ServerInferRequest<typeof contract.patients.getPatients>['query'],
  ): Promise<ServerInferResponses<typeof contract.patients.getPatients>> {
    return getPatients(db, query)
  },

  async getPatient(
    db: DbClient,
    patientId: string,
  ): Promise<ServerInferResponses<typeof contract.patients.getPatient>> {
    return getPatient(db, patientId)
  },

  async createPatient(
    db: DbClient,
    body: ServerInferRequest<typeof contract.patients.createPatient>['body'],
  ): Promise<ServerInferResponses<typeof contract.patients.createPatient>> {
    return createPatient(db, body)
  },
}
