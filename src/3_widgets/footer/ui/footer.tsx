import { Link } from "@heroui/link"
import { ThemeSwitcher } from "./theme-switcher"

// TODO: Переписать компонент, добавить ссылки на страницы с политиками конфиденциальности и т.д.

export function Footer() {
  return (
    <footer className="container mt-8 py-8">
      <Link href="/" className="select-none rounded-medium text-2xl font-black text-inherit">
        LORDFILM
      </Link>
      <p className="mt-2 text-pretty text-foreground/60">
        Мы не загружаем и не храним видеофайлы — всё, что вы видите, собрано из открытых источников для вашего
        удобства и исключительно в ознакомительных целях.
      </p>
      <div className="mt-4 flex items-center justify-between gap-4 border-t-2 pt-4">
        <p className="text-foreground/60">© {new Date().getFullYear()} LORDFILM. Никаких прав.</p>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}
