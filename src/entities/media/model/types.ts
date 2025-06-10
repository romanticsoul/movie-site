import type { Media, Genre, Country } from "@prisma/client"
import { Prisma } from "@prisma/client"

export type MediaFull = Prisma.MediaGetPayload<{
  include: {
    Genre: true
    Country: true
    PersonInMedia: {
      include: {
        Person: true
      }
    }
  }
}>

type PickedMediaField = Pick<
  Media,
  "id" | "title" | "rating_kp" | "poster" | "year" | "updated_at"
>
export type MediaCompact = PickedMediaField & {
  Genre: Genre[]
  Country: Country[]
}
