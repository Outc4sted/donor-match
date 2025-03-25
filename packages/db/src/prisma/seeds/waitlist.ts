import { PrismaClient, patients, organs } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { OrganTypeKeys } from '@/constants'

const MAX_WAITLIST = 70

export const generateWaitlistEntry = (patientId: string) => {
  const organType = faker.helpers.arrayElement(OrganTypeKeys)

  const size =
    Math.random() < 0.8 ? faker.number.int({ min: 200, max: 4000 }) : undefined

  return {
    patientId,
    organType,
    organSize: size,
    organSizeThreshold: size ? Math.floor(size * 0.8) : undefined,
  }
}

export default async (
  prisma: PrismaClient,
  patients: patients[],
  organs: organs[],
) => {
  const eligiblePatients = patients.filter(
    (p) => !organs.find((o) => o.recipientId === p.patientId),
  )

  const generatedWaitList = faker.helpers
    .arrayElements(eligiblePatients, MAX_WAITLIST)
    .map((patient) => generateWaitlistEntry(patient.patientId))

  const seededWaitList = await prisma.waitlist.createManyAndReturn({
    data: generatedWaitList,
  })

  console.log(`${seededWaitList.length} waitlist entries successfully created!`)
  return seededWaitList
}
