"use client"

import { useLanguage } from "@/components/language-provider"
import { FacebookPosts } from "@/components/facebook-posts"
import { Separator } from "@/components/ui/separator"

export default function SocialPage() {
  const { t } = useLanguage()

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t("blog.socialMedia")}</h1>
          <p className="text-muted-foreground md:text-lg max-w-[700px] mx-auto">
            {t("blog.description")}
          </p>
        </div>

        <Separator className="my-8" />

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center mb-8">{t("blog.facebookUpdates")}</h2>
          <FacebookPosts />
        </section>
      </div>
    </div>
  )
} 