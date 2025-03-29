import { queryClient, tsr } from '@/lib/client'
import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetOrgansQuery } from './columns'

function BaseOrgansTable() {
  const client = useStore(queryClient)
  const { data } = tsr.organs.getOrgans.useQuery<GetOrgansQuery>(
    {
      queryKey: ['organs'],
    },
    client,
  )

  return (
    <DataTable
      data={data?.organs ?? []}
      columns={columns}
    />
  )
}

export default function OrgansTable() {
  return (
    <QueryErrorBoundary>
      <BaseOrgansTable />
    </QueryErrorBoundary>
  )
}
