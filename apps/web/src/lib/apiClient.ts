import { contract } from '@repo/ts-rest'
import { initTsrReactQuery } from '@ts-rest/react-query/v5'

export const apiClient = initTsrReactQuery(contract, {
  baseUrl: '',
  baseHeaders: {
    authorization: '',
  },
})
