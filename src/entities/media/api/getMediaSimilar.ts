"use server"
import "server-only"
import { cache } from "react"
import { unstable_cache } from "next/cache"
import { prisma } from "@/shared/lib/prisma"
import type { MediaFull, MediaCompact } from "../model/types"

type Props = {
  media: MediaFull
  count: number
}

async function getSimilar({ media, count }: Props): Promise<MediaCompact[]> {
  return prisma.media.findManyRandom(count, {
    select: {
      id: true,
      title: true,
      rating_kp: true,
      poster: true,
      year: true,
      updated_at: true,
      Genre: true,
      Country: true,
    },
    where: {
      NOT: {
        id: media.id,
      },
      type: media.type,
      year: { gte: media.year - 5, lte: media.year + 5 },
      rating_kp: { gte: 7.0 },
      Genre: { some: { id: media.Genre[0].id } },
      Country: { some: { id: media.Country[0].id } },
    },
  })
}

export const getMediaSimilar = cache(
  unstable_cache(getSimilar, [], { revalidate: 86000 }),
)
