import type { contract } from '@repo/ts-rest'
import type { RouterImplementation } from '@ts-rest/fastify'
import { getOrgans } from './getOrgans.ts'

export type OrgansRouter = RouterImplementation<typeof contract.organs>

export const organsRoutes: OrgansRouter = {
  getOrgans,
}
