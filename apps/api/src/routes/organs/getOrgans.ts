import type { OrgansRouter } from './index.ts'
import { organService } from '../../services/organService.ts'

export const getOrgans: OrgansRouter['getOrgans'] = async ({
  request,
  query,
}) => {
  const db = request.requestContext.get('db')
  const organs = await organService.getOrgans(db, query)

  return {
    status: 200,
    body: organs,
  }
}
