import { createSearchParamsCache } from "nuqs/server"
import { queryParams } from "../model/query-params"

export const mediaQueryParamsCache = createSearchParamsCache(queryParams)
