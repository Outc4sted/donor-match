import { buildWhereFilter } from './buildWhereFilter.ts'
import { buildSortOrder } from './buildSortOrder.ts'
import { contract } from '@repo/ts-rest'
import { ServerInferRequest, ServerInferResponseBody } from '@ts-rest/core'
import { paginationSummary } from '../../shared/paginationSummary.ts'
import { DbClient } from '../../types.ts'

export async function getPatients(
  db: DbClient,
  query: ServerInferRequest<typeof contract.patients.getPatients>['query'] = {},
): Promise<ServerInferResponseBody<typeof contract.patients.getPatients, 200>> {
  const { page = 1, limit } = query
  const skip = (page - 1) * (limit ?? 0)
  const where = buildWhereFilter(query)
  const orderBy = buildSortOrder(query)

  const [patients, total] = await Promise.all([
    db.patients.findMany({
      where,
      ...(limit === undefined ? {} : { take: limit }),
      skip,
      orderBy,
    }),
    db.patients.count({ where }),
  ])

  return {
    patients,
    pagination: paginationSummary({
      page,
      limit,
      total,
      name: 'patient',
    }),
  }
}
