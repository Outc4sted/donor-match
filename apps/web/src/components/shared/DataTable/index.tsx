import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Pagination from './Pagination'
import type { PaginationState } from '@/lib/hooks/useInitialTableState'

export interface Props<TData, TValue> {
  readonly columns: ColumnDef<TData, TValue>[]
  readonly data: TData[]
  readonly paginationState: PaginationState
  readonly paginationInfo?: {
    total: number
    pages: number
    summary: string
  }
}

export default function DataTable<TData, TValue>({
  columns,
  data,
  paginationState,
  paginationInfo,
}: Props<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    state: { pagination: paginationState.pagination },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: paginationState.setPagination,
    manualPagination: true,
    rowCount: paginationInfo?.total,
    pageCount: paginationInfo?.pages,
  })

  return (
    <div>
      <div className="rounded-md border">
        {paginationInfo && paginationInfo.total > 0 ? (
          <p className="mb-1 font-bold">{paginationInfo.summary}</p>
        ) : null}

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {paginationInfo?.pages ? <Pagination table={table} /> : null}
    </div>
  )
}
