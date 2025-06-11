import { parseAsStringEnum, parseAsInteger, parseAsString } from "nuqs/server"
import { YEARS, SORTING } from "./constants"

export const queryParams = {
  genre: parseAsInteger,
  country: parseAsInteger,
  year: parseAsStringEnum(YEARS.map((y) => y.slug)),
  sort: parseAsStringEnum(SORTING.map((s) => s.slug)),
  page: parseAsInteger.withDefault(1).withOptions({ scroll: true }),
  q: parseAsString.withDefault(""),
}
