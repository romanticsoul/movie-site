import Script from "next/script"
import type { TVSeries } from "schema-dts"
import type { MediaFull } from "@/entities/media"

export function MediaJsonLdSchema({ media }: { media: MediaFull }) {
  const jsonLd: TVSeries = {
    "@type": "TVSeries",
    name: media.title,
    description: media.description,
    ...(media.slogan && { alternativeName: media.slogan }),
    genre: media.Genre.map((g) => g.name),
    countryOfOrigin: media.Country.map((c) => ({
      "@type": "Country",
      name: c.name,
    })),
    actor: media.PersonInMedia.map((p) => ({
      "@type": "Person",
      name: p.Person.name,
      ...(p.Person.photo && { image: p.Person.photo }),
    })),
    image: media.poster,
    ...(media.backdrop && { thumbnailUrl: media.backdrop }),
    ...(media.rating_age && { contentRating: `Rated ${media.rating_age}+` }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: media.rating_kp,
      bestRating: 10,
      worstRating: 0,
      ratingCount: media.votes_kp,
    },
    // ...(media.created_at && { datePublished: media.created_at.toISOString() }),
    // ...(media.updated_at && { dateModified: media.updated_at.toISOString() }),
    ...(media.series_length && {
      duration: `PT${media.series_length}M`, // Формат ISO 8601 для длительности
    }),
  }

  return (
    <Script
      id={`${media.id}-schema`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    ></Script>
  )
}
