import Image from "next/image"
import type { MediaFull } from "@/entities/media"
import { MediaPoster, MediaRatingChip, MediaAgeChip } from "@/entities/media"

type MediaDetailsProps = {
  media: MediaFull
}

export function MediaDetails({ media }: MediaDetailsProps) {
  const genres = media.Genre.map((g) => g.name).slice(0, 2)

  return (
    <section className="container relative z-0 border-x bg-background py-8 md:py-16">
      <div className="relative z-20 grid grid-cols-5 gap-4">
        <div className="col-span-full md:col-span-1">
          <MediaPoster
            priority
            fetchPriority="high"
            loading="eager"
            src={media.poster}
            alt={media.title}
            className="mx-auto w-3/5 sm:w-2/6 md:w-full"
          />
        </div>

        <div className="col-span-full md:col-span-4">
          <h1 className="text-3xl font-black">{media.title} смотреть онлайн</h1>
          <div className="my-4 flex items-end gap-2">
            <MediaAgeChip age={media.rating_age} />
            <MediaRatingChip rating={media.rating_kp} />
            <div className="text-default-foreground/60">
              {media.year}, {genres.join(", ")}
            </div>
          </div>

          <p className="my-8 text-pretty">{media.description}</p>
          <MediaPersons persons={media.PersonInMedia} />
        </div>
      </div>
    </section>
  )
}

function MediaPersons({ persons }: { persons: MediaFull["PersonInMedia"] }) {
  const directors = persons.filter((p) => p.profession === "режиссеры")
  if (!directors || !directors.length) return null

  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {directors.map((person) => (
        <div key={person.Person.id} className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={person.Person.photo || "/placeholder.webp"}
            className="size-10 shrink-0 select-none overflow-hidden rounded-full object-cover"
            alt={person.Person.name || "Изображение актёра"}
          />
          <div className="flex flex-1 flex-col">
            <p className="text-nowrap text-small">{person.Person.name}</p>
            <span className="text-xs font-medium text-foreground/60">Режиссёр</span>
          </div>
        </div>
      ))}
    </div>
  )
}
