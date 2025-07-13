import type { enhance } from './prisma/generated/enhance.ts'
import type {
  Prisma,
  PrismaClient,
} from './prisma/generated/prisma-client/client.ts'

export type PrismaTransaction = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>

export type DbClient = ReturnType<typeof enhance> | PrismaTransaction
