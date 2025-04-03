import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import MultipleSelector from '@/components/ui/multiple-selector'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { multiSelectOptions } from '@/lib/utils'

export interface Props extends ComponentProps<typeof MultipleSelector> {
  readonly items: Record<string, string>
  readonly currentItems: string[]
  readonly filterName: string
}

export default function TableFilter({
  filterName,
  items,
  currentItems,
  onChange,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{filterName}</Button>
      </PopoverTrigger>

      <PopoverContent className="w-96">
        <MultipleSelector
          placeholder={`Filter by ${filterName.toLowerCase()}`}
          defaultOptions={multiSelectOptions(items)}
          value={currentItems.map((item) => ({
            value: item,
            label: items[item] ?? '',
          }))}
          onChange={onChange}
        />
      </PopoverContent>
    </Popover>
  )
}
