import { useStore } from '@nanostores/react'
import { DataTable } from '@/components/shared/DataTable'
import { QueryErrorBoundary } from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetOrgansQuery } from './columns'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import { apiClient } from '@/lib/apiClient'
import { clientStore } from '@/lib/stores/clientStore'
import { OrganListTableToolbar } from './OrganListTableToolbar'

function BaseOrgansTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, filterState } = useInitialTableState()

  const { data } = apiClient.organs.getOrgans.useQuery<GetOrgansQuery>(
    {
      queryKey: [
        'organs',
        paginationState.pagination,
        filterState.search,
        filterState.bloodTypes,
        filterState.organs,
        filterState.organWeight,
      ],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
          search: filterState.search,
          bloodType: filterState.bloodTypes,
          organType: filterState.organs,
          organMinWeight: Number(filterState.organWeight[0]) || undefined,
          organMaxWeight: Number(filterState.organWeight[1]) || undefined,
        },
      },
    },
    queryClient,
  )

  return (
    <>
      <OrganListTableToolbar
        summary={data?.pagination.summary}
        filterState={filterState}
      />
      <DataTable
        data={data?.organs ?? []}
        columns={columns}
        paginationState={paginationState}
        paginationInfo={data?.pagination}
      />
    </>
  )
}

export function OrgansTable() {
  return (
    <QueryErrorBoundary>
      <BaseOrgansTable />
    </QueryErrorBoundary>
  )
}
