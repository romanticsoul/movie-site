"use client"

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs"
import type { Media, MediaType } from "@/entities/media"

type MediaBreadcrumbsProps = {
  media: Media
}

const TYPE_TITLE: Record<MediaType, string> = {
  movie: "Фильмы",
  "tv-series": "Сериалы",
  cartoon: "Мультфильмы",
  "animated-series": "Анимационные сериалы",
  anime: "Аниме",
}

export function MediaBreadcrumbs({ media }: MediaBreadcrumbsProps) {
  return (
    <section className="border-b">
      <Breadcrumbs variant="light" className="container border-x bg-background py-4">
        <BreadcrumbItem
          classNames={{
            item: "text-foreground/60",
          }}
          href="/"
        >
          Главная
        </BreadcrumbItem>
        <BreadcrumbItem
          classNames={{
            item: "text-foreground/60",
          }}
          href={`/${media.type}`}
        >
          {TYPE_TITLE[media.type]}
        </BreadcrumbItem>
        <BreadcrumbItem
          className="flex-1"
          classNames={{
            item: "line-clamp-1 whitespace-normal",
          }}
        >
          {media.title}
        </BreadcrumbItem>
      </Breadcrumbs>
    </section>
  )
}
