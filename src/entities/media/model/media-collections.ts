import type { MediaType } from "./types"
import {
  fetchMediaList,
  type FetchParams,
  type FetchListResponse,
} from "../api/fetchMediaList"

type MediaCollection = {
  type: MediaType
  slug: string
  parentSlug: string | null
  title: string
  chipTitle: string
  description: string
  getMedia: (filterParams?: FetchParams) => Promise<FetchListResponse>
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
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["movie"],
        "genres.name": ["!документальный", "!музыка"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "tv-series",
    parentSlug: null,
    title: "Сериалы смотреть онлайн",
    chipTitle: "Сериалы",
    description:
      "Смотрите сериалы онлайн: захватывающие детективы, романтические истории, фантастические приключения и психологические драмы. Открывайте новые эпизоды и популярные сериалы в высоком качестве в удобное для вас время!",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "genres.name": ["!документальный", "!музыка"],
        ...filterParams,
      })
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
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["cartoon"],
        ...filterParams,
      })
    },
  },
  {
    type: "animated-series",
    slug: "animated-series",
    parentSlug: null,
    title: "Анимационные сериалы смотреть онлайн",
    chipTitle: "Анимационные сериалы",
    description:
      "Анимационные сериалы: от комедий до приключений. Смотрите лучшие анимационные сериалы онлайн и погружайтесь в мир ярких персонажей и увлекательных историй",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["animated-series"],
        ...filterParams,
      })
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
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["anime"],
        ...filterParams,
      })
    },
  },
  // СЕРИАЛЫ
  {
    type: "tv-series",
    slug: "popular-series",
    parentSlug: "tv-series",
    title: "Новые сериалы смотреть онлайн",
    chipTitle: "Популярные новинки",
    description:
      "Смотрите популярные новинки сериалов 2025 года: яркие премьеры с оригинальными сюжетами, от захватывающих драм и фантастики до остроумных комедий и детективов. Открывайте свежие хиты с уникальными историями и звездным актерским составом!",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "rating.imdb": ["7-10"],
        "rating.kp": ["7-10"],
        "votes.imdb": ["10000-6666666"],
        year: ["2024-2025"],
        sortField: ["year", "votes.kp", "votes.imdb", "rating.imdb", "rating.kp"],
        sortType: ["-1", "-1", "-1", "-1", "-1"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "russian-series",
    parentSlug: "tv-series",
    title: "Российские сериалы смотреть онлайн",
    chipTitle: "Российские",
    description:
      "Коллекция российских сериалов — обширный выбор захватывающих историй, созданных отечественными режиссёрами. Сериалы разных жанров: от мелодрам до детективов. Высокое качество производства и интересные сюжеты не оставят вас равнодушными",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "countries.name": ["Россия"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "foreign-series",
    parentSlug: "tv-series",
    title: "Зарубежные сериалы смотреть онлайн",
    chipTitle: "Зарубежные",
    description:
      "Зарубежные сериалы: от драм до комедий. Смотрите популярные сериалы из США, Великобритании и других стран онлайн. Погружайтесь в истории, покорившие зрителей по всему миру",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "countries.name": ["!Россия"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "turkish-series",
    parentSlug: "tv-series",
    title: "Турецкие сериалы смотреть онлайн",
    chipTitle: "Турция",
    description:
      "Турецкие сериалы: смотрите онлайн популярные мелодрамы, исторические драмы и романтические саги 2025 года в HD. Наслаждайтесь лучшими турецкими сериалами и погружайтесь в захватывающие истории",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "countries.name": ["Турция"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "hbo-series",
    parentSlug: "tv-series",
    title: "Сериалы от HBO смотреть онлайн",
    chipTitle: "от HBO",
    description:
      "Сериалы HBO: от культовых драм до захватывающих триллеров. Смотрите популярные шоу от HBO онлайн и погружайтесь в истории, покорившие зрителей по всему миру",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "networks.items.name": ["HBO", "Max"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "netflix-series",
    parentSlug: "tv-series",
    title: "Сериалы от Netflix смотреть онлайн",
    chipTitle: "от Netflix",
    description:
      "Сериалы Netflix: драмы, фантастика, триллеры и комедии. Смотрите популярные шоу от Netflix онлайн и открывайте захватывающие истории для любого настроения",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "networks.items.name": ["Netflix"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "apple-series",
    parentSlug: "tv-series",
    title: "Сериалы от AppleTV+ смотреть онлайн",
    chipTitle: "от AppleTV+",
    description:
      "Оригинальные сериалы Apple TV+: инновационные сюжеты, звездный актерский состав и кинематографическое качество. Погружайтесь в уникальные истории — от фантастики до драм, созданные с акцентом на глубину и визуальную эстетику",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "networks.items.name": ["Apple TV+"],
        ...filterParams,
      })
    },
  },
  {
    type: "tv-series",
    slug: "amazon-series",
    parentSlug: "tv-series",
    title: "Сериалы от Amazon Prime смотреть онлайн",
    chipTitle: "от Amazon Prime",
    description:
      "Оригинальные сериалы Amazon Prime: смелые сюжеты, масштабные постановки и уникальные истории. Исследуйте мир приключений, фантастики и драм с яркими персонажами и глубокими эмоциями, созданными для ценителей нестандартного контента",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["tv-series"],
        "networks.items.name": ["Amazon Prime Video"],
        ...filterParams,
      })
    },
  },
  // ФИЛЬМЫ
  {
    type: "movie",
    slug: "russian-movies",
    parentSlug: "movie",
    title: "Российские фильмы смотреть онлайн",
    chipTitle: "Российские",
    description:
      "Оригинальные российские фильмы: исторические драмы, современные комедии и глубокие мелодрамы. Погружайтесь в уникальные сюжеты с яркими характерами и национальным колоритом, созданные талантливыми отечественными режиссерами",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["movie"],
        "countries.name": ["Россия"],
        ...filterParams,
      })
    },
  },
  {
    type: "movie",
    slug: "foreign-movies",
    parentSlug: "movie",
    title: "Зарубежные фильмы смотреть онлайн",
    chipTitle: "Зарубежные",
    description:
      "Зарубежное кино: захватывающие блокбастеры, авторские драмы и культовые комедии. Откройте мир международного кинематографа с уникальными историями и выдающейся режиссурой из разных уголков планеты.",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["movie"],
        "countries.name": ["!Россия"],
        ...filterParams,
      })
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
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["movie"],
        "genres.name": ["+военный", "+боевик"],
        ...filterParams,
      })
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
      "Аниме: от классики до новинок. Смотрите популярные аниме-сериалы и фильмы онлайн. Погружайтесь в мир анимации с увлекательными сюжетами и яркими персонажами",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["anime"],
        isSeries: ["false"],
        ...filterParams,
      })
    },
  },
  {
    type: "anime",
    slug: "anime-series",
    parentSlug: "anime",
    title: "Аниме-сериалы смотреть онлайн",
    chipTitle: "Сериалы",
    description:
      "Аниме: от классики до новинок. Смотрите популярные аниме-сериалы и фильмы онлайн. Погружайтесь в мир анимации с увлекательными сюжетами и яркими персонажами",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["anime"],
        isSeries: ["true"],
        ...filterParams,
      })
    },
  },
  {
    type: "anime",
    slug: "japan-anime",
    parentSlug: "anime",
    title: "Японское аниме смотреть онлайн",
    chipTitle: "Япония",
    description:
      "Аниме: от классики до новинок. Смотрите популярные аниме-сериалы и фильмы онлайн. Погружайтесь в мир анимации с увлекательными сюжетами и яркими персонажами",
    async getMedia(filterParams = {}) {
      return fetchMediaList({
        type: ["anime"],
        "countries.name": ["Япония"],
        ...filterParams,
      })
    },
  },
]
