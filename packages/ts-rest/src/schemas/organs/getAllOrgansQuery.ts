import { bloodTypeQuery } from '../bloodTypeQuery.ts'
import { organTypeQuery } from '../organTypeQuery.ts'
import { organWeightQuery } from '../organWeightQuery.ts'
import { paginationQuery } from '../shared/paginationQuery.ts'
import { searchQuery } from '../shared/searchQuery.ts'
import { createSortQuerySchema } from '../shared/sortQuery.ts'
import { z } from 'zod/v4'

const organScalarSortKeys = [
  'createdAt',
  'updatedAt',
  'deactivatedAt',
  'latitude',
  'longitude',
  'organType',
  'bloodType',
  'organSize',
] as const
const organCompositeSortKeys = ['donor', 'recipient', 'location'] as const

export const organSortableKeys = [
  ...organScalarSortKeys,
  ...organCompositeSortKeys,
] as const

export const getAllOrgansQuery = z
  .object({
    ...paginationQuery.shape,
    ...bloodTypeQuery.shape,
    ...organTypeQuery.shape,
    ...organWeightQuery.shape,
    ...searchQuery.shape,
    ...createSortQuerySchema(organSortableKeys).shape,
  })
  .optional()
