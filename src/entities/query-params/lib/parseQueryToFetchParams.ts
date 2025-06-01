import { GENRES, MediaGenre } from "@/entities/media"
import type { FetchParams } from "@/entities/media"
import type { QueryParams, SortingSlug } from "../model/types"

const SORT_CONFIG: Record<SortingSlug, FetchParams> = {
  rate: {
    sortField: ["rating.kp", "rating.imdb", "votes.kp", "votes.imdb"],
    sortType: ["-1", "-1", "-1", "-1"],
  },
  year: {
    sortField: ["year", "rating.kp"],
    sortType: ["-1", "-1"],
  },
  vote: {
    sortField: ["votes.imdb", "votes.kp"],
    sortType: ["-1", "-1"],
  },
}

export function parseQueryToFetchParams(queryParams: QueryParams): FetchParams {
  const params: FetchParams = { page: queryParams.page }
  const genre = getGenreNameBySlug(queryParams.genre)
  if (genre) params["genres.name"] = [genre]
  if (queryParams.year) params.year = [queryParams.year]
  if (queryParams.sort) {
    params.sortField = SORT_CONFIG[queryParams.sort].sortField
    params.sortType = SORT_CONFIG[queryParams.sort].sortType
  }
  return params
}

const getGenreNameBySlug = (slug: MediaGenre | null) => {
  const genre = GENRES.find((g) => g.slug === slug)
  return genre ? genre.name : null
}
