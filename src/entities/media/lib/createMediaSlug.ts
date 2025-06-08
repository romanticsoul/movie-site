import slugify from "slugify"

export function createMediaSlug(id: number, title: string) {
  const slugTitle = slugify(title, {
    lower: true,
    strict: true,
  })

  return `/watch/${id}-${slugTitle}-smotret-online`
}
