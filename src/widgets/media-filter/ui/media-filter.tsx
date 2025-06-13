import { GenreSelect, YearSelect, SortSelect } from "@/features/filter-selectors"
import { MediaFull } from "@/entities/media"

export function MediaFilter({ mediaType }: { mediaType?: MediaFull["type"] }) {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <GenreSelect mediaType={mediaType} />
        <YearSelect />
        <span className="col-span-2 hidden lg:block" />
        <SortSelect />
      </div>
    </section>
  )
}
