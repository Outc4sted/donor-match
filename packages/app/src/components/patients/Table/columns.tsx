import type { ColumnDef } from '@tanstack/react-table'
import type { ClientInferResponseBody } from '@ts-rest/core'
import type { contract } from '@donor-match/ts-rest'
import { format } from 'date-fns'

export type GetPatientsResponse = ClientInferResponseBody<
  typeof contract.patients.getPatients,
  200
>['patients']

export const columns: ColumnDef<GetPatientsResponse[0]>[] = [
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
    cell: (info) => {
      const patientName = info.getValue<string | null>()
      const { patientId } = info.row.original

      return <a href={`/user/${patientId}`}>{patientName}</a>
    },
  },
  {
    accessorKey: 'bloodType',
    header: 'Blood Type',
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
