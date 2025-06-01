import type { MovieDtoV14, PersonInMovie } from "../lib/kinopoisk/client"
import type {
  Media,
  MediaType,
  MediaGenre,
  MediaCountry,
  PersonInMedia,
} from "../model/types"

const EXCLUDE_GENRES = ["мультфильм", "аниме"]

export function mapToMedia(movie: MovieDtoV14): Media {
  return {
    id: movie.id!,
    title: movie.name!,
    description: movie.description!,
    shortDescription: movie.shortDescription ?? null,
    slogan: movie.slogan ?? null,
    type: movie.type as MediaType,
    rating: {
      kp: movie.rating!.kp!,
      imdb: movie.rating!.imdb!,
      age: movie.ageRating ?? null,
    },
    year: movie.year!,
    images: {
      poster: movie.poster!.url!,
      backdrop: movie.backdrop?.url ?? null,
      logo: movie.logo?.url ?? null,
    },
    top10: movie.top10 ?? null,
    top250: movie.top250 ?? null,
    genres:
      movie.genres
        ?.map((g) => g.name as MediaGenre)
        .filter((g) => !EXCLUDE_GENRES.includes(g)) || [],
    countries: movie.countries?.map((c) => c.name as MediaCountry) || [],
    collections: movie.lists ?? [],
    persons: movie.persons ? mapPersonInMedia(movie.persons) : [],
  }
}

function mapPersonInMedia(persons: PersonInMovie[]): PersonInMedia[] {
  return persons.map(
    (p): PersonInMedia => ({
      id: p.id,
      name: p.name || p.enName!,
      photo: p.photo!,
      profession: p.enProfession!,
      description: p.description!,
    }),
  )
}
