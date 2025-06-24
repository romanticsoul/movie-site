import { Link } from "@heroui/link"
import { MENU } from "./constants"

export function NavigationMenu() {
  return (
    <nav className="col-span-5 hidden justify-center gap-6 md:flex lg:col-span-2 lg:justify-between">
      {MENU.map((item) => (
        <Link key={item.slug} color="foreground" className="rounded-medium font-medium" href={item.slug}>
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
