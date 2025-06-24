"use client"

import { HeroUIProvider } from "@heroui/system"
import { useRouter } from "next/navigation"
import { ThemeProvider } from "next-themes"
import { NuqsAdapter } from "nuqs/adapters/next/app"

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter()

  return (
    <NuqsAdapter>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <HeroUIProvider disableRipple navigate={router.push}>
          {children}
        </HeroUIProvider>
      </ThemeProvider>
    </NuqsAdapter>
  )
}
