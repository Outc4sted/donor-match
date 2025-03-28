import { reactClient, queryClient } from '@/lib/client'
import { useStore } from '@nanostores/react'
import { useQuery } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { DataTable } from '@/components/shared/DataTable'
import { ErrorFallback } from '@/components/shared/ErrorFallback'
import { columns, type GetOrgansQuery } from './columns'

export default function OrgansTable() {
  const client = useStore(queryClient)
  const { data, isError, error } = useQuery<GetOrgansQuery>(
    {
      queryKey: ['organs'],
      queryFn: async () => {
        const result = await reactClient.organs.getOrgans()

        if (result.status !== 200) {
          throw new Error(`Request failed with status ${result.status}`)
        }

        return result.body
      },
    },
    client,
  )

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <DataTable
        data={data?.organs ?? []}
        columns={columns}
        isError={isError}
        error={error}
      />
    </ErrorBoundary>
  )
}
