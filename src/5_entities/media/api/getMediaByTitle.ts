import orderBy from "lodash/orderBy"
import { api } from "@shared/api/openmovie"
import { getMedia } from "./getMedia"
import type { GetMediaResponse, GetMediaParams } from "./types"

type Props = {
  text: string
}

const SORT_FIELDS: NonNullable<GetMediaParams["sortField"]> = [
  "votes.imdb",
  "votes.tmdb",
  "year",
  "votes.kp",
  "rating.kp",
  "rating.tmdb",
  "rating.imdb",
]

export async function getMediaByTitle(props: Props): Promise<GetMediaResponse> {
  if (props.text) {
    const searchResponse = await api.movieControllerSearchMovieV14({
      limit: 250,
      query: props.text,
    })
    if (!searchResponse.ok) return null

    const ids = orderBy(searchResponse.data.docs, [(i) => i.name], ["asc"]).map((i) => i.id.toString())

    return getMedia({
      id: ids,
      sortField: SORT_FIELDS,
      sortType: SORT_FIELDS.map(() => "-1"),
    })
  }

  return getMedia({
    sortField: SORT_FIELDS,
    sortType: SORT_FIELDS.map(() => "-1"),
  })
}
