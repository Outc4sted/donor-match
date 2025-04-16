import { useStore } from '@nanostores/react'
import { DataTable } from '@/components/shared/DataTable'
import { QueryErrorBoundary } from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import { apiClient, type GetPatientsResponse } from '@/lib/apiClient'
import { clientStore } from '@/lib/stores/clientStore'
import { PatientListTableToolbar } from './PatientListTableToolbar'
import { columns } from './columns'
import type { patientSortableKeys } from '@repo/ts-rest'

function BasePatientsTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, sortState, filterState } = useInitialTableState()

  const { data } = apiClient.patients.getPatients.useQuery<GetPatientsResponse>(
    {
      queryKey: [
        'patients',
        paginationState.pagination,
        filterState.search,
        filterState.bloodTypes,
        filterState.patientAge,
        sortState.sorting,
      ],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
          search: filterState.search,
          bloodType: filterState.bloodTypes,
          minAge: Number(filterState.patientAge[0]) || undefined,
          maxAge: Number(filterState.patientAge[1]) || undefined,
          sort: sortState.sorting.length
            ? (sortState.sorting[0]?.id as (typeof patientSortableKeys)[number])
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
      <PatientListTableToolbar
        summary={data?.pagination.summary}
        filterState={filterState}
      />
      <DataTable
        data={data?.patients ?? []}
        columns={columns}
        sortState={sortState}
        paginationState={paginationState}
        paginationInfo={data?.pagination}
      />
    </>
  )
}

export function PatientsTable() {
  return (
    <QueryErrorBoundary>
      <BasePatientsTable />
    </QueryErrorBoundary>
  )
}
