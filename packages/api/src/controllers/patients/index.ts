import type { contract } from '@donor-match/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'

const controller: RouterImplementation<typeof contract.patients> = {
  getPatients: async ({ request, query }) => {
    const db = request.requestContext.get('db')
    const { page, limit } = query
    const skip = (page - 1) * limit || 0

    const [patients, total] = await Promise.all([
      db.patients.findMany({
        take: limit,
        skip,
        //
        // orderBy: { createdAt: 'desc' },
      }),
      db.patients.count(),
    ])

    return {
      status: 200,
      body: { patients, total },
    }
  },
}

export default controller
