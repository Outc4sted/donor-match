import type { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'
import { bloodTypes } from '@/constants'
import type { GetPatientsQuery } from '@/lib/apiClient'

export const columns: ColumnDef<GetPatientsQuery['patients'][0]>[] = [
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
    id: 'patient',
    header: 'Patient',
    accessorFn: ({ firstName, lastName }) => `${lastName}, ${firstName}`,
    cell(info) {
      const patientName = info.getValue<string | null>()
      const { patientId } = info.row.original

      return <a href={`/user/${patientId}`}>{patientName}</a>
    },
  },
  {
    accessorKey: 'bloodType',
    header: 'Blood Type',
    accessorFn: ({ bloodType }) => bloodTypes[bloodType],
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    id: 'location',
    header: 'Location',
    accessorFn: ({ latitude, longitude }) => `${latitude}°, ${longitude}°`,
  },
  {
    accessorKey: 'deactivatedAt',
    header: 'Deactivated',
    accessorFn: ({ deactivatedAt }) =>
      deactivatedAt && format(new Date(deactivatedAt), 'P'),
  },
]
