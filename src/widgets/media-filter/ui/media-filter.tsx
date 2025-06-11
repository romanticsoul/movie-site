import { GenreSelect, YearSelect, SortSelect } from "@/features/filter-selectors"

export function MediaFilter() {
  return (
    <section className="border-y">
      <div className="container border-x bg-background py-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          <GenreSelect mediaType="tv_series" />
          <YearSelect />
          <span className="col-span-2 hidden lg:block" />
          <SortSelect />
        </div>
      </div>
    </section>
  )
}
