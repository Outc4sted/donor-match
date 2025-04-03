import { PrismaClient } from '@prisma/client'
import seedPatients from './patients.ts'
import seedOrgans from './organs.ts'
import seedWaitList from './waitlist.ts'

const prisma = new PrismaClient()

;(async () => {
  // Clean up
  await prisma.waitlist.deleteMany()
  await prisma.organs.deleteMany()
  await prisma.patients.deleteMany()

  // Seed
  const patients = await seedPatients(prisma)
  const organs = await seedOrgans(prisma, patients)
  await seedWaitList(prisma, patients, organs)
})()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
