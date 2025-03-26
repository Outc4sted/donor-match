import type { ColumnDef } from '@tanstack/react-table'
import type { ClientInferResponseBody } from '@ts-rest/core'
import type { contract } from '@donor-match/ts-rest'
import { format } from 'date-fns'

type OrganColumns = ClientInferResponseBody<
  typeof contract.organs.getOrgans,
  200
>['organs'][0]

export const columns: ColumnDef<OrganColumns>[] = [
  {
    accessorKey: 'createdAt',
    header: 'Created',
    accessorFn: ({ createdAt }) => format(new Date(createdAt), 'P'),
  },
  {
    accessorKey: 'updatedAt',
    header: 'Updated',
    accessorFn: ({ updatedAt }) => format(new Date(updatedAt), 'P'),
  },
  {
    accessorKey: 'organSize',
    header: 'Organ Size (g)',
  },
  {
    accessorKey: 'organType',
    header: 'Organ',
  },
  {
    accessorKey: 'bloodType',
    header: 'Blood Type',
  },
  {
    accessorKey: 'latitude',
    header: 'Latitude',
  },
  {
    accessorKey: 'longitude',
    header: 'Longitude',
  },
  {
    accessorKey: 'donor',
    header: 'Donor',
    accessorFn: ({ donor }) => donor && `${donor.firstName} ${donor.lastName}`,
  },
  {
    accessorKey: 'recipient',
    header: 'Recipient',
    accessorFn: ({ recipient }) =>
      recipient && `${recipient.firstName} ${recipient.lastName}`,
  },
  {
    accessorKey: 'deactivatedAt',
    header: 'Deactivated',
    accessorFn: ({ deactivatedAt }) =>
      deactivatedAt && format(new Date(deactivatedAt), 'P'),
  },
]
