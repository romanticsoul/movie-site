import { cache } from "react"
import sampleSize from "lodash/sampleSize"
import { Media } from "../model/types"
import { GetMediaResponse } from "./types"
import { getMedia } from "./getMedia"

async function getSimilar(media: Media): Promise<GetMediaResponse> {
  const response = await getMedia({
    limit: 30,
    type: [media.type],
    id: [`!${media.id}`],
    "rating.kp": ["6-10"],
    "countries.name": media.countries,
    "genres.name": media.genres.slice(0, 2).map((g) => `+${g}`),
    year: [`${media.year - 5}-${media.year + 5}`],
  })

  if (!response) return null
  response.items = sampleSize(response.items, 5)
  return response
}

export const getMediaSimilar = cache(getSimilar)
