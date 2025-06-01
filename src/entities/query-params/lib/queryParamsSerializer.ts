import { createSerializer } from "nuqs/server"
import { queryParams } from "../model/query-params"

export const queryParamsSerializer = createSerializer(queryParams)
