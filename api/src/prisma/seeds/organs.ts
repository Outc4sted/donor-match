import { PrismaClient, patients } from '@prisma/client'
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
  donor_id: donorId,
  recipient_id: recipientId ?? null,
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  organ_type: faker.helpers.arrayElement(OrganTypeKeys),
  blood_type: faker.helpers.arrayElement(BloodTypeKeys),
  organ_size: faker.number.int({ min: 50, max: 5000 }),
})

export default async (prisma: PrismaClient, patients: patients[]) => {
  const donors = faker.helpers.shuffle(patients)
  const recipients = faker.helpers.shuffle(patients)

  const generatedOrgans = Array.from({ length: MAX_ORGANS }).map((_, i) => {
    const donor = donors[i % donors.length]
    const recipient =
      Math.random() < 0.7 ? recipients[i % recipients.length] : undefined // ~30% of organs unclaimed

    return generateOrgan({
      donorId: donor.patient_id,
      recipientId: recipient?.patient_id,
    })
  })

  const seededOrgans = await prisma.organs.createManyAndReturn({
    data: generatedOrgans,
  })

  console.log(`${seededOrgans.length} organs successfully created!`)
  return seededOrgans
}
