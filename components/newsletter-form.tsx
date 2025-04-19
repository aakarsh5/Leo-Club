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
    <div 
      className="w-full space-y-4 p-6 rounded-xl shadow-lg relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/9642864/pexels-photo-9642864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/70 mix-blend-multiply"></div>
      
      <div className="relative z-10 space-y-2">
        <Badge className="mb-2 bg-white text-primary">{t("home.newsletter.title")}</Badge>
        <h3 className="text-xl font-bold text-white">{t("home.newsletter.heading")}</h3>
        <p className="text-white/90 text-balance">{t("home.newsletter.description")}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-full bg-white/90 placeholder:text-gray-600"
        />
        <Button
          type="submit"
          className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          disabled={isLoading}
        >
          {isLoading ? t("common.subscribing") : t("common.subscribe")}
        </Button>
      </form>
      
      <p className="relative z-10 text-xs text-white/80">{t("common.privacyNotice")}</p>
    </div>
  )
}

