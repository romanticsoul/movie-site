import Image from "next/image"
import { cn } from "@heroui/theme"
import { Skeleton } from "@heroui/skeleton"

export type MediaPosterProps = {
  src: string
  alt: string
  loading?: "lazy" | "eager"
  priority?: boolean
  className?: string
}

export function MediaPoster({
  src,
  alt,
  className,
  loading = "lazy",
  priority = false,
}: MediaPosterProps) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-large",
        className,
      )}
    >
      <Image
        fill
        priority={priority}
        src={src}
        loading={loading}
        sizes="50vw" // TODO: Адаптировать под размер маленьких экранов
        alt={alt}
        className="object-cover"
      />
    </div>
  )
}

export function MediaPosterSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("aspect-[2/3] w-full rounded-large", className)} />
}
