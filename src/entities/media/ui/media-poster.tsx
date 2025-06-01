import Image from "next/image"
import { Skeleton } from "@heroui/skeleton"

export type MediaPosterProps = {
  src: string
  alt: string
}

export function MediaPoster({ src, alt }: MediaPosterProps) {
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-large">
      <Image
        fill
        src={src}
        sizes="15vw" // TODO: Адаптировать под размер маленьких экранов
        alt={alt}
        className="object-cover"
      />
    </div>
  )
}

export function MediaPosterSkeleton() {
  return <Skeleton className="aspect-[2/3] w-full rounded-large" />
}
