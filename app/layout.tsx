import clsx from "clsx"
import { Header } from "@widgets/header"
import { Footer } from "@widgets/footer"
import { YandexMetrika } from "../src/6_shared/lib/yandexMetrika"
import { Providers } from "@app/providers"
import { fontSans } from "@app/styles/font"
import "@app/styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <YandexMetrika />
      </head>
      <body className={clsx("font-sans antialiased", fontSans.variable)}>
        <Providers>
          <Header />
          <main className="relative grid flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
