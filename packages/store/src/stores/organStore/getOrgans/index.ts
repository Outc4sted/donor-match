import { contract } from '@repo/ts-rest'
import type { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { paginationSummary } from '@repo/ts-rest/paginationSummary'
import { buildWhereFilter } from './buildWhereFilter.ts'
import type { DbClient } from '@repo/db/types'
import { buildSortOrder } from './buildSortOrder.ts'

export async function getOrgans(
  db: DbClient,
  query: ServerInferRequest<typeof contract.organs.getOrgans>['query'] = {},
): Promise<ServerInferResponses<typeof contract.organs.getOrgans>> {
  const { page = 1, limit } = query
  const skip = (page - 1) * (limit ?? 0)
  const where = buildWhereFilter(query)
  const orderBy = buildSortOrder(query)

  const [organs, total] = await Promise.all([
    db.organs.findMany({
      where,
      ...(limit === undefined ? {} : { take: limit }),
      skip,
      include: {
        donor: {
          select: {
            patientId: true,
            firstName: true,
            lastName: true,
          },
        },
        recipient: {
          select: {
            patientId: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy,
    }),
    db.organs.count({ where }),
  ])

  return {
    status: 200,
    body: {
      organs,
      pagination: paginationSummary({
        page,
        limit,
        total,
        name: 'organ',
      }),
    },
  }
}
