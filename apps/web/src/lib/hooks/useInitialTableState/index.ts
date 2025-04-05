import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'
import { useQueryParams } from '../useQueryParams'
import type { BloodType, OrganType } from '@/constants'
import type { SortingState } from '@tanstack/react-table'

export interface PaginationState {
  pagination: { pageIndex: number; pageSize: number }
  setPagination: Dispatch<
    SetStateAction<{
      pageIndex: number
      pageSize: number
    }>
  >
}

export interface SearchState {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export interface SortState {
  sorting: SortingState
  setSorting: Dispatch<SetStateAction<SortingState>>
}

export interface FilterState {
  search: string | undefined
  bloodTypes: BloodType[]
  organs: OrganType[]
  organWeight: (string | undefined)[]
  patientAge: (string | undefined)[]
  setBloodTypes: Dispatch<SetStateAction<BloodType[]>>
  setOrgans: Dispatch<SetStateAction<OrganType[]>>
  setSearch: Dispatch<SetStateAction<string | undefined>>
  setOrganWeight: Dispatch<SetStateAction<(string | undefined)[]>>
  setPatientAge: Dispatch<SetStateAction<(string | undefined)[]>>
  resetAllFilters: () => void
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

  // Sorting
  const sortParam = queryParams.get('sort')
  const sortDirParam = queryParams.get('sortDir')
  const [sorting, setSorting] = useState<SortingState>(
    sortParam
      ? [
          {
            id: sortParam,
            desc: sortDirParam === 'desc',
          },
        ]
      : [],
  )

  // Filters
  const [search, setSearch] = useState(queryParams.get('search') ?? undefined)
  const [bloodTypes, setBloodTypes] = useState<BloodType[]>(
    queryParams.getAll('bloodType') as BloodType[],
  )
  const [organs, setOrgans] = useState<OrganType[]>(
    queryParams.getAll('organ') as OrganType[],
  )
  const [organWeight, setOrganWeight] = useState([
    queryParams.get('organMinWeight') ?? undefined,
    queryParams.get('organMaxWeight') ?? undefined,
  ])
  const [patientAge, setPatientAge] = useState([
    queryParams.get('minAge') ?? undefined,
    queryParams.get('maxAge') ?? undefined,
  ])

  const resetAllFilters = useCallback(() => {
    setSearch(undefined)
    setBloodTypes([])
    setOrgans([])
    setOrganWeight([])
    setPatientAge([])
  }, [])

  useEffect(() => {
    setQueryParams({
      page: `${pagination.pageIndex + 1}`,
      limit: `${pagination.pageSize}`,
      search: search ? search : undefined,
      bloodType: bloodTypes.length > 0 ? bloodTypes : undefined,
      organ: organs.length > 0 ? organs : undefined,
      organMinWeight: organWeight[0],
      organMaxWeight: organWeight[1],
      minAge: patientAge[0],
      maxAge: patientAge[1],
      sort: sorting.length ? sorting[0]?.id : undefined,
      sortDir:
        typeof sorting[0]?.desc === 'boolean'
          ? sorting[0].desc
            ? 'desc'
            : 'asc'
          : undefined,
    })
  }, [
    pagination,
    sorting,
    search,
    bloodTypes,
    organs,
    organWeight,
    patientAge,
    setQueryParams,
  ])

  return {
    queryState: { queryParams, setQueryParams },
    paginationState: { pagination, setPagination },
    sortState: { sorting, setSorting },
    filterState: {
      search,
      bloodTypes,
      organs,
      organWeight,
      patientAge,
      setSearch,
      setBloodTypes,
      setOrgans,
      setOrganWeight,
      setPatientAge,
      resetAllFilters,
    },
  } as const
}
