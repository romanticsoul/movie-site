"use server"
import "server-only"
import { cache } from "react"
import { movieControllerFindOneV14 } from "../lib/kinopoisk/client"
import { mapToMedia } from "./mapToMedia"

export const getMediaById = cache(async (id: number) => {
  try {
    const response = await movieControllerFindOneV14(id, {
      cache: "force-cache",
      next: {
        revalidate: 172800,
      },
    })
    if (!response.ok) return null

    return mapToMedia(response.data)
  } catch (error) {
    if (error instanceof Error) console.log("Ошибка запроса:", error.message)
    else console.log("Неизвестная ошибка:", error)
    return null
  }
})
