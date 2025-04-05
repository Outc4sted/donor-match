import { BloodType, OrganType, Prisma } from '@prisma/client'

export function buildNameSearchFilter(
  search: string,
): Prisma.organsWhereInput[] {
  return [
    {
      donor: {
        is: {
          firstName: { contains: search, mode: Prisma.QueryMode.insensitive },
        },
      },
    },
    {
      donor: {
        is: {
          lastName: { contains: search, mode: Prisma.QueryMode.insensitive },
        },
      },
    },
    {
      recipient: {
        is: {
          firstName: { contains: search, mode: Prisma.QueryMode.insensitive },
        },
      },
    },
    {
      recipient: {
        is: {
          lastName: { contains: search, mode: Prisma.QueryMode.insensitive },
        },
      },
    },
  ]
}

interface FilterInput {
  bloodType?: (keyof typeof BloodType)[]
  organType?: (keyof typeof OrganType)[]
  organMinWeight?: number
  organMaxWeight?: number
  search?: string
}

export function buildWhereFilter({
  bloodType,
  organType,
  organMinWeight,
  organMaxWeight,
  search,
}: FilterInput): Prisma.organsWhereInput {
  const organSize: Prisma.IntFilter = {
    ...(organMinWeight !== undefined && { gte: organMinWeight }),
    ...(organMaxWeight !== undefined && { lte: organMaxWeight }),
  }

  return {
    ...(bloodType?.length
      ? { bloodType: { in: bloodType as BloodType[] } }
      : {}),
    ...(organType?.length
      ? { organType: { in: organType as OrganType[] } }
      : {}),
    ...(Object.keys(organSize).length ? { organSize } : {}),
    ...(search ? { OR: buildNameSearchFilter(search) } : {}),
  }
}
