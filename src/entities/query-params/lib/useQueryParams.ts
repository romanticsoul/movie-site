import { useQueryStates } from "nuqs"
import { queryParams } from "../model/query-params"

export function useQueryParams() {
  return useQueryStates(queryParams, {
    shallow: false,
  })
}
