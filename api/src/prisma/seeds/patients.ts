import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { BloodTypeKeys } from '@/constants'

const MAX_PATIENTS = 300

export const generatePatient = () => ({
  first_name: faker.person.firstName(),
  last_name: faker.person.lastName(),
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  age: faker.number.int({ min: 1, max: 100 }),
  ssn: faker.number
    .int({ min: 100_00_0000, max: 999_99_9999 })
    .toString()
    .replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3'),
  blood_type: faker.helpers.arrayElement(BloodTypeKeys),
})

export default async (prisma: PrismaClient) => {
  const generatedPatients = Array.from(
    { length: MAX_PATIENTS },
    generatePatient,
  )
  const seededPatients = await prisma.patients.createManyAndReturn({
    data: generatedPatients,
  })

  console.log(`${seededPatients.length} patients successfully created!`)
  return seededPatients
}
