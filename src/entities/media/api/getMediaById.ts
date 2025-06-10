"use server"
import "server-only"
import { cache } from "react"
import { unstable_cache } from "next/cache"
import { prisma } from "@/shared/lib/prisma"
import { MediaFull } from "../model/types"

async function getDataById(id: number): Promise<MediaFull | null> {
  return prisma.media.findUnique({
    where: { id: id },
    include: {
      Genre: true,
      Country: true,
      PersonInMedia: {
        include: {
          Person: true,
        },
      },
    },
  })
}

export const getMediaById = cache(
  unstable_cache(getDataById, [], { revalidate: 2580000 }),
)
