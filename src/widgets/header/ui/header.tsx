import { Link } from "@heroui/link"
import { SearchForm } from "@/features/search-form"
// import { SearchInput } from "./search-input"
import { NavigationMenu } from "./navigation-menu"

export function Header() {
  return (
    <>
      {/* <div className="container h-40 border-x"></div> */}
      <header className="sticky top-0 z-20 border-y bg-background">
        <div className="container grid h-16 grid-cols-5 items-center gap-4 border-x">
          <Link
            href="/"
            className="mr-auto select-none rounded-medium text-lg font-black"
          >
            LORDFILM
          </Link>
          <NavigationMenu />
          <span />
          <SearchForm
            className="col-span-1"
            inputProps={{ placeholder: "Поиск по сайту" }}
          />
        </div>
      </header>
    </>
  )
}
