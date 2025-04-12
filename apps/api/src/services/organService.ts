import { type DbClient, organStore } from '@repo/store'
import { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { contract } from '@repo/ts-rest'

export const organService = {
  async getOrgans(
    db: DbClient,
    query: ServerInferRequest<typeof contract.organs.getOrgans>['query'],
  ): Promise<ServerInferResponses<typeof contract.organs.getOrgans>> {
    return organStore.getOrgans(db, query)
  },
}
