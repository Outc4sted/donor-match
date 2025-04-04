import { QueryClient, keepPreviousData } from '@tanstack/react-query'
import { atom } from 'nanostores'

export const clientStore = atom(
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
