"use client"

import useEmblaCarousel from "embla-carousel-react"
import type { Media } from "@/entities/media"
import { CarouselItem } from "./carousel-item"

type CarouselContainerProps = {
  items: Media[]
}

export function CarouselContainer(props: CarouselContainerProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {props.items.map((media) => (
          <CarouselItem key={media.id} media={media} />
        ))}
      </div>
    </div>
  )
}
