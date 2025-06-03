"use server"
import "server-only"
import { movieControllerSearchMovieV14 } from "../lib/kinopoisk/client"
import {
  fetchMediaList,
  type FetchParams,
  type FetchListResponse,
} from "./fetchMediaList"

type Props = {
  query: string
  params?: FetchParams
}

export async function searchMediaByTitle(props: Props): Promise<FetchListResponse> {
  try {
    const response = await movieControllerSearchMovieV14(
      { query: props.query, limit: 20 },
      {
        cache: "force-cache",
        next: { revalidate: 172800 },
      },
    )
    if (!response.ok) return null

    const foundIds = response.data.docs.map((i) => i.id.toString())
    return fetchMediaList({
      id: foundIds,
      ...props.params,
    })
  } catch (error) {
    if (error instanceof Error) console.log("Ошибка запроса:", error.message)
    else console.log("Неизвестная ошибка:", error)
    return null
  }
}
