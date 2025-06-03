"use client"

import { useState } from "react"
// import { FocusTrap } from "focus-trap-react"
import FocusLock from "react-focus-lock"

import { Navbar, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import { Link } from "@heroui/link"
import { SearchForm } from "@/features/search-form"
import { NavigationMenu } from "./navigation-menu"
import { Logo } from "./logo"
// import { MobileMenu } from "./mobile-menu"

// TODO: ПРОДОЛЖИТЬ

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <FocusLock group="header-group">
        <Navbar
          as={"div"}
          disableAnimation
          maxWidth="full"
          isBlurred={false}
          isBordered={false}
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="z-20 border-b"
          classNames={{
            wrapper: "h-16 items-stretch px-0 py-0",
          }}
        >
          <div className="container flex items-center justify-between gap-4 border-x md:grid md:grid-cols-8 lg:grid-cols-5">
            {/* <Logo /> */}
            <div>{JSON.stringify(isMenuOpen)}</div>

            <NavigationMenu />

            <span className="hidden lg:block" />
            <div className="col-span-2 hidden md:flex lg:col-span-1">
              <SearchForm inputProps={{ placeholder: "Поиск по сайту" }} />
            </div>

            {/* <MobileMenu /> */}

            {/*  */}

            <NavbarMenuToggle />

            <NavbarMenu className="px-4">
              <NavbarMenuItem>
                <FocusLock group="header-group">
                  <Link className="w-full" href="/movie" size="lg">
                    Фильмы
                  </Link>
                  <Link className="w-full" href="/tv-series" size="lg">
                    Сериалы
                  </Link>
                  <Link className="w-full" href="/cartoon" size="lg">
                    Мультфильмы
                  </Link>
                  <Link className="w-full" href="/animated-series" size="lg">
                    Мультсериалы
                  </Link>
                  <Link className="w-full" href="/anime" size="lg">
                    Аниме
                  </Link>
                </FocusLock>
              </NavbarMenuItem>
            </NavbarMenu>
          </div>
        </Navbar>
      </FocusLock>
    </>
  )
}

// СТАРАЯ ВЕРСИЯ
{
  /* <header className="sticky top-0 z-20 border-b bg-background">
        <div className="container flex h-16 items-center justify-between gap-4 border-x md:grid md:grid-cols-8 lg:grid-cols-5">
          <Logo />
          <NavigationMenu />
          <span className="hidden lg:block" />
          <div className="col-span-2 hidden md:flex lg:col-span-1">
            <SearchForm inputProps={{ placeholder: "Поиск по сайту" }} />
          </div>
          <MobileMenu />
        </div>
      </header> */
}
