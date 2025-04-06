import { DataTableToolbar } from '@/components/shared/DataTableToolbar'
import { TableFilterMultipleSelector } from '@/components/shared/DataTableToolbar/TableFilterMultipleSelector'
import { TableFilterRangeSlider } from '@/components/shared/DataTableToolbar/TableFilterRangeSlider'
import { bloodTypes, type BloodType } from '@/constants'
import type { FilterState } from '@/lib/hooks/useInitialTableState'

export interface Props {
  readonly summary: string | undefined
  readonly filterState: FilterState
}

export function PatientListTableToolbar({ summary, filterState }: Props) {
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
    </DataTableToolbar>
  )
}
