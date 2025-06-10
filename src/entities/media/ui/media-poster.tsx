import Image, { type ImageProps } from "next/image"
import { cn } from "@heroui/theme"
import { Skeleton } from "@heroui/skeleton"

export function MediaPoster({ className, alt, ...props }: ImageProps) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-large",
        className,
      )}
    >
      <Image
        fill
        alt={alt}
        className={cn("object-cover")}
        sizes="15vw" // TODO: Адаптировать под размер маленьких экранов
        {...props}
      />
    </div>
  )
}

export function MediaPosterSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("aspect-[2/3] w-full rounded-large", className)} />
}
