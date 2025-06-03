import { GENRES, COUNTRIES } from "./constants"

export type MediaGenre = (typeof GENRES)[number]["name"] | string
export type MediaGenreSlug = (typeof GENRES)[number]["slug"]
export type MediaCountry = (typeof COUNTRIES)[number]["name"] | string
export type MediaCountrySlug = (typeof COUNTRIES)[number]["slug"]

export type PersonInMedia = {
  id: number
  photo: string
  name: string
  description: string | null
  profession: string // TODO: Добавить список возможных профессий
}

export type MediaType = "movie" | "tv-series" | "anime" | "cartoon" | "animated-series"

export type MediaRating = {
  kp: number
  imdb: number | null
  age: number | null
}

export type MediaImages = {
  poster: string
  logo: string | null
  backdrop: string | null
}

export type Media = {
  id: number
  title: string
  description: string
  shortDescription: string | null
  slogan: string | null
  type: MediaType
  rating: MediaRating
  year: number
  images: MediaImages
  top10: number | null
  top250: number | null
  genres: MediaGenre[]
  countries: MediaCountry[]
  collections: string[]
  persons: PersonInMedia[]
}
