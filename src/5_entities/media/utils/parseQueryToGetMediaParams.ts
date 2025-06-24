"use server"
import "server-only"
import type { GetMediaParams } from "../api/types"
import { SORT_OPTIONS, GENRE_OPTIONS } from "../model/constants"
import { QueryParams } from "../model/query-params"

type SortOptionSlug = (typeof SORT_OPTIONS)[number]["slug"]

export const parseQueryToGetMediaParams = async function (
  queryParams: Omit<QueryParams, "q">,
): Promise<GetMediaParams> {
  const { p, g, f, t, s } = queryParams

  const genre = GENRE_OPTIONS.find((genre) => genre.slug === g)?.name

  return {
    page: p,
    ...(genre && { "genre.name": [genre] }),
    ...(f && t ? { year: [`${f}-${t}`] } : t ? { year: [`${t}`] } : {}),
    ...mapSortOptionToMediaParams(s),
  }
}

function mapSortOptionToMediaParams(sortOption: SortOptionSlug): {
  sortField: GetMediaParams["sortField"]
  sortType: GetMediaParams["sortType"]
} {
  const sortFieldMap: Record<SortOptionSlug, GetMediaParams["sortField"]> = {
    d: ["year", "votes.imdb", "votes.kp", "votes.tmdb", "rating.kp", "rating.tmdb", "rating.imdb"],
    r: ["rating.kp", "rating.imdb", "votes.imdb", "votes.kp"],
    y: ["year", "rating.kp", "votes.imdb", "votes.kp"],
  }

  return {
    sortField: sortFieldMap[sortOption]!,
    sortType: sortFieldMap[sortOption]!.map(() => "-1"),
  }
}
