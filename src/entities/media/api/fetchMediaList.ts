import { cache } from "react"
import { movieControllerFindManyByQueryV14 } from "../lib/kinopoisk/client"
import type { Media } from "../model/types"
import { mapToMedia } from "./mapToMedia"

export type FetchParams = NonNullable<
  Parameters<typeof movieControllerFindManyByQueryV14>[0]
>

export type FetchListResponse = {
  page: number
  totalPages: number
  items: Media[]
} | null

const REVALIDATE = 172800 /* Обновление кеша каждые 48 часов */
export const DEFAULT_PARAMS: FetchParams = {
  page: 1,
  limit: 20,
  notNullFields: [
    "rating.kp",
    "genres.name",
    "countries.name",
    "poster.url",
    "name",
    "year",
    "description",
  ],
  sortField: ["year", "rating.imdb", "votes.kp"],
  sortType: ["-1", "-1", "-1"],
  "rating.kp": ["1-10"],
  "rating.imdb": ["1-10"],
}

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
