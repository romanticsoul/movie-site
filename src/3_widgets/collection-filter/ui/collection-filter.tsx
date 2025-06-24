import { SelectYear, SelectGenre, SelectSort } from "@features/filter-selectors"

export async function CollectionFilter() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <SelectGenre />
        <SelectYear />
        <span className="col-span-2 hidden lg:block" />
        <SelectSort />
      </div>
    </section>
  )
}
