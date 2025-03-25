import { initClient } from '@ts-rest/core'
import { contract } from '@donor-match/ts-rest'

export const client = initClient(contract, {
  baseUrl: import.meta.env.DONOR_MATCH_API,
})
