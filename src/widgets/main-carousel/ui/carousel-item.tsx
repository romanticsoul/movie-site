import Image from "next/image"
import { Button } from "@heroui/button"
import {
  MediaAgeChip,
  MediaRatingChip,
  MediaPoster,
  createMediaSlug,
} from "@/entities/media"
import { RandomMedia } from "../api/getRandomMedia"
import Link from "next/link"

type CarouselItemProps = {
  media: RandomMedia
}

export function CarouselItem({ media }: CarouselItemProps) {
  const genres = media.Genre.map((g) => g.name).slice(0, 2)

  return (
    <div className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full">
      <span className="absolute inset-0 z-20 bg-gradient-to-t from-gray-950 from-0% to-transparent to-100% backdrop-blur-xl"></span>

      <Image
        priority
        fill
        loading="eager"
        src={media.backdrop!}
        alt="alt"
        className="z-10 object-cover"
      />

      <div className="container relative z-30 grid h-full items-center gap-4 py-8 md:grid-cols-4 md:py-16 lg:grid-cols-5">
        {/*  */}
        <div className="text-white md:col-span-3">
          <h3 className="mb-2 text-5xl font-black md:w-2/3">{media.title}</h3>
          <div className="mb-4 flex items-end gap-2">
            <MediaAgeChip size="md" age={media.rating_age} />
            <MediaRatingChip size="md" rating={media.rating_kp} />
            <p className="ml-2 text-lg text-white/65">
              {media.year}, {genres.join(", ")}
            </p>
          </div>
          <p className="mb-4 line-clamp-4 text-pretty text-lg">{media.description}</p>
          <Button
            as={Link}
            size="lg"
            radius="full"
            color="primary"
            href={createMediaSlug(media.id, media.title)}
          >
            Смотреть сейчас
          </Button>
        </div>

        <span className="max-lg:hidden"></span>

        <div className="max-md:order-first">
          <MediaPoster
            priority
            loading="eager"
            fetchPriority="high"
            src={media.poster}
            alt={media.title}
            className="mx-auto w-3/5 sm:w-2/6 md:w-full"
          />
        </div>
      </div>
    </div>
  )
}
