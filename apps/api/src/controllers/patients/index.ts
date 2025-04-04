import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'
import paginationSummary from '../../lib/paginationSummary.ts'
import { buildWhereFilter } from './buildWhereFilter.ts'

const controller: RouterImplementation<typeof contract.patients> = {
  async getPatients({ request, query }) {
    const db = request.requestContext.get('db')
    const { page = 1, limit, bloodType, minAge, maxAge, search } = query
    const skip = (page - 1) * (limit ?? 0)
    const where = buildWhereFilter({
      bloodType,
      minAge,
      maxAge,
      search,
    })

    const [patients, total] = await Promise.all([
      db.patients.findMany({
        where,
        ...(limit === undefined ? {} : { take: limit }),
        skip,
        orderBy: { patientId: 'desc' },
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
