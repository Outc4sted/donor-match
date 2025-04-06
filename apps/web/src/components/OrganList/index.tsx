import { useStore } from '@nanostores/react'
import { DataTable } from '@/components/shared/DataTable'
import { QueryErrorBoundary } from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import { apiClient, type GetOrgansQuery } from '@/lib/apiClient'
import { clientStore } from '@/lib/stores/clientStore'
import { OrganListTableToolbar } from './OrganListTableToolbar'
import { columns } from './columns'
import type { organSortableKeys } from '@repo/ts-rest'

function BaseOrgansTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, sortState, filterState } = useInitialTableState()

  const { data } = apiClient.organs.getOrgans.useQuery<GetOrgansQuery>(
    {
      queryKey: [
        'organs',
        paginationState.pagination,
        filterState.search,
        filterState.bloodTypes,
        filterState.organs,
        filterState.organWeight,
        sortState.sorting,
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
          sort: sortState.sorting.length
            ? (sortState.sorting[0]?.id as (typeof organSortableKeys)[number])
            : undefined,
          sortDir:
            typeof sortState.sorting[0]?.desc === 'boolean'
              ? sortState.sorting[0].desc
                ? 'desc'
                : 'asc'
              : undefined,
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
        sortState={sortState}
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
