import { createLoader } from "nuqs/server"
import { queryParams } from "../model/query-params"

export const loadMediaQueryParams = createLoader(queryParams)
