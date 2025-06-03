import { FetchParams } from "./fetchMediaList"
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
