import type { Media } from "./types"
import type { GetMediaParams } from "../api/types"

export type MediaCollection = {
  type: Media["type"]
  slug: string
  parentSlug: string | null
  title: string
  chipTitle: string
  description: string
  params: GetMediaParams
}

export const COLLECTIONS: MediaCollection[] = [
  // Основные
  {
    type: "movie",
    slug: "movie",
    parentSlug: null,
    title: "Фильмы смотреть онлайн",
    chipTitle: "Все фильмы",
    description:
      "Смотрите фильмы онлайн: боевики, драмы, комедии и другие. Наслаждайтесь популярными кинокартинами в высоком качестве",
    params: {
      type: ["movie"],
      "genres.name": ["!документальный", "!мюзикл", "!музыка", "!концерт", "!реальное ТВ"],
    },
  },

  {
    type: "tv-series",
    slug: "tv-series",
    parentSlug: null,
    title: "Сериалы смотреть онлайн",
    chipTitle: "Все сериалы",
    description:
      "Смотрите сериалы онлайн бесплатно в хорошем качестве! От захватывающих боевиков и приключений до романтических историй и психологических драм. Лучшие сериалы 2025 года, а также проверенные временем хиты — доступно круглосуточно без регистрации.",
    params: {
      type: ["tv-series"],
      "genres.name": ["!документальный", "!мюзикл", "!музыка", "!концерт", "!реальное ТВ"],
    },
  },
  {
    type: "cartoon",
    slug: "cartoon",
    parentSlug: null,
    title: "Мультфильмы смотреть онлайн",
    chipTitle: "Все мультфильмы",
    description:
      "Мультфильмы для детей и взрослых: от классики до новинок. Смотрите популярные мультфильмы онлайн в высоком качестве и наслаждайтесь яркими персонажами и увлекательными историями",
    params: {
      type: ["cartoon"],
      "genres.name": ["!для взрослых"],
    },
  },
  {
    type: "animated-series",
    slug: "animated-series",
    parentSlug: null,
    title: "Мультсериалы смотреть онлайн",
    chipTitle: "Все мультсериалы",
    description:
      "Анимационные сериалы: от комедий до приключений. Смотрите лучшие анимационные сериалы онлайн и погружайтесь в мир ярких персонажей и увлекательных историй",
    params: {
      type: ["animated-series"],
      "genres.name": ["!для взрослых"],
    },
  },
  {
    type: "anime",
    slug: "anime",
    parentSlug: null,
    title: "Аниме смотреть онлайн",
    chipTitle: "Всё аниме",
    description:
      "Аниме: от классики до новинок. Смотрите популярные аниме-сериалы и фильмы онлайн. Погружайтесь в мир анимации с увлекательными сюжетами и яркими персонажами",
    params: {
      type: ["anime"],
      "genres.name": ["!для взрослых"],
    },
  },
  // СЕРИАЛЫ
  {
    type: "tv-series",
    slug: "russian-series",
    parentSlug: "tv-series",
    title: "Российские сериалы смотреть онлайн",
    chipTitle: "Российские",
    description:
      "Коллекция российских сериалов — обширный выбор захватывающих историй, созданных отечественными режиссёрами. Сериалы разных жанров: от мелодрам до детективов. Высокое качество производства и интересные сюжеты не оставят вас равнодушными",
    params: {
      type: ["tv-series"],
      "countries.name": ["Россия"],
      "genres.name": ["!документальный", "!мюзикл"],
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
    params: {
      type: ["tv-series"],
      "countries.name": ["!Россия"],
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
    params: {
      type: ["tv-series"],
      "countries.name": ["Турция"],
    },
  },
  {
    type: "tv-series",
    slug: "hbo-series",
    parentSlug: "tv-series",
    title: "Сериалы от HBO смотреть онлайн",
    chipTitle: "HBO",
    description:
      "Сериалы HBO: от культовых драм до захватывающих триллеров. Смотрите популярные шоу от HBO онлайн и погружайтесь в истории, покорившие зрителей по всему миру",
    params: {
      type: ["tv-series"],
      "networks.items.name": ["HBO", "Max"],
    },
  },
  {
    type: "tv-series",
    slug: "netflix-series",
    parentSlug: "tv-series",
    title: "Сериалы от Netflix смотреть онлайн",
    chipTitle: "Netflix",
    description:
      "Сериалы Netflix: драмы, фантастика, триллеры и комедии. Смотрите популярные шоу от Netflix онлайн и открывайте захватывающие истории для любого настроения",
    params: {
      type: ["tv-series"],
      "networks.items.name": ["Netflix"],
    },
  },
  {
    type: "tv-series",
    slug: "apple-series",
    parentSlug: "tv-series",
    title: "Сериалы от AppleTV+ смотреть онлайн",
    chipTitle: "AppleTV+",
    description:
      "Оригинальные сериалы Apple TV+: инновационные сюжеты, звездный актерский состав и кинематографическое качество. Погружайтесь в уникальные истории — от фантастики до драм, созданные с акцентом на глубину и визуальную эстетику",
    params: {
      type: ["tv-series"],
      "networks.items.name": ["Apple TV+"],
    },
  },
  {
    type: "tv-series",
    slug: "prime-series",
    parentSlug: "tv-series",
    title: "Сериалы от Amazon Prime смотреть онлайн",
    chipTitle: "Amazon Prime",
    description:
      "Оригинальные сериалы Amazon Prime: смелые сюжеты, масштабные постановки и уникальные истории. Исследуйте мир приключений, фантастики и драм с яркими персонажами и глубокими эмоциями, созданными для ценителей нестандартного контента",
    params: {
      type: ["tv-series"],
      "networks.items.name": ["Amazon Prime Video"],
    },
  },
  {
    type: "tv-series",
    slug: "disney-series",
    parentSlug: "tv-series",
    title: "Сериалы от Disney+ смотреть онлайн",
    chipTitle: "Disney+",
    description:
      "Смотрите лучшие сериалы от Disney+ онлайн в хорошем качестве. Хиты Marvel, вселенная «Звёздных войн», анимация Pixar и семейные приключения без регистрации и бесплатно. Оригинальные проекты Disney для всей семьи — только на русском и в любое время",
    params: {
      type: ["tv-series"],
      "networks.items.name": ["Disney+"],
    },
  },
  {
    type: "tv-series",
    slug: "hulu-series",
    parentSlug: "tv-series",
    title: "Сериалы от Hulu смотреть онлайн",
    chipTitle: "Hulu",
    description:
      "Лучшие сериалы от Hulu — смотрите онлайн без регистрации. Остросюжетные триллеры, провокационные драмы и оригинальные комедии с высоким рейтингом. Эксклюзивный контент Hulu для ценителей качественного американского телевидения в хорошем качестве и с русской озвучкой",
    params: {
      type: ["tv-series"],
      "networks.items.name": ["Hulu"],
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
    params: {
      type: ["movie"],
      "countries.name": ["Россия"],
      "genres.name": ["!документальный"],
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
    params: {
      type: ["movie"],
      "countries.name": ["!Россия"],
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
    params: {
      type: ["movie"],
      "genres.name": ["+военный"],
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
    params: {
      type: ["anime"],
      isSeries: ["false"],
      "genres.name": ["!для взрослых"],
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
    params: {
      type: ["anime"],
      isSeries: ["true"],
      "genres.name": ["!для взрослых"],
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
    params: {
      type: ["anime"],
      "countries.name": ["Япония"],
      "genres.name": ["!для взрослых"],
    },
  },
]
