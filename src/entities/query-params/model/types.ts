import type { inferParserType } from "nuqs/server"
import { YEARS, SORTING } from "./constants"
import { queryParams } from "./query-params"

export type YearName = (typeof YEARS)[number]["name"]
export type YearSlug = (typeof YEARS)[number]["slug"]
export type SortingName = (typeof SORTING)[number]["name"]
export type SortingSlug = (typeof SORTING)[number]["slug"]

export type QueryParamsKeys = keyof typeof queryParams
export type QueryParams = inferParserType<typeof queryParams>
