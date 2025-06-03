import Image from "next/image"
import { Button } from "@heroui/button"
import { type Media, MediaAgeChip, MediaRatingChip, MediaPoster } from "@/entities/media"

type CarouselItemProps = {
  media: Media
}

export function CarouselItem({ media }: CarouselItemProps) {
  return (
    <div className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full">
      <span className="absolute inset-0 z-20 bg-gradient-to-t from-gray-950 from-0% to-transparent to-100% backdrop-blur-xl"></span>
      <Image
        priority
        fill
        loading="eager"
        src={media.images.backdrop!}
        alt="alt"
        className="z-10 object-cover"
      />

      <div className="container relative z-30 grid h-full grid-cols-5 items-center gap-4 border-x border-default-600/20 py-16">
        <div className="col-span-3 text-white">
          <h1 className="mb-2 text-4xl font-black">{media.title}</h1>
          <div className="mb-4 flex gap-2">
            <MediaAgeChip age={media.rating.age} />
            <MediaRatingChip rating={media.rating.kp} />
            <p className="text-background/70">
              {media.year}, {media.genres.slice(0, 2).join(", ")}
            </p>
          </div>
          <p className="mb-4 line-clamp-4 text-pretty">{media.description}</p>
          <Button size="lg" radius="full" className="bg-white">
            Смотреть сейчас
          </Button>
        </div>
        <span></span>
        <div className="col-span-1">
          <MediaPoster src={media.images.poster} alt={media.title} />
        </div>
      </div>
    </div>
  )
}
