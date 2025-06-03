import { Link } from "@heroui/link"

export function NavigationMenu() {
  return (
    <nav className="col-span-5 hidden justify-center gap-6 md:flex lg:col-span-2 lg:justify-between">
      <NavigationLink href="/movie">Фильмы</NavigationLink>
      <NavigationLink href="/tv-series">Сериалы</NavigationLink>
      <NavigationLink href="/cartoon">Мультфильмы</NavigationLink>
      <NavigationLink href="/animated-series">Мультсериалы</NavigationLink>
      <NavigationLink href="/anime">Аниме</NavigationLink>
    </nav>
  )
}

function NavigationLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link size="sm" color="foreground" className="rounded-medium font-medium" href={href}>
      {children}
    </Link>
  )
}
