"use client"

import { Select, SelectItem, type SelectProps } from "@heroui/select"
import { YEAR_OPTIONS, GENRE_OPTIONS, useMediaQueryParams, SORT_OPTIONS } from "@entities/media"

const DefaultSelect = function (props: SelectProps) {
  return <Select size="md" radius="md" variant="flat" {...props} />
}

export const SelectYear = function (props: Omit<SelectProps, "children">) {
  const [{ f, t }, setParams] = useMediaQueryParams()
  const defaultSelect = f && t ? [`${f}-${t}`] : t ? [`${t}`] : []

  const handleSelect = function (event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    const years = value.split("-")
    setParams({
      f: years[0] && years[1] ? Number(years[0]) : null,
      t: years[0] && years[1] ? Number(years[1]) : years[0] ? Number(years[0]) : null,
    })
  }

  return (
    <DefaultSelect
      label="За всё время"
      aria-label="Выбор даты выхода"
      selectedKeys={defaultSelect}
      {...props}
      onChange={handleSelect}
    >
      {YEAR_OPTIONS.map((year) => (
        <SelectItem key={year.slug}>{year.name}</SelectItem>
      ))}
    </DefaultSelect>
  )
}

export const SelectGenre = function (props: Omit<SelectProps, "children">) {
  const [{ g }, setParams] = useMediaQueryParams()
  const defaultSelect = g ? [g] : []

  const handleSelect = function (event: React.ChangeEvent<HTMLSelectElement>) {
    setParams({ g: event.target.value || null })
  }

  return (
    <DefaultSelect
      label="Все жанры"
      aria-label="Выбор жанра"
      selectedKeys={defaultSelect}
      {...props}
      onChange={handleSelect}
    >
      {GENRE_OPTIONS.map((year) => (
        <SelectItem key={year.slug}>{year.name}</SelectItem>
      ))}
    </DefaultSelect>
  )
}

export const SelectSort = function (props: Omit<SelectProps, "children">) {
  const [{ s }, setParams] = useMediaQueryParams()
  const defaultSelect = s ? [s] : ["d"]

  const handleSelect = function (event: React.ChangeEvent<HTMLSelectElement>) {
    setParams({
      s: (event.target.value as (typeof SORT_OPTIONS)[number]["slug"]) || null,
    })
  }

  return (
    <DefaultSelect
      label="Сортировка"
      aria-label="Выбор сортировки"
      selectedKeys={defaultSelect}
      {...props}
      onChange={handleSelect}
    >
      {SORT_OPTIONS.map((year) => (
        <SelectItem key={year.slug}>{year.name}</SelectItem>
      ))}
    </DefaultSelect>
  )
}
