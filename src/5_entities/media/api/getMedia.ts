"use server"
import "server-only"
import { cache } from "react"
// import { unstable_cache } from "next/cache"
import { api } from "@shared/api/openmovie"
import type { GetMediaParams, GetMediaResponse } from "./types"
import { DEFAULT_PARAMS } from "./constants"
import { mediaMapper } from "./mappers"

const getData = async (params?: GetMediaParams): Promise<GetMediaResponse> => {
  const response = await api.movieControllerFindManyByQueryV14(
    { ...DEFAULT_PARAMS, ...params },
    { cache: "force-cache", next: { revalidate: 86400 } },
  )

  if (!response.ok) {
    console.error(`Ошибка запроса getMedia (${response.status}): ${response.statusText}`)
    return null
  }

  return {
    page: response.data.page,
    totalPages: response.data.pages,
    count: response.data.total,
    totalCount: response.data.limit,
    items: response.data.docs.map((item) => mediaMapper(item)),
  }
}

export const getMedia = cache(getData)
