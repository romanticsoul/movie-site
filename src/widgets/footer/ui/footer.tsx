import { Link } from "@heroui/link"

// TODO: Переписать компонент, добавить ссылки на страницы с политиками конфиденциальности и т.д.

export function Footer() {
  return (
    <footer className="container mt-8 py-16">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="select-none rounded-medium text-2xl font-black text-inherit"
        >
          LORDFILM
        </Link>
      </div>
      <p className="mt-4 text-pretty text-foreground/60">
        LORDFILM не загружает и не хранит видеофайлы — всё, что вы видите, собрано из
        открытых источников для вашего удобства и исключительно в ознакомительных целях.
      </p>
      <div className="mt-4 border-t-2 pt-4">
        <p className="text-foreground/60">
          © {new Date().getFullYear()} LORDFILM. Никаких прав.
        </p>
      </div>
    </footer>
  )
}
