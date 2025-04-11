import { type DbClient, organStore } from '@repo/store'
import { ServerInferRequest, ServerInferResponseBody } from '@ts-rest/core'
import { contract } from '@repo/ts-rest'

export const organService = {
  async getOrgans(
    db: DbClient,
    query: ServerInferRequest<typeof contract.organs.getOrgans>['query'],
  ): Promise<ServerInferResponseBody<typeof contract.organs.getOrgans, 200>> {
    return organStore.getOrgans(db, query)
  },
}
