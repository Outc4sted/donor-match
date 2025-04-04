import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetPatientsQuery } from './columns'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import apiClient from '@/lib/apiClient'
import clientStore from '@/lib/stores/clientStore'
import TableToolbar from '@/components/shared/DataTableToolbar'
import TableFilterMultipleSelector from '@/components/shared/DataTableToolbar/TableFilterMultipleSelector'
import { bloodTypes, type BloodType } from '@/constants'
import TableFilterRangeSlider from '@/components/shared/DataTableToolbar/TableFilterRangeSlider'

function BasePatientsTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, filterState } = useInitialTableState()

  const { data } = apiClient.patients.getPatients.useQuery<GetPatientsQuery>(
    {
      queryKey: [
        'patients',
        paginationState.pagination,
        filterState.search,
        filterState.bloodTypes,
        filterState.patientAge,
      ],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
          search: filterState.search,
          bloodType: filterState.bloodTypes,
          minAge: Number(filterState.patientAge[0]) || undefined,
          maxAge: Number(filterState.patientAge[1]) || undefined,
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

        <TableFilterRangeSlider
          filterName="Patient Age"
          labelSuffix="years"
          currentValues={filterState.patientAge}
          min={0}
          max={100}
          handleFilter={(values) =>
            filterState.setPatientAge(
              values.map((value) => value?.toString() ?? undefined),
            )
          }
        />
      </TableToolbar>
      <DataTable
        data={data?.patients ?? []}
        columns={columns}
        paginationState={paginationState}
        paginationInfo={data?.pagination}
      />
    </>
  )
}

export default function PatientsTable() {
  return (
    <QueryErrorBoundary>
      <BasePatientsTable />
    </QueryErrorBoundary>
  )
}
