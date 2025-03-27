import { useMemo } from 'react'
import { columns, type GetOrgansResponse } from './columns'
import { DataTable } from '@/components/shared/DataTable'

export function OrganTable({ data }: { readonly data: GetOrgansResponse }) {
  const memoColumns = useMemo(() => columns, [])

  return (
    <DataTable
      data={data}
      columns={memoColumns}
    />
  )
}
