import { Media } from "../model/types"
import { fetchMediaList, type FetchListResponse } from "./fetchMediaList"
import sampleSize from "lodash/sampleSize"

type Props = {
  media: Media
  count: number
}

export async function getMediaSimilar({
  media,
  count,
}: Props): Promise<FetchListResponse> {
  const response = await fetchMediaList({
    limit: count + 20,
    id: [`!${media.id}`],
    type: [media.type],
    sortField: ["votes.imdb", "rating.kp"],
    sortType: ["-1", "-1"],
    "rating.kp": ["6-10"],
    year: [`${media.year - 5}-${media.year + 5}`],
    "countries.name": media.countries,
    "genres.name": [media.genres[0]],
  })

  if (response) response.items = sampleSize(response.items, count)
  return response
}
