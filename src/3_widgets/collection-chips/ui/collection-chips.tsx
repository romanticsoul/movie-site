import { Chip } from "@heroui/chip"
import { Link } from "@heroui/link"
import { COLLECTIONS, type MediaCollection } from "@entities/media"

type CollectionChipsProps = {
  collection: MediaCollection
}

export async function CollectionChips({ collection }: CollectionChipsProps) {
  const similarCollections = COLLECTIONS.filter((c) => c.type === collection.type)
  if (!similarCollections.length) return null

  return (
    <section className="container flex flex-wrap gap-2 pt-8">
      {similarCollections.map((c) => (
        <Chip
          key={c.slug}
          as={Link}
          size="lg"
          href={c.slug === collection.slug ? c.parentSlug : c.slug}
          variant={c.slug === collection.slug ? "solid" : "bordered"}
          color={c.slug === collection.slug ? "primary" : "default"}
        >
          {c.chipTitle}
        </Chip>
      ))}
    </section>
  )
}
