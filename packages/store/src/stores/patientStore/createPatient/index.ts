import type { DbClient } from '@repo/db/types'
import type { contract } from '@repo/ts-rest'
import type { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'

import {
  PrismaUniqueConstraintError,
  toTypedPrismaError,
} from '@repo/db/prisma/errors'

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
    const typedError = toTypedPrismaError(error)

    if (typedError instanceof PrismaUniqueConstraintError) {
      return {
        status: 409,
        body: { error: typedError.message },
      }
    }

    return {
      status: 500,
      body: { error: (error as Error).message },
    }
  }
}
