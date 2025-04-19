"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold blue-yellow-gradient-text">{t("common.leoClub")}</h3>
            <p className="text-sm text-muted-foreground">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary hover:text-primary/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-primary hover:text-primary/80">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary">
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="/social" className="text-muted-foreground hover:text-primary">
                  {t("nav.social")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t("footer.getInvolved")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join" className="text-muted-foreground hover:text-primary">
                  {t("footer.becomeMember")}
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-muted-foreground hover:text-primary">
                  {t("footer.volunteerOpportunities")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  {t("footer.donate")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  {t("footer.partnerWithUs")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t("footer.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                Leo Club Office
                <br />
                Main Street, Biratnagar
                <br />
                Province 1, Nepal
              </li>
              <li className="text-muted-foreground">info@leoclubbiratnagar.org</li>
              <li className="text-muted-foreground">+977 1234567890</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t("common.leoClubFull")}. {t("footer.rights")}
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-primary">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="/terms" className="hover:text-primary">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

