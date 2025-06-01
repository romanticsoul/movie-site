"use client"

import { Select, SelectItem, type SelectProps } from "@heroui/select"
import { GENRES } from "@/entities/media"
import { YEARS, SORTING, useQueryParams } from "@/entities/query-params"
import type { QueryParams } from "@/entities/query-params"

type OmitSelectProps = Omit<
  SelectProps,
  "name" | "label" | "onChange" | "selectedKeys" | "children"
>

export function GenreSelect(props: OmitSelectProps) {
  return <FilterSelect name="genre" label="Выберите жанр" options={GENRES} {...props} />
}

export function SortSelect(props: OmitSelectProps) {
  return <FilterSelect name="sort" label="Сортировать" options={SORTING} {...props} />
}

export function YearSelect(props: OmitSelectProps) {
  return <FilterSelect name="year" label="Дата выхода" options={YEARS} {...props} />
}

/** */
type FilterSelectProps<T extends keyof QueryParams> = OmitSelectProps & {
  name: T
  label: string
  options: readonly { name: string; slug: string }[]
}

function FilterSelect<T extends keyof QueryParams>({
  name,
  label,
  options,
  ...props
}: FilterSelectProps<T>) {
  const [params, setParams] = useQueryParams()

  return (
    <Select
      name={name}
      label={label}
      size="sm"
      variant="faded"
      selectedKeys={params[name] ? [params[name]!] : []}
      onChange={(event) =>
        setParams({
          [name]: event.target.value,
        } as Pick<QueryParams, T>)
      }
      {...props}
    >
      {options.map(({ name, slug }) => (
        <SelectItem key={slug}>{name}</SelectItem>
      ))}
    </Select>
  )
}
