import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { useSearchParams } from '../useSearchParams'
import type { BloodType, OrganType } from '@/constants'

export interface SearchState {
  searchParams: URLSearchParams
  setSearchParams: (
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
  const [searchParams, setSearchParams] = useSearchParams()

  // Pagination
  const pageParam = searchParams.get('page')
  const limitParam = searchParams.get('limit')
  const [pagination, setPagination] = useState({
    pageIndex: pageParam ? Number(pageParam) - 1 : 0,
    pageSize: limitParam ? Number(limitParam) : 20,
  })

  // Filters
  const [bloodTypes, setBloodTypes] = useState<BloodType[]>(
    searchParams.getAll('bloodType') as BloodType[],
  )
  const [organs, setOrgans] = useState<OrganType[]>(
    searchParams.getAll('organ') as OrganType[],
  )

  useEffect(() => {
    setSearchParams({
      page: `${pagination.pageIndex + 1}`,
      limit: `${pagination.pageSize}`,
      bloodType: bloodTypes.length > 0 ? bloodTypes : undefined,
      organ: organs.length > 0 ? organs : undefined,
    })
  }, [pagination, bloodTypes, organs, setSearchParams])

  return {
    searchState: { searchParams, setSearchParams },
    paginationState: { pagination, setPagination },
    filterState: { bloodTypes, organs, setBloodTypes, setOrgans },
  } as const
}
