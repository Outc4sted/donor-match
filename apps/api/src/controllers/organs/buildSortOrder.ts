import type { Prisma } from '@prisma/client'

interface SortInput {
  sortDir?: 'asc' | 'desc'
  sort?: string
}

export function buildSortOrder({ sortDir, sort }: SortInput) {
  const isValidSortDir = sortDir === 'asc' || sortDir === 'desc'
  const orderBy: Prisma.organsOrderByWithRelationInput[] = []

  const compositeSorts: Record<
    string,
    Prisma.organsOrderByWithRelationInput[]
  > = {
    donor: [
      { donor: { lastName: sortDir } },
      { donor: { firstName: sortDir } },
    ],
    recipient: [
      { recipient: { lastName: sortDir } },
      { recipient: { firstName: sortDir } },
    ],
    location: [{ latitude: sortDir }, { longitude: sortDir }],
  }

  if (sort && isValidSortDir) {
    if (compositeSorts[sort]) {
      orderBy.push(...compositeSorts[sort])
    } else orderBy.push({ [sort]: sortDir })
  }

  // Always fall back to primary key sort
  orderBy.push({ organId: 'asc' })

  return orderBy
}
