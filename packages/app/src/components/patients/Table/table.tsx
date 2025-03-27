import { useMemo } from 'react'
import { columns, type GetPatientsResponse } from './columns'
import { DataTable } from '@/components/shared/DataTable'

export function PatientsTable({
  data,
}: {
  readonly data: GetPatientsResponse
}) {
  const memoColumns = useMemo(() => columns, [])

  return (
    <DataTable
      data={data}
      columns={memoColumns}
    />
  )
}
