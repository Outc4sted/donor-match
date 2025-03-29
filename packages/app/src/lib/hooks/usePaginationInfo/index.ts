import { useMemo } from 'react'

export interface Props {
  totalResults?: number
  pagination: {
    pageIndex: number
    pageSize: number
  }
  paginationSummaryName: string
  paginationSummaryNamePlural?: string
}

export interface PaginationInfo {
  total: number
  pages: number
  rangeStart: number
  rangeEnd: number
  summary: string
}

export function usePaginationInfo({
  totalResults = 0,
  pagination,
  paginationSummaryName,
  paginationSummaryNamePlural,
}: Props) {
  const paginationInfo = useMemo(() => {
    const pages = Math.ceil(totalResults / pagination.pageSize)
    const rangeStart = pagination.pageIndex * pagination.pageSize + 1
    const rangeEnd = Math.min(
      pagination.pageIndex * pagination.pageSize + pagination.pageSize,
      totalResults,
    )
    const paginationSummaryObject =
      totalResults > 1
        ? (paginationSummaryNamePlural ?? `${paginationSummaryName}s`)
        : paginationSummaryName

    return {
      total: totalResults,
      pages,
      rangeStart,
      rangeEnd,
      summary: `Showing ${rangeStart}-${rangeEnd} of ${totalResults} ${paginationSummaryObject}`,
    }
  }, [
    totalResults,
    pagination,
    paginationSummaryName,
    paginationSummaryNamePlural,
  ])

  return paginationInfo
}
