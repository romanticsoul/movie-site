export type Media = {
  id: number
  imdb_id: string | null
  tmdb_id: number | null
  title: string
  description: string
  short_description: string | null
  slogan: string | null
  type: MediaType
  is_series: boolean | null
  /**
   * Относится только к сериалам
   */
  status: MediaStatus
  year: number
  rating_kp: number
  rating_age: number | null
  rating_imdb: number
  rating_tmdb: number | null
  votes_kp: number
  votes_imdb: number
  votes_tmdb: number | null
  movie_length: number | null
  poster: string
  backdrop: string | null
  logo: string | null
  top_10: number | null
  top_250: number | null
  series_length: number | null
  genres: string[]
  countries: string[]
  updated_at: Date
  created_at: Date
}

export type MediaType = "movie" | "tv-series" | "cartoon" | "animated-series" | "anime"

export type MediaStatus = "filming" | "pre-production" | "completed" | "announced" | "post-production" | null
