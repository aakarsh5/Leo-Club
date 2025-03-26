"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full space-y-4 p-6 rounded-xl bg-gradient-to-br from-background to-muted/50 border shadow-lg">
      <div className="space-y-2">
        <Badge className="mb-2 bg-accent text-accent-foreground">{t("home.newsletter.title")}</Badge>
        <h3 className="text-xl font-bold">{t("home.newsletter.heading")}</h3>
        <p className="text-muted-foreground text-balance">{t("home.newsletter.description")}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-full"
        />
        <Button
          type="submit"
          className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isLoading}
        >
          {isLoading ? t("common.subscribing") : t("common.subscribe")}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">{t("common.privacyNotice")}</p>
    </div>
  )
}

