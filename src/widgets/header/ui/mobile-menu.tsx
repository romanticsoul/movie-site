import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar"
import FocusLock from "react-focus-lock"
import { Link } from "@heroui/link"

export function MobileMenu() {
  return (
    <>
      <NavbarMenuToggle className="md:hidden" />

      <NavbarMenu className="px-4">
        {/* 
          TODO: Код обёрнут в один элемент <li/> (NavbarMenuItem) так компонент NavbarMenu не поддерживает работу 'as'
          и является элементом '<ul/>' а для улучшения показателей Lighthouse, 
          необходимо, чтобы в <ul/> или <ol/> были только компоненты списка <li/>
        */}
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
    </>
  )
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="w-full" href={href} size="lg">
      {children}
    </Link>
  )
}
