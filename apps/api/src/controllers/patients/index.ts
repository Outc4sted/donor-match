import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'
import paginationSummary from '../../lib/paginationSummary.ts'

const controller: RouterImplementation<typeof contract.patients> = {
  async getPatients({ request, query }) {
    const db = request.requestContext.get('db')
    const { page, limit } = query
    const skip = (page - 1) * (limit ?? 0)

    const [patients, total] = await Promise.all([
      db.patients.findMany({
        ...(limit === undefined ? {} : { take: limit }),
        skip,
        //
        // orderBy: { createdAt: 'desc' },
      }),
      db.patients.count(),
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
