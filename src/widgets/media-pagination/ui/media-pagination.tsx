"use client"

import { usePathname } from "next/navigation"
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"
import { Pagination, PaginationItem, PaginationItemType } from "@heroui/pagination"
import type { PaginationItemRenderProps } from "@heroui/pagination"
import { useQueryParams, queryParamsSerializer } from "@/entities/query-params"
import type { QueryParams } from "@/entities/query-params"
import { cn } from "@heroui/theme"

export type MediaPaginationProps = {
  page: number
  total: number
}

export function MediaPagination(props: MediaPaginationProps) {
  const pathname = usePathname()
  const [params] = useQueryParams()

  return (
    <section className="container grid justify-center gap-4 py-4">
      <Pagination
        size="lg"
        showControls
        classNames={{
          wrapper: "relative z-0",
        }}
        total={props.total}
        page={props.page || params.page || 1}
        renderItem={(item) => renderItem(item, params, pathname)}
      />
    </section>
  )
}

function renderItem(
  { key, ref, children, className, ...item }: PaginationItemRenderProps,
  params: QueryParams,
  pathname: string,
) {
  const serializedHref = queryParamsSerializer({ ...params, page: item.page })
  const href = serializedHref || pathname
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
