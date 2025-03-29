import type { contract } from '@donor-match/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'

const controller: RouterImplementation<typeof contract.organs> = {
  getOrgans: async ({ request, query }) => {
    const db = request.requestContext.get('db')
    const { page, limit } = query
    const skip = (page - 1) * limit || 0

    const [organs, total] = await Promise.all([
      db.organs.findMany({
        take: limit,
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
      body: { organs, total },
    }
  },
}

export default controller
