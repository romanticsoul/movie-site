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
import type { MediaCompact } from "../model/types"
import { MediaCard } from "./media-card"

export type MediaCarouselProps = {
  items: MediaCompact[]
  titleSlot?: React.ReactNode
}

export function MediaCarousel(props: MediaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="container overflow-hidden">
      <div className="flex items-center justify-between pt-4">
        {props.titleSlot && props.titleSlot}
        <div className="flex gap-2">
          <Button
            size="lg"
            aria-label="Перемотать карусель назад"
            isIconOnly
            onPress={scrollPrev}
          >
            <ChevronLeft className="size-5" strokeWidth={2.5} />
          </Button>
          <Button
            size="lg"
            aria-label="Перемотать карусель вперёд"
            isIconOnly
            onPress={scrollNext}
          >
            <ChevronRight className="size-5" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
      <div ref={emblaRef} className="overflow-hidden py-4">
        <div className="flex gap-4">
          {props.items.map((media) => (
            <div
              key={media.id}
              className="flex-shrink-0 basis-[calc(50%-8px)] sm:basis-[calc(33%-7.5px)] md:basis-[calc(25%-12px)] lg:basis-[calc(20%-12.5px)]"
            >
              <MediaCard media={media} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
