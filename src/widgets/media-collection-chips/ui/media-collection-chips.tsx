import { Chip } from "@heroui/chip"
import { Link } from "@heroui/link"
import { collections, type MediaFull } from "@/entities/media"

export type MediaCollectionChipsProps = {
  type: MediaFull["type"]
  slug: string
}

export function MediaCollectionChips({ slug, type }: MediaCollectionChipsProps) {
  const chips = collections.filter((c) => c.type === type && c.parentSlug)

  if (!chips.length) return null

  return (
    <section className="border-b">
      <div className="container flex flex-wrap gap-2 border-x bg-background py-2">
        {chips.map((chip) => (
          <Chip
            key={chip.slug}
            as={Link}
            href={chip.slug === slug ? chip.parentSlug : chip.slug}
            variant={chip.slug === slug ? "solid" : "bordered"}
            color={chip.slug === slug ? "primary" : "default"}
          >
            {chip.chipTitle}
          </Chip>
        ))}
      </div>
    </section>
  )
}
