import { Button } from "@heroui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center gap-2 text-center">
      <span className="text-9xl font-black text-foreground/20">404</span>
      <h1 className="mt-2 max-w-xl text-pretty text-lg text-foreground/80">
        Мы не нашли такой страницы. Возможно, она была удалена — но у нас есть тысячи
        других фильмов и сериалов, которые стоят вашего внимания.
      </h1>
      <Button as={Link} size="lg" className="mt-6" href="/" color="primary">
        Вернуться на главную
      </Button>
    </section>
  )
}
