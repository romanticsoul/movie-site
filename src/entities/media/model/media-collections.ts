import merge from "lodash/merge"
import type { MediaFull } from "./types"
import { getMedia } from "../api/getMedia"
import type { GetMediaParams, GetMediaResponse } from "../api/getMedia"

export type MediaCollection = {
  type: MediaFull["type"]
  slug: string
  parentSlug: string | null
  title: string
  chipTitle: string
  description: string
  getMedia: (filterParams?: GetMediaParams) => Promise<GetMediaResponse>
}

function mergeParams(p1: GetMediaParams, p2: GetMediaParams): GetMediaParams {
  const { where: p1Where, ...p1Rest } = p1
  const { where: p2Where, ...p2Rest } = p2
  return {
    where: merge(p1Where, p2Where),
    ...p1Rest,
    ...p2Rest,
  }
}

export const collections: MediaCollection[] = [
  // Основные
  {
    type: "movie",
    slug: "movie",
    parentSlug: null,
    title: "Фильмы смотреть онлайн",
    chipTitle: "Фильмы",
    description:
      "Смотрите фильмы онлайн: боевики, драмы, комедии и другие. Наслаждайтесь популярными кинокартинами в высоком качестве",
    async getMedia(params = {}) {
      return getMedia(mergeParams({ where: { type: "movie" } }, params))
    },
  },

  {
    type: "tv_series",
    slug: "tv_series",
    parentSlug: null,
    title: "Сериалы смотреть онлайн",
    chipTitle: "Сериалы",
    description:
      "Смотрите сериалы онлайн: захватывающие детективы, романтические истории, фантастические приключения и психологические драмы. Открывайте новые эпизоды и популярные сериалы в высоком качестве в удобное для вас время!",
    async getMedia(params = {}) {
      return getMedia(mergeParams({ where: { type: "tv_series" } }, params))
    },
  },
  {
    type: "cartoon",
    slug: "cartoon",
    parentSlug: null,
    title: "Мультфильмы смотреть онлайн",
    chipTitle: "Мультфильмы",
    description:
      "Мультфильмы для детей и взрослых: от классики до новинок. Смотрите популярные мультфильмы онлайн в высоком качестве и наслаждайтесь яркими персонажами и увлекательными историями",
    async getMedia(params = {}) {
      return getMedia(mergeParams({ where: { type: "cartoon" } }, params))
    },
  },
  {
    type: "animated_series",
    slug: "animated_series",
    parentSlug: null,
    title: "Анимационные сериалы смотреть онлайн",
    chipTitle: "Анимационные сериалы",
    description:
      "Анимационные сериалы: от комедий до приключений. Смотрите лучшие анимационные сериалы онлайн и погружайтесь в мир ярких персонажей и увлекательных историй",
    async getMedia(params = {}) {
      return getMedia(mergeParams({ where: { type: "animated_series" } }, params))
    },
  },
  {
    type: "anime",
    slug: "anime",
    parentSlug: null,
    title: "Аниме смотреть онлайн",
    chipTitle: "Аниме",
    description:
      "Аниме: от классики до новинок. Смотрите популярные аниме-сериалы и фильмы онлайн. Погружайтесь в мир анимации с увлекательными сюжетами и яркими персонажами",
    async getMedia(params = {}) {
      return getMedia(mergeParams({ where: { type: "anime" } }, params))
    },
  },
  // СЕРИАЛЫ
  {
    type: "tv_series",
    slug: "popular-series",
    parentSlug: "tv_series",
    title: "Новые сериалы смотреть онлайн",
    chipTitle: "Популярные новинки",
    description:
      "Смотрите популярные новинки сериалов 2025 года: яркие премьеры с оригинальными сюжетами, от захватывающих драм и фантастики до остроумных комедий и детективов. Открывайте свежие хиты с уникальными историями и звездным актерским составом!",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "tv_series",
              rating_imdb: { gte: 6 },
              rating_kp: { gte: 6 },
              votes_imdb: { gte: 10000 },
              year: { gte: new Date().getFullYear() - 1 },
            },
            orderBy: [
              { year: "desc" },
              { votes_kp: "desc" },
              { votes_imdb: "desc" },
              { rating_imdb: "desc" },
              { rating_kp: "desc" },
            ],
          },
          params,
        ),
      )
    },
  },
  {
    type: "tv_series",
    slug: "russian-series",
    parentSlug: "tv_series",
    title: "Российские сериалы смотреть онлайн",
    chipTitle: "Российские",
    description:
      "Коллекция российских сериалов — обширный выбор захватывающих историй, созданных отечественными режиссёрами. Сериалы разных жанров: от мелодрам до детективов. Высокое качество производства и интересные сюжеты не оставят вас равнодушными",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "tv_series",
              Country: { some: { name: "Россия" } },
            },
          },
          params,
        ),
      )
    },
  },
  {
    type: "tv_series",
    slug: "foreign-series",
    parentSlug: "tv_series",
    title: "Зарубежные сериалы смотреть онлайн",
    chipTitle: "Зарубежные",
    description:
      "Зарубежные сериалы: от драм до комедий. Смотрите популярные сериалы из США, Великобритании и других стран онлайн. Погружайтесь в истории, покорившие зрителей по всему миру",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "tv_series",
              Country: { none: { name: "Россия" } },
            },
          },
          params,
        ),
      )
    },
  },
  {
    type: "tv_series",
    slug: "turkish-series",
    parentSlug: "tv_series",
    title: "Турецкие сериалы смотреть онлайн",
    chipTitle: "Турция",
    description:
      "Турецкие сериалы: смотрите онлайн популярные мелодрамы, исторические драмы и романтические саги 2025 года в HD. Наслаждайтесь лучшими турецкими сериалами и погружайтесь в захватывающие истории",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "tv_series",
              Country: { some: { name: "Турция" } },
            },
          },
          params,
        ),
      )
    },
  },
  // {
  //   type: "tv_series",
  //   slug: "hbo-series",
  //   parentSlug: "tv_series",
  //   title: "Сериалы от HBO смотреть онлайн",
  //   chipTitle: "от HBO",
  //   description:
  //     "Сериалы HBO: от культовых драм до захватывающих триллеров. Смотрите популярные шоу от HBO онлайн и погружайтесь в истории, покорившие зрителей по всему миру",
  //   async getMedia(params = {}) {
  //     return getMedia(
  //       mergeParams(
  //         {
  //           where: {
  //             type: "tv_series",
  //             networks: { some: { name: { in: ["HBO", "Max"] } } },
  //           },
  //         },
  //         params,
  //       ),
  //     )
  //   },
  // },
  // {
  //   type: "tv_series",
  //   slug: "netflix-series",
  //   parentSlug: "tv_series",
  //   title: "Сериалы от Netflix смотреть онлайн",
  //   chipTitle: "от Netflix",
  //   description:
  //     "Сериалы Netflix: драмы, фантастика, триллеры и комедии. Смотрите популярные шоу от Netflix онлайн и открывайте захватывающие истории для любого настроения",
  //   async getMedia(params = {}) {
  //     return getMedia(
  //       mergeParams(
  //         {
  //           where: {
  //             type: "tv_series",
  //             networks: { some: { name: { in: ["Netflix"] } } },
  //           },
  //         },
  //         params,
  //       ),
  //     )
  //   },
  // },
  // {
  //   type: "tv_series",
  //   slug: "apple-series",
  //   parentSlug: "tv_series",
  //   title: "Сериалы от AppleTV+ смотреть онлайн",
  //   chipTitle: "от AppleTV+",
  //   description:
  //     "Оригинальные сериалы Apple TV+: инновационные сюжеты, звездный актерский состав и кинематографическое качество. Погружайтесь в уникальные истории — от фантастики до драм, созданные с акцентом на глубину и визуальную эстетику",
  //   async getMedia(params = {}) {
  //     return getMedia(
  //       mergeParams(
  //         {
  //           where: {
  //             type: "tv_series",
  //             networks: { some: { name: { in: ["Apple TV+"] } } },
  //           },
  //         },
  //         params,
  //       ),
  //     )
  //   },
  // },
  // {
  //   type: "tv_series",
  //   slug: "amazon-series",
  //   parentSlug: "tv_series",
  //   title: "Сериалы от Amazon Prime смотреть онлайн",
  //   chipTitle: "от Amazon Prime",
  //   description:
  //     "Оригинальные сериалы Amazon Prime: смелые сюжеты, масштабные постановки и уникальные истории. Исследуйте мир приключений, фантастики и драм с яркими персонажами и глубокими эмоциями, созданными для ценителей нестандартного контента",
  //   async getMedia(params = {}) {
  //     return getMedia(
  //       mergeParams(
  //         {
  //           where: {
  //             type: "tv_series",
  //             networks: { some: { name: { in: ["Amazon Prime Video"] } } },
  //           },
  //         },
  //         params,
  //       ),
  //     )
  //   },
  // },
  // ФИЛЬМЫ
  {
    type: "movie",
    slug: "russian-movies",
    parentSlug: "movie",
    title: "Российские фильмы смотреть онлайн",
    chipTitle: "Российские",
    description:
      "Оригинальные российские фильмы: исторические драмы, современные комедии и глубокие мелодрамы. Погружайтесь в уникальные сюжеты с яркими характерами и национальным колоритом, созданные талантливыми отечественными режиссерами",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "movie",
              Country: { some: { name: "Россия" } },
            },
          },
          params,
        ),
      )
    },
  },
  {
    type: "movie",
    slug: "foreign-movies",
    parentSlug: "movie",
    title: "Зарубежные фильмы смотреть онлайн",
    chipTitle: "Зарубежные",
    description:
      "Зарубежное кино: захватывающие блокбастеры, авторские драмы и культовые комедии. Откройте мир международного кинематографа с уникальными историями и выдающейся режиссурой из разных уголков планеты",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "movie",
              Country: { none: { name: "Россия" } },
            },
          },
          params,
        ),
      )
    },
  },
  {
    type: "movie",
    slug: "war-movies",
    parentSlug: "movie",
    title: "Фильмы про войну смотреть онлайн",
    chipTitle: "Про войну",
    description:
      "Фильмы про войну: смотрите онлайн лучшие военные драмы, боевики и исторические саги в HD. От подвигов ВОВ в «Сталинграде» до современных конфликтов и эпичных битв прошлого — погрузитесь в истории мужества и героизма!",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "movie",
              Genre: { some: { name: { in: ["военный", "боевик"] } } },
            },
          },
          params,
        ),
      )
    },
  },
  // АНИМЕ
  {
    type: "anime",
    slug: "anime-movies",
    parentSlug: "anime",
    title: "Аниме-фильмы смотреть онлайн",
    chipTitle: "Фильмы",
    description:
      "Аниме-фильмы: от эпичных приключений до трогательных драм. Смотрите лучшие полнометражные аниме онлайн в высоком качестве и наслаждайтесь уникальными сюжетами и потрясающей анимацией",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "anime",
              is_series: false,
            },
          },
          params,
        ),
      )
    },
  },
  {
    type: "anime",
    slug: "anime-series",
    parentSlug: "anime",
    title: "Аниме-сериалы смотреть онлайн",
    chipTitle: "Сериалы",
    description:
      "Аниме-сериалы: от динамичных сёнэнов до глубоких драм. Смотрите популярные многосерийные аниме онлайн и погружайтесь в захватывающие истории с яркими персонажами",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "anime",
              is_series: true,
            },
          },
          params,
        ),
      )
    },
  },
  {
    type: "anime",
    slug: "japan-anime",
    parentSlug: "anime",
    title: "Японское аниме смотреть онлайн",
    chipTitle: "Япония",
    description:
      "Японское аниме: классика и новинки из Страны восходящего солнца. Смотрите лучшие аниме-сериалы и фильмы онлайн, наслаждайтесь уникальным стилем и глубокими сюжетами",
    async getMedia(params = {}) {
      return getMedia(
        mergeParams(
          {
            where: {
              type: "anime",
              Country: { some: { name: "Япония" } },
            },
          },
          params,
        ),
      )
    },
  },
]
