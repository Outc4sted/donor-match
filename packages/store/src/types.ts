import type { Prisma } from '@prisma/client'
import type { DefaultArgs } from '@prisma/client/runtime/library'
import type { PrismaClient } from '@zenstackhq/runtime'

export type PrismaTransaction = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>

export type DbClient = PrismaClient | PrismaTransaction

export interface SortInput {
  sortDir?: 'asc' | 'desc'
  sort?: string
}
