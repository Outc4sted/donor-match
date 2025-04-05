import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type Header,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pagination } from './Pagination'
import type {
  PaginationState,
  SortState,
} from '@/lib/hooks/useInitialTableState'
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from 'lucide-react'

export interface Props<TData, TValue> {
  readonly columns: ColumnDef<TData, TValue>[]
  readonly data: TData[]
  readonly paginationState: PaginationState
  readonly paginationInfo?: {
    total: number
    pages: number
    summary?: string
  }
  readonly sortState: SortState
}

export function DataTable<TData, TValue>({
  columns,
  data,
  paginationState,
  paginationInfo,
  sortState,
}: Props<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: paginationState.pagination,
      sorting: sortState.sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: paginationState.setPagination,
    manualSorting: true,
    onSortingChange: sortState.setSorting,
    rowCount: paginationInfo?.total,
    pageCount: paginationInfo?.pages,
  })

  const toggleSorting = (header: Header<TData, unknown>) => {
    const nextSort = header.column.getNextSortingOrder()

    sortState.setSorting(
      nextSort
        ? [
            {
              id: header.id,
              desc: nextSort === 'desc',
            },
          ]
        : [],
    )

    paginationState.setPagination({
      pageIndex: 0,
      pageSize: paginationState.pagination.pageSize,
    })
  }

  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isSorted = header.column.getIsSorted()

                  return (
                    <TableHead
                      key={header.id}
                      className="cursor-pointer hover:bg-red-100 focus:bg-red-100"
                      tabIndex={0}
                      onClick={() => toggleSorting(header)}
                      onKeyDown={({ key }) => {
                        if (key === 'Enter') {
                          toggleSorting(header)
                        }
                      }}
                    >
                      <div className="flex items-center gap-1">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}

                        <span className="flex size-4 items-center justify-center">
                          {isSorted ? (
                            isSorted === 'asc' ? (
                              <ArrowUpWideNarrow
                                aria-label="sorted ascending"
                                className="size-8 text-red-400"
                              />
                            ) : (
                              <ArrowDownWideNarrow
                                aria-label="sorted descending"
                                className="size-8 text-red-400"
                              />
                            )
                          ) : (
                            <ArrowDownWideNarrow
                              className="size-8 opacity-0"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </div>
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
