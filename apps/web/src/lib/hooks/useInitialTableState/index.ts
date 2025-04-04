import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react'
import { useQueryParams } from '../useQueryParams'
import type { BloodType, OrganType } from '@/constants'

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
    })
  }, [
    pagination,
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
