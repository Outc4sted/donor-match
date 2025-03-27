import type { contract } from '@donor-match/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'

const controller: RouterImplementation<typeof contract.organs> = {
  getOrgans: async ({ request }) => {
    const db = request.requestContext.get('db')
    const organs = await db.organs.findMany({
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
    })

    return {
      status: 200,
      body: { organs },
    }
  },
}

export default controller
