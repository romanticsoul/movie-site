"use client"

import { useState } from "react"
import FocusLock from "react-focus-lock"
import { Link } from "@heroui/link"
import { Navbar } from "@heroui/navbar"
import { SearchForm } from "@/features/search-form"
import { NavigationMenu } from "./navigation-menu"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar
      as={"div"}
      disableAnimation
      maxWidth="full"
      isBlurred={false}
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="z-20"
      classNames={{
        wrapper: "h-16 items-stretch border-b px-0 py-0",
      }}
    >
      <FocusLock
        group="header-group"
        disabled={!isMenuOpen}
        className="container flex items-center justify-between gap-4 border-x md:grid md:grid-cols-8 lg:grid-cols-5"
      >
        <Link
          onPress={() => setIsMenuOpen(false)}
          href="/"
          className="mr-auto select-none rounded-medium text-lg font-black"
        >
          LORDFILM
        </Link>

        <NavigationMenu />

        <span className="hidden lg:block" />
        <div className="col-span-2 hidden md:flex lg:col-span-1">
          <SearchForm inputProps={{ placeholder: "Поиск по сайту" }} />
        </div>

        <MobileMenu onNavigate={() => setIsMenuOpen(false)} />
      </FocusLock>
    </Navbar>
  )
}
