"use client"

/**
 * TODO: BETA
 * Следует пересмотреть компонент,
 * добавь обработку нулевого количества элементов
 * и ошибки получения данных с сервера
 */

import { useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@heroui/button"
import type { Media } from "../model/types"
import { MediaCard } from "./media-card"

export type MediaCarouselProps = {
  items: Media[]
  titleSlot?: React.ReactNode
}

export function MediaCarousel(props: MediaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", watchDrag: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="border-b">
      <div className="container flex items-center justify-between border-x bg-background pt-4">
        {props.titleSlot && props.titleSlot}
        <div className="flex gap-2">
          <Button
            aria-label="Перемотать карусель назад"
            isIconOnly
            variant="faded"
            onPress={scrollPrev}
          >
            <ChevronLeft className="size-4" strokeWidth={2.5} />
          </Button>
          <Button
            aria-label="Перемотать карусель вперёд"
            isIconOnly
            variant="faded"
            onPress={scrollNext}
          >
            <ChevronRight className="size-4" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
      <div
        ref={emblaRef}
        className="container overflow-hidden border-x bg-background py-4"
      >
        <div className="flex gap-4">
          {props.items.map((media) => (
            <div key={media.id} className="flex-shrink-0 basis-[calc(20%-12.5px)]">
              <MediaCard media={media} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
