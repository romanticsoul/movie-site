"use client"

import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs"
import type { MediaFull } from "@/entities/media"

type MediaBreadcrumbsProps = {
  media: MediaFull
}

export const TYPE_TITLE: Record<MediaFull["type"], string> = {
  movie: "Фильмы",
  tv_series: "Сериалы",
  cartoon: "Мультфильмы",
  animated_series: "Анимационные сериалы",
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
