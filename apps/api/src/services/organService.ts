import type { contract } from '@repo/ts-rest'
import type { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'

import { type DbClient } from '@repo/db/types'
import { getOrgans } from '@repo/store/organStore'

export const organService = {
  async getOrgans(
    db: DbClient,
    query: ServerInferRequest<typeof contract.organs.getOrgans>['query'],
  ): Promise<ServerInferResponses<typeof contract.organs.getOrgans>> {
    return getOrgans(db, query)
  },
}
