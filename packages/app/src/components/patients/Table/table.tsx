import { columns, type GetPatientsResponse } from './columns'
import { DataTable } from '@/components/shared/DataTable'

export function PatientsTable({
  data,
}: {
  readonly data: GetPatientsResponse
}) {
  return (
    <DataTable
      data={data}
      columns={columns}
    />
  )
}
