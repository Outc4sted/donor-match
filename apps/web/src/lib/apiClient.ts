import { contract } from '@repo/ts-rest'
import { initTsrReactQuery } from '@ts-rest/react-query/v5'

export default initTsrReactQuery(contract, {
  baseUrl: '',
  baseHeaders: {
    authorization: '',
  },
})
