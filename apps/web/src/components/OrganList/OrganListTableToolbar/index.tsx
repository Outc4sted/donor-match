import { DataTableToolbar } from '@/components/shared/DataTableToolbar'
import { TableFilterMultipleSelector } from '@/components/shared/DataTableToolbar/TableFilterMultipleSelector'
import { TableFilterRangeSlider } from '@/components/shared/DataTableToolbar/TableFilterRangeSlider'
import {
  bloodTypes,
  type BloodType,
  organTypes,
  type OrganType,
} from '@/constants'
import type { FilterState } from '@/lib/hooks/useInitialTableState'

export interface Props {
  readonly summary: string | undefined
  readonly filterState: FilterState
}

export function OrganListTableToolbar({ summary, filterState }: Props) {
  return (
    <DataTableToolbar
      summary={summary}
      search={filterState.search}
      setSearch={filterState.setSearch}
      resetFilters={filterState.resetAllFilters}
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
    </DataTableToolbar>
  )
}
