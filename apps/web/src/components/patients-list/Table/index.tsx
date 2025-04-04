import { useStore } from '@nanostores/react'
import { DataTable } from '@/components/shared/DataTable'
import { QueryErrorBoundary } from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetPatientsQuery } from './columns'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import { apiClient } from '@/lib/apiClient'
import { clientStore } from '@/lib/stores/clientStore'
import { PatientListTableToolbar } from './PatientListTableToolbar'

function BasePatientsTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, filterState } = useInitialTableState()

  const { data } = apiClient.patients.getPatients.useQuery<GetPatientsQuery>(
    {
      queryKey: [
        'patients',
        paginationState.pagination,
        filterState.search,
        filterState.bloodTypes,
        filterState.patientAge,
      ],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
          search: filterState.search,
          bloodType: filterState.bloodTypes,
          minAge: Number(filterState.patientAge[0]) || undefined,
          maxAge: Number(filterState.patientAge[1]) || undefined,
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
