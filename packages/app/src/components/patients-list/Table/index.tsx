import { queryClient, tsr } from '@/lib/client'
import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetPatientsQuery } from './columns'

function BasePatientsTable() {
  const client = useStore(queryClient)
  const { data } = tsr.patients.getPatients.useQuery<GetPatientsQuery>(
    {
      queryKey: ['patients'],
    },
    client,
  )

  return (
    <DataTable
      data={data?.patients ?? []}
      columns={columns}
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
