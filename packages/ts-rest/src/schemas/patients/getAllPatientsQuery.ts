import { z } from 'zod/v4'

import { bloodTypeQuery } from '../bloodTypeQuery.ts'
import { patientAgeQuery } from '../patientAgeQuery.ts'
import { paginationQuery } from '../shared/paginationQuery.ts'
import { searchQuery } from '../shared/searchQuery.ts'
import { createSortQuerySchema } from '../shared/sortQuery.ts'

export const patientScalarSortKeys = [
  'createdAt',
  'updatedAt',
  'deactivatedAt',
  'patientId',
  'latitude',
  'longitude',
  'firstName',
  'lastName',
  'age',
  'ssn',
  'bloodType',
] as const
const patientCompositeSortKeys = ['patient', 'location'] as const

export const patientSortableKeys = [
  ...patientScalarSortKeys,
  ...patientCompositeSortKeys,
] as const

export const getAllPatientsQuery = z
  .object({
    ...paginationQuery.shape,
    ...bloodTypeQuery.shape,
    ...patientAgeQuery.shape,
    ...searchQuery.shape,
    ...createSortQuerySchema(patientSortableKeys).shape,
  })
  .optional()
