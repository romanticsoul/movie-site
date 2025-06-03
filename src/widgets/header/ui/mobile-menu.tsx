import FocusLock from "react-focus-lock"
import { Link } from "@heroui/link"
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import { SearchForm } from "@/features/search-form"
import { menu } from "../model/menu"
import { MenuIcon, XIcon } from "lucide-react"

type MobileMenuProps = {
  isMenuOpen: boolean
  onNavigate: () => void
}

export function MobileMenu({ onNavigate, isMenuOpen }: MobileMenuProps) {
  const Icon = isMenuOpen ? XIcon : MenuIcon

  return (
    <>
      <NavbarMenuToggle className="w-auto pl-8 md:hidden" icon={<Icon />} />

      <NavbarMenu className="overflow-y-scroll p-0">
        <NavbarMenuItem className="container size-full border-x py-4">
          <FocusLock group="header-group">
            <SearchForm
              onSubmit={onNavigate}
              className="mb-4"
              inputProps={{ placeholder: "Поиск по сайту" }}
            />

            {menu.map((item) => (
              <Link
                onPress={onNavigate}
                key={item.slug}
                href={item.slug}
                className="h-14 w-full border-b"
              >
                {item.name}
              </Link>
            ))}
          </FocusLock>
        </NavbarMenuItem>
      </NavbarMenu>
    </>
  )
}
