import { contract } from '@repo/ts-rest'
import { buildSortOrder } from './buildSortOrder.ts'
import { buildWhereFilter } from './buildWhereFilter.ts'
import { paginationSummary } from '../../shared/paginationSummary.ts'
import { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { DbClient } from '../../types.ts'

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
