import { queryClient, tsr } from '@/lib/client'
import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetPatientsQuery } from './columns'
import { usePaginationInfo } from '@/lib/hooks/usePaginationInfo'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'

function BasePatientsTable() {
  const client = useStore(queryClient)
  const [paginationState] = useInitialTableState()

  const { data } = tsr.patients.getPatients.useQuery<GetPatientsQuery>(
    {
      queryKey: ['patients', paginationState.pagination],
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
    paginationSummaryName: 'patient',
  })

  return (
    <DataTable
      data={data?.patients ?? []}
      columns={columns}
      paginationState={paginationState}
      paginationInfo={paginationInfo}
    />
  )
}

export default function PatientsTable() {
  return (
    <QueryErrorBoundary>
      <BasePatientsTable />
    </QueryErrorBoundary>
  )
}
