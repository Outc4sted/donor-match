import type { Prisma } from '@prisma/client'

interface SortInput<T extends keyof Prisma.organsOrderByWithRelationInput> {
  sortDir?: 'asc' | 'desc'
  sort?: string
  uniqueColumn: T
}

export function buildSortOrder<
  T extends keyof Prisma.organsOrderByWithRelationInput,
>({ sortDir, sort, uniqueColumn }: SortInput<T>) {
  const isValidSortDir = sortDir === 'asc' || sortDir === 'desc'
  const orderBy = [
    ...(sort && isValidSortDir ? [{ [sort]: sortDir }] : []),
    { [uniqueColumn]: 'asc' },
  ] satisfies Prisma.organsOrderByWithRelationInput[]

  return orderBy
}
