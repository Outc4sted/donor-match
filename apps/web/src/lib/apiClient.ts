import { contract } from '@repo/ts-rest'
import type { ClientInferResponseBody } from '@ts-rest/core'
import { initTsrReactQuery } from '@ts-rest/react-query/v5'

export const apiClient = initTsrReactQuery(contract, {
  baseUrl: '',
  baseHeaders: {
    authorization: '',
  },
})

export type GetOrgansResponse = ClientInferResponseBody<
  typeof contract.organs.getOrgans,
  200
>

export type GetPatientsResponse = ClientInferResponseBody<
  typeof contract.patients.getPatients,
  200
>

export type GetPatientResponse = ClientInferResponseBody<
  typeof contract.patients.getPatient,
  200
>

export type CreatePatientResponse = ClientInferResponseBody<
  typeof contract.patients.createPatient,
  200
>
