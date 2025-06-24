"use server"
import "server-only"
import { cache } from "react"
import { unstable_cache } from "next/cache"
import { getMedia, DEFAULT_PARAMS } from "@entities/media"

async function getPopular() {
  const response = await getMedia({
    limit: 100,
    year: [`2024-${new Date().getFullYear()}`],
    "rating.kp": ["6-10"],
    "votes.kp": ["10000-100000000"],
    sortField: ["releaseYears.start"],
    sortType: ["-1"],
    type: ["movie", "tv-series"],
    notNullFields: DEFAULT_PARAMS.notNullFields?.concat(["backdrop.url", "logo.url", "shortDescription"]),
  })

  if (!response || !response.items.length) return null

  return response
}

export const getPopularMedia = cache(
  unstable_cache(getPopular, [], {
    revalidate: 86000,
  }),
)
