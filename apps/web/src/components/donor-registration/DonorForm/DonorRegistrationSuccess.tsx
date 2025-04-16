import { Button } from '@/components/ui/button'
import { bloodTypes } from '@/constants'
import type { CreatePatientResponse } from '@/lib/apiClient'
import { format } from 'date-fns'
import {
  Droplets,
  HeartHandshake,
  House,
  MapPin,
  UserRound,
} from 'lucide-react'

export interface Props {
  readonly patient: CreatePatientResponse['patient']
}

export function DonorRegistrationSuccess({ patient }: Props) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-8">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-neutral-200">
          <HeartHandshake
            size={60}
            className="text-red-400"
          />
        </div>
      </div>

      <h1 className="mb-4 text-3xl text-neutral-900">
        Registration Successful!
      </h1>

      <p className="mb-8 text-neutral-600">
        Thank you for registering as a donor. Your commitment to saving lives is
        deeply appreciated.
      </p>

      <div
        id="donor-card"
        className="mb-8 rounded-lg bg-white p-6 text-left shadow-lg"
      >
        <div className="mb-4 flex items-center">
          <UserRound className="mr-4 size-16 rounded-full" />

          <div>
            <h2 className="text-xl text-neutral-900">
              Donor: {patient.firstName} {patient.lastName}
            </h2>

            <p className="text-neutral-600">
              Registration Date: {format(patient.createdAt, 'P')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-neutral-700">
          <div className="flex items-center">
            <Droplets className="mr-2" />
            <span>Blood Type: {bloodTypes[patient.bloodType]}</span>
          </div>

          <div className="flex items-center">
            <MapPin className="mr-2" />
            <span>
              {patient.latitude}°, {patient.longitude}°
            </span>
          </div>
        </div>
      </div>

      <div
        id="action-buttons"
        className="flex flex-col justify-center gap-4 sm:flex-row"
      >
        <Button className="flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-neutral-700 hover:bg-neutral-50">
          <House />
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  )
}
