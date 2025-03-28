import { columns, type GetOrgansResponse } from './columns'
import { DataTable } from '@/components/shared/DataTable'

export function OrganTable({ data }: { readonly data: GetOrgansResponse }) {
  return (
    <DataTable
      data={data}
      columns={columns}
    />
  )
}
