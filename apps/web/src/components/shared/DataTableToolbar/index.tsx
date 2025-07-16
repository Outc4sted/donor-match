import { useEffect, useState } from 'react'

import type { Dispatch, ReactNode, SetStateAction } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export interface Props {
  readonly summary?: string | undefined
  readonly children?: ReactNode | undefined
  readonly search?: string | undefined
  readonly setSearch?: Dispatch<SetStateAction<string | undefined>>
  readonly resetFilters?: () => void
}

export function DataTableToolbar({
  summary,
  search,
  setSearch,
  resetFilters,
  children,
}: Props) {
  const [inputValue, setInputValue] = useState(search ?? '')
  const handleSearch = () => {
    if (setSearch) setSearch(inputValue.trim() || undefined)
  }

  useEffect(() => {
    setInputValue(search ?? '')
  }, [search])

  return (
    <div className="flex items-center gap-4 py-1">
      {summary ? <p className="mr-4 font-bold">{summary}</p> : null}

      {children ? (
        <div className="flex grow items-center gap-2">
          {children}
          {resetFilters ? (
            <Button onClick={resetFilters}>Reset Filters</Button>
          ) : null}
        </div>
      ) : null}

      {setSearch ? (
        <div className="flex w-full max-w-sm min-w-sm">
          <Input
            className="max-w-md rounded-r-none"
            type="text"
            value={inputValue}
            onChange={({ target }) => {
              setInputValue(target.value)
            }}
            onKeyDown={({ key }) => {
              if (key === 'Enter') {
                handleSearch()
              }
            }}
          />

          <Button
            className="rounded-l-none"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      ) : null}
    </div>
  )
}
