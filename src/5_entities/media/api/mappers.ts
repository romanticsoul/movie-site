import type { OpenmovieMovie } from "@shared/api/openmovie"
import type { Media, MediaType, MediaStatus } from "../model/types"

// Маппинг типов
const mediaTypeMap: Record<string, MediaType> = {
  movie: "movie",
  "tv-series": "tv-series",
  cartoon: "cartoon",
  anime: "anime",
  "animated-series": "animated-series",
}

// Маппинг статусов
const statusMap: Record<string, MediaStatus> = {
  filming: "filming",
  "pre-production": "pre-production",
  completed: "completed",
  announced: "announced",
  "post-production": "post-production",
}

export function mediaMapper(movie: OpenmovieMovie): Media {
  const excludedGenres = ["мультфильм", "аниме"]
  const genres = movie.genres!.map((g) => g.name!).filter((g) => !excludedGenres.includes(g!))
  const countries = movie.countries!.map((c) => c.name!)

  return {
    id: movie.id ?? 0,
    imdb_id: movie.externalId?.imdb ?? null,
    tmdb_id: movie.externalId?.tmdb ?? null,
    title: movie.name ?? movie.alternativeName ?? movie.enName ?? "",
    description: movie.description ?? "",
    short_description: movie.shortDescription ?? null,
    slogan: movie.slogan ?? null,
    type: mediaTypeMap[movie.type!],
    is_series: movie.isSeries ?? null,
    status: movie.status ? (statusMap[movie.status] ?? null) : null,
    year: movie.year!,
    rating_kp: movie.rating!.kp!,
    rating_age: movie.ageRating ?? null,
    rating_imdb: movie.rating!.imdb!,
    rating_tmdb: movie.rating?.tmdb ?? null,
    votes_kp: parseInt(movie.votes?.kp ?? "0", 10) || 0,
    votes_imdb: movie.votes!.imdb!,
    votes_tmdb: movie.votes?.tmdb ?? null,
    movie_length: movie.movieLength ?? null,
    poster: movie.poster!.url!,
    backdrop: (movie.backdrop?.url || movie.backdrop?.previewUrl) ?? null,
    logo: movie.logo?.url ?? null,
    top_10: movie.top10 ?? null,
    top_250: movie.top250 ?? null,
    series_length: movie.seriesLength ?? null,
    countries: countries,
    genres: genres,
    updated_at: movie.updatedAt ? new Date(movie.updatedAt) : new Date(),
    created_at: movie.createdAt ? new Date(movie.createdAt) : new Date(),
  }
}
