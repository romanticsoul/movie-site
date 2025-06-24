"use server"
import "server-only"
import { cache } from "react"
// import { unstable_cache } from "next/cache"
import { api } from "@shared/api/openmovie"
import type { Media } from "../model/types"
import { mediaMapper } from "./mappers"

export const getDataById = cache(async (id: number): Promise<Media | null> => {
  const response = await api.movieControllerFindOneV14(id, {
    cache: "force-cache",
    next: { revalidate: 2592000 },
  })

  if (!response.ok) {
    console.error(`Ошибка запроса getMediaById (${response.status}): ${response.statusText}`)
    return null
  }

  return mediaMapper(response.data)
})

export const getMediaById = cache(getDataById)
