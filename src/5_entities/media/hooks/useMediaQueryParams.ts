import { useQueryStates } from "nuqs"
import { queryParams } from "../model/query-params"

export function useMediaQueryParams() {
  return useQueryStates(queryParams, {
    shallow: false,
  })
}
