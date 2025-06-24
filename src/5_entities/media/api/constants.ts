import { GetMediaParams } from "./types"

type Params = NonNullable<GetMediaParams>

export const NOT_NULL_FIELDS: Params["notNullFields"] = [
  "name",
  "description",
  "type",
  "year",
  "poster.url",
  "genres.name",
  "countries.name",
]

export const SELECT_FIELDS: Params["selectFields"] = [
  "id",
  "externalId",
  "name",
  "alternativeName",
  "description",
  "shortDescription",
  "slogan",
  "type",
  "year",
  "rating",
  "ageRating",
  "votes",
  "movieLength",
  "seriesLength",
  "poster",
  "genres",
  "countries",
  "backdrop",
  "logo",
  "top10",
  "top250",
  "updatedAt",
  "createdAt",
]

export const DEFAULT_PARAMS: Params = {
  page: 1,
  limit: 20,
  notNullFields: NOT_NULL_FIELDS,
  selectFields: SELECT_FIELDS,
  "rating.kp": ["1-10"],
  "rating.imdb": ["1-10"],
  // "rating.tmdb": ["1-10"],
}
