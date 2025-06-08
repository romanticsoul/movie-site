import { cache } from "react"
import { prisma } from "@/shared/lib/prisma"

export const getAllMedia = cache(async () => {
  const media = await prisma.media.findMany()
  return media
})
