"use client"

import useEmblaCarousel from "embla-carousel-react"
import { CarouselItem } from "./carousel-item"
import { RandomMedia } from "../api/getRandomMedia"

type CarouselContainerProps = {
  media: RandomMedia[]
}

export function CarouselContainer(props: CarouselContainerProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <section ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {props.media.map((media) => (
          <CarouselItem key={media.id} media={media} />
        ))}
      </div>
    </section>
  )
}
