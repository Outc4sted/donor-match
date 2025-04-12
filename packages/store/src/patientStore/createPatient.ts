import { contract } from '@repo/ts-rest'
import { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { DbClient } from '../types.ts'
import { Prisma } from '@prisma/client'

export async function createPatient(
  db: DbClient,
  body: ServerInferRequest<typeof contract.patients.createPatient>['body'],
): Promise<ServerInferResponses<typeof contract.patients.createPatient>> {
  try {
    const fakeCoords = { longitude: 111.123, latitude: 12.1234 }
    const patient = await db.patients.create({
      data: { ...body, ...fakeCoords },
    })

    return {
      status: 200,
      body: { patient },
    }
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      return {
        status: 409,
        body: { error: error.message },
      }
    }

    return {
      status: 500,
      body: { error: (error as Error).message },
    }
  }
}
