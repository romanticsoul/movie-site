"use client"

import { Tab, Tabs, TabsProps } from "@heroui/tabs"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeSwitcher(props?: TabsProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Tabs
      size="lg"
      selectedKey={theme}
      onSelectionChange={(key) => setTheme(key as string)}
      aria-label="Переключить тему"
      {...props}
    >
      <Tab key="dark" title={<Moon className="size-5" strokeWidth={2.5} />} />
      <Tab key="light" title={<Sun className="size-5" strokeWidth={2.5} />} />
      <Tab key="system" title={<Monitor className="size-5" strokeWidth={2.5} />} />
    </Tabs>
  )
}
