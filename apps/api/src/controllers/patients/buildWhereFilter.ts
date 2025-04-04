import { BloodType, Prisma } from '@prisma/client'

export function buildNameSearchFilter(
  search: string,
): Prisma.patientsWhereInput[] {
  return [
    {
      firstName: {
        contains: search,
        mode: Prisma.QueryMode.insensitive,
      },
    },
    {
      lastName: {
        contains: search,
        mode: Prisma.QueryMode.insensitive,
      },
    },
    {
      ssn: {
        contains: search,
        mode: Prisma.QueryMode.insensitive,
      },
    },
  ]
}

interface FilterInput {
  bloodType?: (keyof typeof BloodType)[]
  minAge?: number
  maxAge?: number
  search?: string
}

export function buildWhereFilter({
  bloodType,
  minAge,
  maxAge,
  search,
}: FilterInput): Prisma.patientsWhereInput {
  const age: Prisma.IntFilter = {
    ...(minAge !== undefined && { gte: minAge }),
    ...(maxAge !== undefined && { lte: maxAge }),
  }

  return {
    ...(bloodType?.length
      ? { bloodType: { in: bloodType as BloodType[] } }
      : {}),
    ...(Object.keys(age).length ? { age } : {}),
    ...(search ? { OR: buildNameSearchFilter(search) } : {}),
  }
}
