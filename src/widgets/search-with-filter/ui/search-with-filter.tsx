import { SearchForm } from "@/features/search-form"
import { SortSelect } from "@/features/filter-selectors"

export function SearchWithFilter() {
  return (
    <section className="border-y">
      <div className="container grid grid-cols-5 gap-4 border-x bg-background py-2">
        <SearchForm
          inputProps={{
            size: "lg",
            radius: "full",
            placeholder: "Что будем смотреть сегодня?",
          }}
          buttonProps={{
            size: "lg",
            isIconOnly: false,
            children: "Найти",
            radius: "full",
          }}
          className="col-span-3"
        />
        <span />
        <SortSelect />
      </div>
    </section>
  )
}
