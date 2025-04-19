"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const routes = [
    {
      href: "/",
      label: t("nav.home"),
    },
    {
      href: "/about",
      label: t("nav.about"),
    },
    {
      href: "/projects",
      label: t("nav.projects"),
    },
    {
      href: "/join",
      label: t("nav.joinUs"),
    },
    {
      href: "/blog",
      label: t("nav.blog"),
    },
    {
      href: "/social",
      label: t("nav.social"),
    },
    {
      href: "/contact",
      label: t("nav.contact"),
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("common.toggleMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex h-full flex-col justify-between">
                <div className="px-2">
                  <div className="flex items-center justify-between pb-4 pt-2">
                    <Link
                      href="/"
                      className="flex items-center gap-2 font-bold blue-yellow-gradient-text"
                      onClick={() => setOpen(false)}
                    >
                      {t("common.leoClub")}
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">{t("common.close")}</span>
                    </Button>
                  </div>
                  <div className="flex flex-col space-y-3">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "text-muted-foreground transition-colors hover:text-foreground",
                          pathname === route.href && "text-foreground font-medium",
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t p-4">
                  <Link href="/join" onClick={() => setOpen(false)}>
                    <Button className="w-full">{t("nav.joinUs")}</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="hidden sm:inline-block blue-yellow-gradient-text">{t("common.leoClubFull")}</span>
            <span className="sm:hidden blue-yellow-gradient-text">{t("common.leoClub")}</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/join" className="hidden sm:block">
            <Button className="bg-primary hover:bg-primary/90">{t("nav.joinUs")}</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

