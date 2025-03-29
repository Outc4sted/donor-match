import { queryClient, tsr } from '@/lib/client'
import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetOrgansQuery } from './columns'
import { usePaginationInfo } from '@/lib/hooks/usePaginationInfo'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'

function BaseOrgansTable() {
  const client = useStore(queryClient)
  const [paginationState] = useInitialTableState()

  const { data } = tsr.organs.getOrgans.useQuery<GetOrgansQuery>(
    {
      queryKey: ['organs', paginationState.pagination],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
        },
      },
    },
    client,
  )

  const paginationInfo = usePaginationInfo({
    totalResults: data?.total,
    pagination: paginationState.pagination,
    paginationSummaryName: 'organ',
  })

  return (
    <DataTable
      data={data?.organs ?? []}
      columns={columns}
      paginationState={paginationState}
      paginationInfo={paginationInfo}
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
