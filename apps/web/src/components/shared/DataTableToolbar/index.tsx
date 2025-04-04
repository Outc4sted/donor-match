import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  useRef,
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
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSearch = () => {
    const searchQuery = inputRef.current?.value.trim()
    setSearch!(searchQuery || undefined)
  }

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
            ref={inputRef}
            className="max-w-md rounded-r-none"
            type="text"
            defaultValue={search}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
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
