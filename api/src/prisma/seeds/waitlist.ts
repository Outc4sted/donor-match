import { PrismaClient, patients, organs } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { OrganTypeKeys } from '@/constants'

const MAX_WAITLIST = 70

export const generateWaitlistEntry = (patientId: string) => {
  const organ_type = faker.helpers.arrayElement(OrganTypeKeys)

  const size =
    Math.random() < 0.8 ? faker.number.int({ min: 200, max: 4000 }) : undefined

  return {
    patient_id: patientId,
    organ_type,
    organ_size: size,
    organ_size_threshold: size ? Math.floor(size * 0.8) : undefined,
  }
}

export default async (
  prisma: PrismaClient,
  patients: patients[],
  organs: organs[],
) => {
  const eligiblePatients = patients.filter(
    (p) => !organs.find((o) => o.recipient_id === p.patient_id),
  )

  const generatedWaitList = faker.helpers
    .arrayElements(eligiblePatients, MAX_WAITLIST)
    .map((patient) => generateWaitlistEntry(patient.patient_id))

  const seededWaitList = await prisma.waitlist.createManyAndReturn({
    data: generatedWaitList,
  })

  console.log(`${seededWaitList.length} waitlist entries successfully created!`)
  return seededWaitList
}
