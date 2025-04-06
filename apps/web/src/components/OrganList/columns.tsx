import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { bloodTypes, organTypes } from '@/constants'
import type { GetOrgansQuery } from '@/lib/apiClient'

export const columns: ColumnDef<GetOrgansQuery['organs'][0]>[] = [
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
    accessorFn: ({ organType }) => organTypes[organType],
  },
  {
    accessorKey: 'bloodType',
    header: 'Blood Type',
    accessorFn: ({ bloodType }) => bloodTypes[bloodType],
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
    cell(info) {
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
    cell(info) {
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
