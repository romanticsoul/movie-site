"use client"

import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import ClassNames from "embla-carousel-class-names"
import type { Media } from "@entities/media"
import { CarouselItem } from "./carousel-item"

type CarouselContainerProps = {
  media: Media[]
}

export function CarouselContainer(props: CarouselContainerProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      duration: 60,
    },
    [ClassNames(), Autoplay({ delay: 7000 })],
  )

  return (
    <section ref={emblaRef} className="relative overflow-hidden">
      <ul className="flex">
        {props.media.map((media) => (
          <CarouselItem key={media.id} media={media} />
        ))}
      </ul>
    </section>
  )
}
