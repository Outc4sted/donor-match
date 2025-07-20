import type {
  Prisma,
  PrismaClient,
} from './prisma/generated/prisma-client/client.ts'

export type DbClient = PrismaClient | Prisma.TransactionClient
