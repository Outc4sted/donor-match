import type { DefaultArgs } from './prisma/generated/logical-prisma-client/runtime/library.d.ts'
import type {
  Prisma,
  PrismaClient,
} from './prisma/generated/prisma-client-js/index.ts'

export type PrismaTransaction = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>

export type DbClient = PrismaClient | PrismaTransaction
