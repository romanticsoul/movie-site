import { Link } from "@heroui/link"
import { menu } from "../model/menu"

export function NavigationMenu() {
  return (
    <nav className="col-span-5 hidden justify-center gap-6 md:flex lg:col-span-2 lg:justify-between">
      {menu.map((item) => (
        <Link
          key={item.slug}
          color="foreground"
          className="rounded-medium font-medium"
          href={item.slug}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
