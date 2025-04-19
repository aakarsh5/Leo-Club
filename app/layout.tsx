import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LanguageProvider } from "@/components/language-provider"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Leo Club of Biratnagar Central Megha",
  description:
    "Official website of Leo Club of Biratnagar Central Megha, an NGO focused on community service in Biratnagar, Nepal.",
  generator: 'v0.dev',
  lang: 'ne'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ne" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <WhatsAppButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

