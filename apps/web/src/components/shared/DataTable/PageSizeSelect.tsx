import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { DataTablePaginationProps } from './Pagination'

const pageSizes = [20, 50, 100]

export default function PageSizeSelect<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium">Rows per page</p>

      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value))
        }}
      >
        <SelectTrigger className="h-8 w-[70px]">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>

        <SelectContent side="top">
          {pageSizes.map((pageSize) => (
            <SelectItem
              key={pageSize}
              value={`${pageSize}`}
            >
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
