import { PrismaClient } from "@prisma/client"
import { extension as paginate } from "prisma-paginate"
import prismaRandom from "prisma-extension-random"

export const prisma = new PrismaClient().$extends(paginate).$extends(prismaRandom())
