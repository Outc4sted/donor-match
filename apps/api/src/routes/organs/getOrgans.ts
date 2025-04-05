import paginationSummary from '../../lib/paginationSummary.ts'
import { buildWhereFilter } from './buildWhereFilter.ts'
import { buildSortOrder } from './buildSortOrder.ts'
import { OrgansRouter } from './index.ts'

export const getOrgans: OrgansRouter['getOrgans'] = async ({
  request,
  query,
}) => {
  const db = request.requestContext.get('db')
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
