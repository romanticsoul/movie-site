"use client"

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs"
import type { Media } from "@entities/media"

type MediaBreadcrumbsProps = {
  media: Media
}

export const TYPE_TITLE: Record<Media["type"], string> = {
  movie: "Фильмы",
  "tv-series": "Сериалы",
  cartoon: "Мультфильмы",
  "animated-series": "Анимационные сериалы",
  anime: "Аниме",
}

export function MediaBreadcrumbs({ media }: MediaBreadcrumbsProps) {
  return (
    <Breadcrumbs as="section" size="lg" variant="light" className="container py-4">
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
  )
}
