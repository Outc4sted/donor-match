import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'
import paginationSummary from '../../lib/paginationSummary.ts'

const controller: RouterImplementation<typeof contract.organs> = {
  async getOrgans({ request, query }) {
    const db = request.requestContext.get('db')
    console.log('🚀 ~ getOrgans ~ query:', query)
    const { page, limit, bloodType } = query
    const skip = (page - 1) * (limit ?? 0)
    console.log('🚀 ~ getOrgans ~ bloodTypes:', bloodType)

    const [organs, total] = await Promise.all([
      db.organs.findMany({
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
      }),
      db.patients.count(),
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
  },
}

export default controller
