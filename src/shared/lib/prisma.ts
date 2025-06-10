import { PrismaClient } from "@prisma/client"
import { extension as paginate } from "prisma-paginate"

export const prisma = new PrismaClient().$extends(paginate)
