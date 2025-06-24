import slugify from "slugify"

export function createMediaSlug(id: number, year: number, title: string) {
  return `/watch/${id}-${slugify(title.toLowerCase())}-${year}-smotret-online`
}
