import type { contract } from '@donor-match/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'

const controller: RouterImplementation<typeof contract.patients> = {
  getPatients: async ({ request }) => {
    const db = request.requestContext.get('db')
    const patients = await db.patients.findMany()

    return {
      status: 200,
      body: { patients },
    }
  },
}

export default controller
