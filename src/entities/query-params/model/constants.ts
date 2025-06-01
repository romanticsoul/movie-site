const CURRENT_YEAR = new Date().getFullYear()

export const YEARS = [
  { name: `2020 – ${CURRENT_YEAR}`, slug: `2020-${CURRENT_YEAR}` },
  { name: "2010 – 2020", slug: "2010-2020" },
  { name: "2000 – 2010", slug: "2000-2010" },
  { name: "1990 – 2000", slug: "1990-2000" },
  { name: "1980 – 1990", slug: "1980-1990" },
  { name: "до 1980", slug: "1980" },
] as const

export const SORTING = [
  { name: "По рейтингу", slug: "rate" },
  { name: "По количеству оценок", slug: "vote" },
  { name: "По дате выхода", slug: "year" },
] as const
