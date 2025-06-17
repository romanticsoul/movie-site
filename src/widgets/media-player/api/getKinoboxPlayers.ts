"use server"
import "server-only"
import { URL, URLSearchParams } from "url"

// Ограничиваем допустимые плееры
type PlayerSource = "alloha" | "cdnmovies" | "turbo" | "videocdn"

type SearchParams = {
  kinopoisk: string
}

type PlayerConfig = {
  position: number
  domain?: string
}

type PlayersConfig = {
  [key in PlayerSource]?: PlayerConfig
}

type PlayerResponse = {
  success: boolean
  source: string
  iframeUrl: string | null
  translations?: Array<{ name?: string; quality?: string; iframeUrl?: string }>
}

export type KinoboxPlayer = {
  id: number
  url: string
  name: string
}

type KinoboxOptions = {
  search: SearchParams
  players?: PlayersConfig
  baseUrl?: string
}

export async function Kinobox(options: KinoboxOptions): Promise<KinoboxPlayer[]> {
  const baseUrl = new URL(options.baseUrl || "https://kinobox.tv/")
  const playersConfig = options.players || {}
  const search = options.search

  // Формирование URL для запроса
  const getSearchUrl = (): string => {
    const params = new URLSearchParams()
    params.set("kinopoisk", search.kinopoisk)
    baseUrl.pathname = "api/players"
    baseUrl.search = params.toString()
    return baseUrl.toString()
  }

  // Обработка URL iframe с заменой домена
  const getIframeUrl = (iframeUrl: string, source: string): string => {
    const config = Object.entries(playersConfig).find(
      ([key]) => key.toLowerCase() === source.toLowerCase(),
    )?.[1]

    let url = iframeUrl
    if (config?.domain) {
      const sourceLower = source.toLowerCase() as PlayerSource
      const domain = config.domain.startsWith("//")
        ? `https:${config.domain}`
        : config.domain

      if (sourceLower === "alloha" || sourceLower === "cdnmovies") {
        url = url.replace(/^(https?:\/\/)[^\/]+/, domain)
      } else if (sourceLower === "turbo") {
        url = url.replace(/^https:\/\/[^\/]+\/embed\/[^\/]+/, domain)
      } else if (sourceLower === "videocdn") {
        url = url.replace(/^(https?:\/\/[^\/]+\/[^\/]+)/, domain)
      }
    }

    return new URL(url).toString()
  }

  // Выполнение запроса
  const response = await fetch(getSearchUrl())
  if (!response.ok) {
    throw new Error(`Ошибка Kinobox (${response.status}) ${response.statusText}`)
  }

  const data: PlayerResponse[] = await response.json()

  // Фильтрация успешных плееров
  const players = data.filter((player) => player.success && player.iframeUrl)

  // Сортировка: настроенные плееры на заданные позиции, остальные — в исходном порядке
  const sortedPlayers: PlayerResponse[] = []
  const usedPositions = new Set<number>()

  // Сначала размещаем настроенные плееры на их позициях
  for (const [source, config] of Object.entries(playersConfig)) {
    const player = players.find((p) => p.source.toLowerCase() === source.toLowerCase())
    if (player) {
      const position = config.position - 1 // Позиция 1 -> индекс 0
      sortedPlayers[position] = player
      usedPositions.add(position)
    }
  }

  // Заполняем оставшиеся позиции нен настроенными плеерами в исходном порядке
  let currentIndex = 0
  for (const player of players) {
    if (
      !Object.keys(playersConfig).some(
        (source) => source.toLowerCase() === player.source.toLowerCase(),
      )
    ) {
      while (sortedPlayers[currentIndex] || usedPositions.has(currentIndex)) {
        currentIndex++
      }
      sortedPlayers[currentIndex] = player
      currentIndex++
    }
  }

  // Удаляем undefined элементы, если есть
  const finalPlayers = sortedPlayers.filter((p) => p)

  // Формирование результата с последовательными id
  return finalPlayers.map((player, index) => {
    const iframeUrl = player.iframeUrl!
    return {
      id: index + 1,
      url: getIframeUrl(iframeUrl, player.source),
      name: player.source,
    }
  })
}
