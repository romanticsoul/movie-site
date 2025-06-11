import type { GetMediaParams } from "@/entities/media"
import type { QueryParams, SortingSlug } from "../model/types"

const SORT_CONFIG: Record<SortingSlug, GetMediaParams["orderBy"]> = {
  rate: [
    { rating_kp: "desc" },
    { rating_imdb: "desc" },
    { votes_kp: "desc" },
    { votes_imdb: "desc" },
  ],
  year: [
    { year: "desc" },
    { rating_kp: "desc" },
    { votes_kp: "desc" },
    { votes_imdb: "desc" },
  ],
  vote: [
    { votes_imdb: "desc" },
    { votes_kp: "desc" },
    { votes_tmdb: "desc" },
    { rating_kp: "desc" },
  ],
}

export function parseQueryToFetchParams(queryParams: QueryParams): GetMediaParams {
  const params: GetMediaParams = { page: queryParams.page }

  if (queryParams.sort) {
    params.orderBy = SORT_CONFIG[queryParams.sort]
  }

  if (queryParams.genre) {
    params.where = params.where || {}
    params.where.Genre = params.where.Genre || {}
    params.where.Genre.some = { id: queryParams.genre }
  }

  if (queryParams.year) {
    const [minYear, maxYear] = queryParams.year.split("-")
    params.where = params.where || {}
    params.where.year = {
      lte: Number(maxYear),
      gte: Number(minYear),
    }
  }

  return params
}
