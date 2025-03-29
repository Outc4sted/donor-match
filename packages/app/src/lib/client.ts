import { contract } from '@donor-match/ts-rest'
import { atom } from 'nanostores'
import { keepPreviousData, QueryClient } from '@tanstack/react-query'
import { initTsrReactQuery } from '@ts-rest/react-query/v5'

export const queryClient = atom(
  new QueryClient({
    defaultOptions: {
      queries: {
        select: (response: unknown): unknown =>
          (response as { body: unknown }).body,
        retry: 0,
        throwOnError: true,
        placeholderData: keepPreviousData,
      },
    },
  }),
)

export const tsr = initTsrReactQuery(contract, {
  baseUrl: '',
  baseHeaders: {
    authorization: '',
  },
})
