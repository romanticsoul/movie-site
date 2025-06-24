import type { Media } from "../model/types"
import type { OpenmovieFindManyParams } from "@shared/api/openmovie"

export type GetMediaParams = OpenmovieFindManyParams
export type GetMediaResponse = null | {
  /**
   * Текущая страница
   */
  page: number
  /**
   * Общее количество страниц
   */
  totalPages: number
  /**
   * Массив медиа-элементов
   */
  items: Media[]
  /**
   * Количество медиа-элементов в массиве
   */
  count: number
  /**
   * Общее количество медиа-элементов на всех страницах
   */
  totalCount: number
}
