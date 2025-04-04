import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

export interface Props {
  readonly summary?: string
  readonly children?: ReactNode
  readonly search?: string
  readonly setSearch?: Dispatch<SetStateAction<string | undefined>>
  resetFilters?: () => void
}

export default function DataTableToolbar({
  summary,
  search,
  setSearch,
  resetFilters,
  children,
}: Props) {
  const [inputValue, setInputValue] = useState(search ?? '')
  const handleSearch = () => {
    setSearch!(inputValue.trim() || undefined)
  }

  useEffect(() => {
    setInputValue(search ?? '')
  }, [search])

  return (
    <div className="flex items-center gap-4 py-1">
      {summary ? <p className="mr-4 font-bold">{summary}</p> : null}

      {children && (
        <div className="flex grow items-center gap-2">
          {children}
          {resetFilters && (
            <Button onClick={resetFilters}>Reset Filters</Button>
          )}
        </div>
      )}

      {setSearch ? (
        <div className="min-w-sm flex w-full max-w-sm">
          <Input
            className="max-w-md rounded-r-none"
            type="text"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
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
