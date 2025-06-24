import { Media } from "./types"

export const TYPE_LABEL: Record<Media["type"], string> = {
  movie: "фильм",
  "tv-series": "сериал",
  cartoon: "мультфильм",
  "animated-series": "мультсериал",
  anime: "аниме",
}

const CURRENT_YEAR = new Date().getFullYear()
export const YEAR_OPTIONS = [
  { name: `2020 – ${CURRENT_YEAR}`, slug: `2020-${CURRENT_YEAR}` },
  { name: "2010 – 2020", slug: "2010-2020" },
  { name: "2000 – 2010", slug: "2000-2010" },
  { name: "1990 – 2000", slug: "1990-2000" },
  { name: "1980 – 1990", slug: "1980-1990" },
  { name: "до 1980", slug: "1980" },
] as const

export const SORT_OPTIONS = [
  { slug: "d", name: "По умолчанию" },
  { slug: "r", name: "По рейтингу" },
  { slug: "y", name: "По дате выхода" },
] as const

export const GENRE_OPTIONS = [
  { name: "биография", slug: "biografiya" },
  { name: "боевик", slug: "boevik" },
  { name: "вестерн", slug: "vestern" },
  { name: "военный", slug: "voennyy" },
  { name: "детектив", slug: "detektiv" },
  { name: "детский", slug: "detskiy" },
  { name: "для взрослых", slug: "dlya-vzroslyh" },
  { name: "документальный", slug: "dokumentalnyy" },
  { name: "драма", slug: "drama" },
  { name: "игра", slug: "igra" },
  { name: "история", slug: "istoriya" },
  { name: "комедия", slug: "komediya" },
  { name: "концерт", slug: "koncert" },
  { name: "короткометражка", slug: "korotkometrazhka" },
  { name: "криминал", slug: "kriminal" },
  { name: "мелодрама", slug: "melodrama" },
  { name: "музыка", slug: "muzyka" },
  { name: "мюзикл", slug: "myuzikl" },
  { name: "новости", slug: "novosti" },
  { name: "приключения", slug: "priklyucheniya" },
  { name: "реальное ТВ", slug: "realnoe-TV" },
  { name: "семейный", slug: "semeynyy" },
  { name: "спорт", slug: "sport" },
  { name: "ток-шоу", slug: "tok-shou" },
  { name: "триллер", slug: "triller" },
  { name: "ужасы", slug: "uzhasy" },
  { name: "фантастика", slug: "fantastika" },
  { name: "фильм-нуар", slug: "film-nuar" },
  { name: "фэнтези", slug: "fentezi" },
  { name: "церемония", slug: "ceremoniya" },
] as const

export const COUNTRY_OPTIONS = [
  { name: "США", slug: "usa" },
  { name: "Россия", slug: "russia" },
  { name: "СССР", slug: "ussr" },
  { name: "Индия", slug: "india" },
  { name: "Турция", slug: "turkey" },
  { name: "Великобритания", slug: "united-kingdom" },
  { name: "Франция", slug: "france" },
  { name: "Германия", slug: "germany" },
  { name: "Италия", slug: "italy" },
  { name: "Япония", slug: "japan" },
  { name: "Южная Корея", slug: "south-korea" },
  { name: "Китай", slug: "china" },
  { name: "Канада", slug: "canada" },
  { name: "Австралия", slug: "australia" },
  { name: "Испания", slug: "spain" },
  { name: "Мексика", slug: "mexico" },
  { name: "Бразилия", slug: "brazil" },
] as const
