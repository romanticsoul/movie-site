import { Link } from "@heroui/link"

export function NavigationMenu() {
  return (
    <nav className="col-span-2 flex justify-between gap-6">
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
