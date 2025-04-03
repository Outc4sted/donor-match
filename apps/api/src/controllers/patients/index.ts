import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'
import paginationSummary from '../../lib/paginationSummary.ts'

const controller: RouterImplementation<typeof contract.patients> = {
  async getPatients({ request, query }) {
    const db = request.requestContext.get('db')
    const { page = 1, limit, bloodType } = query
    const skip = (page - 1) * (limit ?? 0)

    const where = {
      ...(bloodType?.length ? { bloodType: { in: bloodType } } : {}),
    }

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
