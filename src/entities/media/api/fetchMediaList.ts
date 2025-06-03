"use server"
import "server-only"
import { cache } from "react"
import { movieControllerFindManyByQueryV14 } from "../lib/kinopoisk/client"
import type { Media } from "../model/types"
import { mapToMedia } from "./mapToMedia"
import { DEFAULT_PARAMS } from "./config"

export type FetchParams = NonNullable<
  Parameters<typeof movieControllerFindManyByQueryV14>[0]
>

export type FetchListResponse = {
  page: number
  totalPages: number
  items: Media[]
} | null

const REVALIDATE = 172800 /* Обновление кеша каждые 48 часов */

export const fetchMediaList = cache(async (params: FetchParams) => {
  try {
    const response = await movieControllerFindManyByQueryV14(
      { ...DEFAULT_PARAMS, ...params },
      {
        cache: "force-cache",
        next: { revalidate: REVALIDATE },
      },
    )
    if (!response.ok) return null
    return {
      page: response.data.page,
      totalPages: response.data.pages,
      items: response.data.docs.map((i) => mapToMedia(i)),
    }
  } catch (error) {
    if (error instanceof Error) console.log("Ошибка запроса:", error.message)
    else console.log("Неизвестная ошибка:", error)
    return null
  }
})

// export async function getMediaList(params: FetchParams): Promise<FetchListResponse> {
//   try {
//     const response = await movieControllerFindManyByQueryV14(
//       { ...DEFAULT_PARAMS, ...params },
//       {
//         cache: "force-cache",
//         next: { revalidate: REVALIDATE }, // Обновление кеша каждые 48 часов
//       },
//     )
//     if (!response.ok) return null
//     return {
//       page: response.data.page,
//       totalPages: response.data.pages,
//       items: response.data.docs.map((i) => mapToMedia(i)),
//     }
//   } catch (error) {
//     if (error instanceof Error) console.log("Ошибка запроса:", error.message)
//     else console.log("Неизвестная ошибка:", error)
//     return null
//   }
// }
