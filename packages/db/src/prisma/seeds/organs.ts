import type { PrismaClient, patients } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { OrganTypeKeys, BloodTypeKeys } from '@/constants'

const MAX_ORGANS = 200

export const generateOrgan = ({
  donorId,
  recipientId,
}: {
  donorId: string
  recipientId?: string
}) => ({
  donorId,
  recipientId: recipientId ?? null,
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  organType: faker.helpers.arrayElement(OrganTypeKeys),
  bloodType: faker.helpers.arrayElement(BloodTypeKeys),
  organSize: faker.number.int({ min: 50, max: 5000 }),
})

export default async (prisma: PrismaClient, patients: patients[]) => {
  const donors = faker.helpers.shuffle(patients)
  const recipients = faker.helpers.shuffle(patients)

  const generatedOrgans = Array.from({ length: MAX_ORGANS }).map((_, i) => {
    const donor = donors[i % donors.length]
    const recipient =
      Math.random() < 0.7 ? recipients[i % recipients.length] : undefined // ~30% of organs unclaimed

    return generateOrgan({
      donorId: donor.patientId,
      recipientId: recipient?.patientId,
    })
  })

  const seededOrgans = await prisma.organs.createManyAndReturn({
    data: generatedOrgans,
  })

  console.log(`${seededOrgans.length} organs successfully created!`)
  return seededOrgans
}
