import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetOrgansQuery } from './columns'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import apiClient from '@/lib/apiClient'
import clientStore from '@/lib/stores/clientStore'
import {
  bloodTypes,
  organTypes,
  type BloodType,
  type OrganType,
} from '@/constants'
import TableToolbar from '@/components/shared/DataTableToolbar'
import TableFilterMultipleSelector from '@/components/shared/DataTableToolbar/TableFilterMultipleSelector'
import TableFilterRangeSlider from '@/components/shared/DataTableToolbar/TableFilterRangeSlider'

function BaseOrgansTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, filterState } = useInitialTableState()

  const { data } = apiClient.organs.getOrgans.useQuery<GetOrgansQuery>(
    {
      queryKey: [
        'organs',
        paginationState.pagination,
        filterState.search,
        filterState.bloodTypes,
        filterState.organs,
        filterState.organWeight,
      ],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
          search: filterState.search,
          bloodType: filterState.bloodTypes,
          organType: filterState.organs,
          organMinWeight: Number(filterState.organWeight[0]) || undefined,
          organMaxWeight: Number(filterState.organWeight[1]) || undefined,
        },
      },
    },
    queryClient,
  )

  return (
    <>
      <TableToolbar
        summary={data?.pagination.summary}
        search={filterState.search}
        setSearch={filterState.setSearch}
      >
        <TableFilterMultipleSelector
          filterName="Blood Type"
          items={bloodTypes}
          currentItems={filterState.bloodTypes}
          onChange={(option) =>
            filterState.setBloodTypes(
              option.map(({ value }) => value as BloodType),
            )
          }
        />

        <TableFilterMultipleSelector
          filterName="Organ Type"
          items={organTypes}
          currentItems={filterState.organs}
          onChange={(option) =>
            filterState.setOrgans(option.map(({ value }) => value as OrganType))
          }
        />

        <TableFilterRangeSlider
          filterName="Organ Size"
          labelSuffix="g"
          currentValues={filterState.organWeight}
          handleFilter={(values) =>
            filterState.setOrganWeight(
              values.map((value) => value?.toString() ?? undefined),
            )
          }
        />
      </TableToolbar>

      <DataTable
        data={data?.organs ?? []}
        columns={columns}
        paginationState={paginationState}
        paginationInfo={data?.pagination}
      />
    </>
  )
}

export default function OrgansTable() {
  return (
    <QueryErrorBoundary>
      <BaseOrgansTable />
    </QueryErrorBoundary>
  )
}
