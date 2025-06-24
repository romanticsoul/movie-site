import { createSerializer } from "nuqs/server"
import { queryParams } from "../model/query-params"

export const mediaQueryParamSerializer = createSerializer(queryParams)
