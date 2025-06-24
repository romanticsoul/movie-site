"use client"

import { useState } from "react"
import FocusLock from "react-focus-lock"
import { Link } from "@heroui/link"
import { Navbar } from "@heroui/navbar"
import { SearchForm } from "../../../4_features/search-form"
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
      className="z-20 bg-background"
      classNames={{
        wrapper: "items-stretch px-0",
      }}
    >
      <FocusLock
        group="header-group"
        disabled={!isMenuOpen}
        className="container flex items-center justify-between gap-4 md:grid md:grid-cols-8 lg:grid-cols-5"
      >
        <Link
          onPress={() => setIsMenuOpen(false)}
          href="/"
          className="col-span-1 mr-auto select-none rounded-medium text-2xl font-black text-inherit"
        >
          LORDFILM
        </Link>

        <NavigationMenu />

        <span className="hidden lg:block" />

        <SearchForm
          inputProps={{ placeholder: "Поиск", size: "lg" }}
          buttonProps={{ size: "lg" }}
          className="col-span-2 flex gap-2 max-md:hidden lg:col-span-1"
        />

        <MobileMenu isMenuOpen={isMenuOpen} onNavigate={() => setIsMenuOpen(false)} />
      </FocusLock>
    </Navbar>
  )
}
