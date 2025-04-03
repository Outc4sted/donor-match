import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import QueryErrorBoundary from '@/components/shared/ErrorBoundaries/QueryErrorBoundary'
import { columns, type GetOrgansQuery } from './columns'
import { useInitialTableState } from '@/lib/hooks/useInitialTableState'
import apiClient from '@/lib/apiClient'
import clientStore from '@/lib/stores/clientStore'
import MultipleSelector from '@/components/ui/multiple-selector'
import { bloodTypeMultiSelectOptions, type BloodType } from '@/constants'

function BaseOrgansTable() {
  const queryClient = useStore(clientStore)
  const { paginationState, filterState } = useInitialTableState()

  const { data } = apiClient.organs.getOrgans.useQuery<GetOrgansQuery>(
    {
      queryKey: [
        'organs',
        paginationState.pagination,
        filterState.bloodTypes,
        filterState.organs,
      ],
      queryData: {
        query: {
          page: paginationState.pagination.pageIndex + 1,
          limit: paginationState.pagination.pageSize,
          bloodType: filterState.bloodTypes,
          //
          // organTypes: filterState.organs,
        },
      },
    },
    queryClient,
  )

  return (
    <>
      <MultipleSelector
        placeholder="Filter by blood type"
        defaultOptions={bloodTypeMultiSelectOptions}
        onChange={(option) =>
          filterState.setBloodTypes(
            option.map(({ value }) => value as BloodType),
          )
        }
      />
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
