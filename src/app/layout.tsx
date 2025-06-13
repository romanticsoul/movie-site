import "./globals.css"
import clsx from "clsx"
// import { Commissioner } from "next/font/google"
import { Roboto_Condensed } from "next/font/google"
import { Header } from "@/widgets/header"
import { Footer } from "@/widgets/footer"
import { YandexMetrika } from "@/shared/lib/yandexMetrika"
import { Providers } from "./providers"

const fontSans = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <YandexMetrika />
      </head>
      <body
        className={clsx(
          // bg-pattern
          "min-h-screen font-sans antialiased",
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
