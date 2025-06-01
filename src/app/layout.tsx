import "./globals.css"
import clsx from "clsx"
import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { Providers } from "./providers"

const fontSans = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  other: {
    "yandex-verification": "21c2bd8cacaa7eda",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="ru" className="overflow-y-scroll">
      <head />
      <body
        className={clsx(
          "bg-pattern min-h-screen font-sans antialiased",
          fontSans.className,
        )}
      >
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
