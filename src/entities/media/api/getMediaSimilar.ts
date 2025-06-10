"use server"
import "server-only"
import type { MediaFull } from "../model/types"
import { getMedia } from "./getMedia"

type Props = {
  media: MediaFull
  count: number
}

export async function getMediaSimilar({ media, count }: Props) {
  return getMedia({
    limit: count,
    where: {
      id: { not: media.id },
      type: media.type,
      year: { gte: media.year - 5, lte: media.year + 5 },
      Genre: { some: { id: media.Genre[0].id } },
      Country: { some: { id: media.Country[0].id } },
    },
  })
}
