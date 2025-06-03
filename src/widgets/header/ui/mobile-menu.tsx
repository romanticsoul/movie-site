"use client"

import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import FocusLock, { AutoFocusInside } from "react-focus-lock"
import { Link } from "@heroui/link"
// import { useState } from "react"

export function MobileMenu() {
  return (
    <>
      {/* <FocusLock> */}
      <NavbarMenuToggle />
      {/* <AutoFocusInside> */}
      <NavbarMenu className="px-4">
        <NavbarMenuItem>
          <Link className="w-full" href="/movie" size="lg">
            Фильмы
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/tv-series" size="lg">
            Сериалы
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/cartoon" size="lg">
            Мультфильмы
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/animated-series" size="lg">
            Мультсериалы
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full" href="/anime" size="lg">
            Аниме
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      {/* </AutoFocusInside> */}
      {/* </FocusLock> */}
    </>
  )
}
