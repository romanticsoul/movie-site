import { cache } from "react"
import { unstable_cache } from "next/cache"
import type { MediaFull } from "@/entities/media"
import { prisma } from "@/shared/lib/prisma"
import { FilterSelect, type OmitSelectProps, type SelectOption } from "./filter-selectors"

export async function GenreSelect(
  props: OmitSelectProps & { mediaType?: MediaFull["type"] },
) {
  const genres = await getGenres(props.mediaType)
  const genreOptions: SelectOption[] = genres.map((g) => ({
    name: g.name,
    slug: g.id.toString(),
  }))

  return (
    <FilterSelect name="genre" label="Выберите жанр" options={genreOptions} {...props} />
  )
}

const getGenres = cache(
  unstable_cache(async (type?: MediaFull["type"]) => {
    return await prisma.genre.findMany({
      where: {
        Media: {
          some: { type },
        },
        NOT: {
          name: "аниме",
        },
      },
      orderBy: {
        name: "asc",
      },
    })
  }),
)
