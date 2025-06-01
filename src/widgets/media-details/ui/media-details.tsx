import Image from "next/image"
import type { Media, PersonInMedia } from "@/entities/media"
import { MediaPoster, MediaRatingChip, MediaAgeChip } from "@/entities/media"

type MediaDetailsProps = {
  media: Media
}

export function MediaDetails({ media }: MediaDetailsProps) {
  return (
    <section className="container relative z-0 border-x bg-background py-16">
      <div className="relative z-20 grid grid-cols-5 gap-4">
        <div className="col-span-1">
          <MediaPoster
            priority
            loading="eager"
            src={media.images.poster}
            alt={media.title}
          />
        </div>

        <div className="col-span-4">
          <h1 className="text-3xl font-black">{media.title} смотреть онлайн</h1>
          <div className="my-4 flex items-end gap-2">
            <MediaAgeChip age={media.rating.age} />
            <MediaRatingChip rating={media.rating.kp} />
            <div className="text-default-foreground/60">
              {media.year}, {media.genres.slice(0, 2).join(", ")}
            </div>
          </div>

          <p className="my-8 text-pretty">{media.description}</p>
          <MediaPersons persons={media.persons} />
        </div>
      </div>
    </section>
  )
}

function MediaPersons({ persons }: { persons: PersonInMedia[] }) {
  const directors = persons.filter((p) => p.profession === "director")
  if (!directors || !directors.length) return null

  return (
    <div className="mt-4 grid grid-cols-4 gap-4">
      {directors.map(({ id, name, photo }) => (
        <div key={id} className="flex items-center gap-2">
          <Image
            width={40}
            height={40}
            src={photo}
            className="size-10 select-none overflow-hidden rounded-full object-cover"
            alt={name}
          />
          <div className="flex flex-1 flex-col">
            <p className="text-nowrap text-small">{name}</p>
            <span className="text-xs font-medium text-foreground/60">Режиссёр</span>
          </div>
        </div>
      ))}
    </div>
  )
}
