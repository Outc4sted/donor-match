import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetPatientsQuery } from './columns'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import apiClient from '@/lib/apiClient'
import clientStore from '@/lib/stores/clientStore'
import TableToolbar from '@/components/shared/DataTable/TableToolbar'

function BasePatientsTable() {
  const queryClient = useStore(clientStore)
  const { paginationState } = useInitialTableState()

  const { data } = apiClient.patients.getPatients.useQuery<GetPatientsQuery>(
    {
      queryKey: ['patients', paginationState.pagination],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
        },
      },
    },
    queryClient,
  )

  return (
    <>
      <TableToolbar summary={data?.pagination.summary} />
      <DataTable
        data={data?.patients ?? []}
        columns={columns}
        paginationState={paginationState}
        paginationInfo={data?.pagination}
      />
    </>
  )
}

export default function PatientsTable() {
  return (
    <QueryErrorBoundary>
      <BasePatientsTable />
    </QueryErrorBoundary>
  )
}
