import { useEffect, useState, type ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { DualRangeSlider } from '@/components/ui/dual-range-slider'

export interface Props extends ComponentProps<typeof DualRangeSlider> {
  readonly filterName: string
  readonly labelSuffix?: string
  readonly currentValues: (string | undefined)[]
  readonly handleFilter: (values: (number | undefined)[]) => void
}

export default function TableFilterRangeSlider({
  filterName,
  labelSuffix,
  handleFilter,
  currentValues,
  min = 100,
  max = 5000,
  step = 1,
}: Props) {
  const [values, setValues] = useState([
    Number(currentValues[0]) || min,
    Number(currentValues[1]) || max,
  ])

  useEffect(() => {
    setValues([
      Number(currentValues[0]) || min,
      Number(currentValues[1]) || max,
    ])
  }, [currentValues, min, max])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{filterName}</Button>
      </PopoverTrigger>

      <PopoverContent className="w-96">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span>
              {values[0]} {labelSuffix}
            </span>
            <span>
              {values[1]} {labelSuffix}
            </span>
          </div>

          <DualRangeSlider
            value={values}
            onValueChange={setValues}
            min={min}
            max={max}
            step={step}
          />
        </div>

        <div className="mt-4 flex gap-2">
          <Button onClick={() => handleFilter(values)}>Filter</Button>
          <Button
            variant="outline"
            onClick={() => {
              setValues([min, max])
              handleFilter([undefined, undefined])
            }}
          >
            Clear
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
