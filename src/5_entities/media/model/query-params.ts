import { parseAsString, parseAsInteger, parseAsStringEnum, type inferParserType } from "nuqs/server"
import { SORT_OPTIONS } from "./constants"

export const queryParams = {
  /**
   * TODO: Возможно стоит вынести query-параметр пагинации в shared-слой
   */
  p: parseAsInteger.withDefault(1),
  /**
   * Поиск по названию (query)
   */
  q: parseAsString.withDefault(""),
  /**
   * Фильтр по жанру
   */
  g: parseAsString,
  /**
   * Контент, который вышел с этой даты
   */
  f: parseAsInteger,
  /**
   * Контент, вышедший после этой даты
   */
  t: parseAsInteger,
  /**
   * Вариант сортировки
   */
  s: parseAsStringEnum(SORT_OPTIONS.map(({ slug }) => slug)).withDefault("d"),
}

export type QueryParams = inferParserType<typeof queryParams>
