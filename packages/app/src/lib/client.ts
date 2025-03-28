import { initClient } from '@ts-rest/core'
import { contract } from '@donor-match/ts-rest'
import { atom } from 'nanostores'
import { QueryClient } from '@tanstack/react-query'

export const astroClient = initClient(contract, {
  baseUrl: import.meta.env.DONOR_MATCH_API,
})

export const reactClient = initClient(contract, {
  baseUrl: '',
  baseHeaders: {
    authorization: '',
  },
})

export const queryClient = atom(new QueryClient())
