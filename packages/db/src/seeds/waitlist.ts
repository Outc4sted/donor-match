import type {
  organs,
  patients,
  PrismaClient,
} from '../prisma/generated/prisma-client/client.ts'

import { faker } from '@faker-js/faker'

import { OrganType } from '../prisma/generated/prisma-client/enums.ts'

const MAX_WAITLIST = 70

export const generateWaitlistEntry = (patientId: string) => {
  const organType = faker.helpers.arrayElement(Object.values(OrganType))

  const size =
    Math.random() < 0.8 ? faker.number.int({ min: 200, max: 4000 }) : undefined

  return {
    patientId,
    organType,
    organSize: size,
    organSizeThreshold: size ? Math.floor(size * 0.8) : undefined,
  }
}

export async function seedWaitList(
  prisma: PrismaClient,
  patients: patients[],
  organs: organs[],
) {
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
