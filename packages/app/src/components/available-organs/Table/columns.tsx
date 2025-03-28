import type { ColumnDef } from '@tanstack/react-table'
import type { ClientInferResponseBody } from '@ts-rest/core'
import type { contract } from '@donor-match/ts-rest'
import { format } from 'date-fns'

export type GetOrgansQuery = ClientInferResponseBody<
  typeof contract.organs.getOrgans,
  200
>

export type GetOrgansResponse = GetOrgansQuery['organs']

export const columns: ColumnDef<GetOrgansResponse[0]>[] = [
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
    header: 'Organ Size',
    accessorFn: ({ organSize }) => `${organSize} g`,
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
    id: 'location',
    header: 'Location',
    accessorFn: ({ latitude, longitude }) => `${latitude}°, ${longitude}°`,
  },
  {
    id: 'donor',
    header: 'Donor',
    accessorFn: ({ donor }) => `${donor.lastName}, ${donor.firstName}`,
    cell: (info) => {
      const patientName = info.getValue<string | null>()
      const { donor } = info.row.original

      return <a href={`/user/${donor.patientId}`}>{patientName}</a>
    },
  },
  {
    id: 'recipient',
    header: 'Recipient',
    accessorFn: ({ recipient }) =>
      recipient && `${recipient.lastName}, ${recipient.firstName}`,
    cell: (info) => {
      const patientName = info.getValue<string | null>()
      const { recipient } = info.row.original

      return (
        recipient?.patientId && (
          <a href={`/user/${recipient.patientId}`}>{patientName}</a>
        )
      )
    },
  },
  {
    accessorKey: 'deactivatedAt',
    header: 'Deactivated',
    accessorFn: ({ deactivatedAt }) =>
      deactivatedAt && format(new Date(deactivatedAt), 'P'),
  },
]
