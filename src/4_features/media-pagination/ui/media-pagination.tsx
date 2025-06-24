"use client"

import { cn } from "@heroui/theme"
import { Link } from "@heroui/link"
import { Button } from "@heroui/button"
import {
  Pagination,
  PaginationItem,
  PaginationItemType,
  type PaginationItemRenderProps,
} from "@heroui/pagination"
import { mediaQueryParamSerializer, useMediaQueryParams, type QueryParams } from "@entities/media"

type MediaPaginationProps = {
  page: number
  totalPages: number
}

export function MediaPagination(props: MediaPaginationProps) {
  const [params] = useMediaQueryParams()

  return (
    <section className="container grid justify-center gap-4 py-4">
      <Pagination
        size="lg"
        showControls
        classNames={{
          wrapper: "relative z-0",
        }}
        total={props.totalPages}
        page={props.page || params.p || 1}
        renderItem={(item) => renderItem(item, params)}
      />
    </section>
  )
}

function renderItem(
  { key, ref, children, className, ...item }: PaginationItemRenderProps,
  params: QueryParams,
) {
  const href = mediaQueryParamSerializer({ ...params, p: item.page })
  const isDisabled = item.isActive || item.page === 0 || item.page > item.total

  const ariaLabel = (() => {
    switch (item.value) {
      case PaginationItemType.DOTS:
        return `Перепрыгнуть на ${item.page} страницу`
      case PaginationItemType.PREV:
        return "Вернуться на предыдущую страницу"
      case PaginationItemType.NEXT:
        return "Перейти на следующую страницу"
      default:
        return `Перейти на ${item.page} страницу`
    }
  })()

  return (
    <PaginationItem role={undefined} tabIndex={undefined} key={key}>
      <Button
        ref={ref}
        isIconOnly
        as={isDisabled ? "button" : Link}
        className={cn(className)}
        aria-label={ariaLabel}
        {...(isDisabled && { disabled: isDisabled })}
        {...(item.isActive && { "data-active": item.isActive })}
        {...(!isDisabled && { href })}
      >
        {children}
      </Button>
    </PaginationItem>
  )
}
