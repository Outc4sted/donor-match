import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { useSearchParams } from '../useSearchParams'

export interface Props {
  totalResults?: number
  pagination: {
    pageIndex: number
    pageSize: number
  }
  paginationSummaryName: string
  paginationSummaryNamePlural?: string
}

export interface SearchState {
  searchParams: URLSearchParams
  setSearchParams: (updates: Record<string, string | undefined>) => void
}

export interface PaginationState {
  pagination: { pageIndex: number; pageSize: number }
  setPagination: Dispatch<
    SetStateAction<{
      pageIndex: number
      pageSize: number
    }>
  >
}

export function useInitialTableState() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageParam = searchParams.get('page')
  const limitParam = searchParams.get('limit')
  const [pagination, setPagination] = useState({
    pageIndex: pageParam ? Number(pageParam) - 1 : 0,
    pageSize: limitParam ? Number(limitParam) : 20,
  })

  //
  // const sortParam = searchParams.get('sort')
  // const [sorting, setSorting] = useState(
  //   sortParam
  //     ? sortParam.split(',').map((sortItem) => {
  //         const [id, desc] = sortItem.split(':')
  //         return { id, desc: desc === 'desc' }
  //       })
  //     : [],
  // )

  useEffect(() => {
    setSearchParams({
      page: `${pagination.pageIndex + 1}`,
      limit: `${pagination.pageSize}`,
    })
  }, [setSearchParams, pagination])

  return [
    { pagination, setPagination },
    { searchParams, setSearchParams },
    //
    // { sorting, setSorting },
  ] as const
}
