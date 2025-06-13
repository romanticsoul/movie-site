"use client"
import { Button, ButtonProps } from "@heroui/button"
import { Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitcher(props: ButtonProps) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      isIconOnly
      size="lg"
      radius="full"
      variant="light"
      aria-label="Переключить тему"
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      {...props}
    >
      <Moon strokeWidth={2.5} className="h-5 w-5" />
    </Button>
  )
}
