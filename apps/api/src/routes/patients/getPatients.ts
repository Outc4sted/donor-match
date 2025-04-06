import paginationSummary from '../../lib/paginationSummary.ts'
import { buildWhereFilter } from './buildWhereFilter.ts'
import { buildSortOrder } from './buildSortOrder.ts'
import type { PatientsRouter } from './index.ts'

export const getPatients: PatientsRouter['getPatients'] = async ({
  request,
  query,
}) => {
  const db = request.requestContext.get('db')
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
    status: 200,
    body: {
      patients,
      pagination: paginationSummary({
        page,
        limit,
        total,
        name: 'patient',
      }),
    },
  }
}
