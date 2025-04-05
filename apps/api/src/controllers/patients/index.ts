import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'
import paginationSummary from '../../lib/paginationSummary.ts'
import { buildWhereFilter } from './buildWhereFilter.ts'
import { buildSortOrder } from './buildSortOrder.ts'

const controller: RouterImplementation<typeof contract.patients> = {
  async getPatients({ request, query }) {
    const db = request.requestContext.get('db')
    const { page = 1, limit, sort, sortDir } = query
    const skip = (page - 1) * (limit ?? 0)
    const where = buildWhereFilter(query)
    const orderBy = buildSortOrder({ sortDir, sort, uniqueColumn: 'patientId' })

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
  },
}

export default controller
