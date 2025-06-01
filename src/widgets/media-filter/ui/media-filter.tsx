import { GenreSelect, YearSelect, SortSelect } from "@/features/filter-selectors"

export function MediaFilter() {
  return (
    <section className="border-y">
      <div className="container border-x bg-background py-4">
        <div className="grid grid-cols-5 gap-4">
          <GenreSelect />
          <YearSelect />
          <span className="col-span-2" />
          <SortSelect />
        </div>
      </div>
    </section>
  )
}
