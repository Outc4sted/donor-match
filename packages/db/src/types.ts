import type { DefaultArgs } from '@prisma/client/runtime/library'
import type {
  Prisma,
  PrismaClient,
} from './prisma/generated/prisma-client/client.ts'

export type PrismaTransaction = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>

export type DbClient = PrismaClient | PrismaTransaction
