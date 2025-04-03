import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { useQueryParams } from '../useQueryParams'
import type { BloodType, OrganType } from '@/constants'

export interface SearchState {
  queryParams: URLSearchParams
  setQueryParams: (
    _updates: Record<string, string | string[] | null | undefined>,
  ) => void
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

export interface FilterState {
  blood: string[]
  organ: string[]
  setBloodTypes: Dispatch<SetStateAction<string[]>>
  setOrgans: Dispatch<SetStateAction<string | null>>
}

export function useInitialTableState() {
  const [queryParams, setQueryParams] = useQueryParams()

  // Pagination
  const pageParam = queryParams.get('page')
  const limitParam = queryParams.get('limit')
  const [pagination, setPagination] = useState({
    pageIndex: pageParam ? Number(pageParam) - 1 : 0,
    pageSize: limitParam ? Number(limitParam) : 20,
  })

  // Filters
  const [bloodTypes, setBloodTypes] = useState<BloodType[]>(
    queryParams.getAll('bloodType') as BloodType[],
  )
  const [organs, setOrgans] = useState<OrganType[]>(
    queryParams.getAll('organ') as OrganType[],
  )

  useEffect(() => {
    setQueryParams({
      page: `${pagination.pageIndex + 1}`,
      limit: `${pagination.pageSize}`,
      bloodType: bloodTypes.length > 0 ? bloodTypes : undefined,
      organ: organs.length > 0 ? organs : undefined,
    })
  }, [pagination, bloodTypes, organs, setQueryParams])

  return {
    queryState: { queryParams, setQueryParams },
    paginationState: { pagination, setPagination },
    filterState: { bloodTypes, organs, setBloodTypes, setOrgans },
  } as const
}
