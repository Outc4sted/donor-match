import { contract } from '@donor-match/ts-rest'
import { RouterImplementation } from '@ts-rest/fastify'

const controller: RouterImplementation<typeof contract.organs> = {
  getOrgans: async ({ request }) => {
    const db = request.requestContext.get('db')
    const organs = await db.organs.findMany()

    return {
      status: 200,
      body: { organs },
    }
  },
}

export default controller
