import Image, { getImageProps } from "next/image"
import Link from "next/link"
import { cn } from "@heroui/theme"
import { MediaAgeChip, MediaRatingChip, createMediaSlug, type Media } from "@entities/media"
import { getBackgroundImage } from "@shared/utils/getBackgroundImage"

type CarouselItemProps = {
  media: Media
}

export function CarouselItem({ media }: CarouselItemProps) {
  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 1280, height: 540, src: media.backdrop! })
  const backgroundImage = getBackgroundImage(srcSet)

  const genres = media.genres.slice(0, 2)
  const srId = `srid-${media.id}`

  return (
    <li
      className={cn(
        "container relative mr-4 h-[540px] flex-shrink-0 flex-grow-0 basis-full select-none overflow-hidden lg:rounded-large",
        "bg-cover bg-center bg-no-repeat",
        "group transition-opacity [&:not(.is-snapped)]:opacity-20",
        "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/50 before:to-transparent before:backdrop-blur-md before:content-['']",
      )}
      style={{ backgroundImage }}
    >
      <Link
        href={createMediaSlug(media.id, media.year, media.title)}
        className={cn(
          "container relative z-20 flex h-full flex-col justify-end py-8 text-white lg:px-16 lg:py-24",
          "transition-opacity group-[&:not(.is-snapped)]:invisible group-[&:not(.is-snapped)]:opacity-0",
        )}
        aria-labelledby={srId}
      >
        <Image width={300} height={200} alt={media.title} src={media.logo!} />
        <div className="mb-4 mt-4 flex items-end gap-2">
          <MediaAgeChip size="md" age={media.rating_age} />
          <MediaRatingChip size="md" media={media} />
          <p className="ml-2 text-lg text-white/65">
            {media.year}, {genres.join(", ")}
          </p>
        </div>
        <h3 className="sr-only" id={srId}>
          {media.title}
        </h3>
        <p className="text-pretty md:w-2/3 md:text-xl">{media.short_description}</p>
      </Link>
    </li>
  )
}
