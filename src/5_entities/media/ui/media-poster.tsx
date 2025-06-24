import Image, { type ImageProps } from "next/image"
import { cn } from "@heroui/theme"
import { Skeleton } from "@heroui/skeleton"

export type MediaPosterProps = ImageProps
export function MediaPoster({ className, alt, ...props }: MediaPosterProps) {
  return (
    <div className={cn("relative aspect-[2/3] w-full overflow-hidden rounded-medium", className)}>
      <Image
        fill
        alt={alt}
        className="object-cover contrast-[1.1]"
        sizes="(max-width: 639px) 46vw, (max-width: 767px) 30vw, (max-width: 1023px) 23vw, 15vw"
        {...props}
      />
    </div>
  )
}

export function MediaPosterSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("aspect-[2/3] w-full rounded-large", className)} />
}
