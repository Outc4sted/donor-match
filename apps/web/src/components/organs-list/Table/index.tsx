import { useStore } from '@nanostores/react'
import DataTable from '@/components/shared/DataTable'
import TableFilter from '@/components/shared/DataTable/TableFilter'
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
          organType: filterState.organs,
        },
      },
    },
    queryClient,
  )

  return (
    <>
      <TableFilter
        filterName="Blood Type"
        items={bloodTypes}
        currentItems={filterState.bloodTypes}
        onChange={(option) =>
          filterState.setBloodTypes(
            option.map(({ value }) => value as BloodType),
          )
        }
      />
      <TableFilter
        filterName="Organ Type"
        items={organTypes}
        currentItems={filterState.organs}
        onChange={(option) =>
          filterState.setOrgans(option.map(({ value }) => value as OrganType))
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
