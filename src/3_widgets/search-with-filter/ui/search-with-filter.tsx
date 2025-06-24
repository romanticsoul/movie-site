import { SearchForm } from "@features/search-form"

export function SearchWithFilter() {
  return (
    <section className="container grid gap-4 py-2 md:grid-cols-4 lg:grid-cols-5">
      <SearchForm
        inputProps={{
          size: "lg",
          placeholder: "Что будем смотреть сегодня?",
        }}
        buttonProps={{
          size: "lg",
          isIconOnly: false,
          children: "Найти",
        }}
        className="md:col-span-2 lg:col-span-3"
      />
    </section>
  )
}
