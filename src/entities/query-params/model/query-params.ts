import { parseAsStringEnum, parseAsInteger, parseAsString } from "nuqs/server"
import { YEARS, SORTING } from "./constants"
import { GENRES, COUNTRIES } from "@/entities/media"

export const queryParams = {
  genre: parseAsStringEnum(GENRES.map((g) => g.slug)),
  country: parseAsStringEnum(COUNTRIES.map((c) => c.slug)),
  year: parseAsStringEnum(YEARS.map((y) => y.slug)),
  sort: parseAsStringEnum(SORTING.map((s) => s.slug)),
  page: parseAsInteger.withDefault(1).withOptions({ scroll: true }),
  q: parseAsString.withDefault(""),
}
