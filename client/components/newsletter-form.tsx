"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import emailjs from "@emailjs/browser"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Use EmailJS to send the newsletter subscription
      const templateParams = {
        email: email,
        subscribe_date: new Date().toISOString(),
      }

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      if (result.text === "OK") {
        toast({
          title: t("home.newsletter.successTitle") || "Success!",
          description: t("home.newsletter.successMessage") || "You've been subscribed to our newsletter.",
        })
        setEmail("")
      } else {
        throw new Error("Newsletter subscription failed")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      toast({
        title: t("home.newsletter.errorTitle") || "Error",
        description: t("home.newsletter.errorMessage") || "Failed to subscribe. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
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
          placeholder={t("home.newsletter.emailPlaceholder") || "Enter your email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-full"
          name="email"
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

