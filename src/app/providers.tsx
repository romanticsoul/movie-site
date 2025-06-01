"use client"

import * as React from "react"
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
      <HeroUIProvider disableRipple navigate={router.push}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </HeroUIProvider>
    </NuqsAdapter>
  )
}
