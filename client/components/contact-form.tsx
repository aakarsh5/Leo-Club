"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "",
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      if (result.text === "OK") {
        toast({
          title: t("contact.form.successTitle"),
          description: t("contact.form.successMessage"),
        })
        // Reset form
        formRef.current?.reset()
      } else {
        throw new Error("Email sending failed")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: t("contact.form.errorTitle"),
        description: t("contact.form.errorMessage"),
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{t("contact.form.name")}</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t("contact.form.email")}</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">{t("contact.form.subject")}</Label>
        <Select name="subject">
          <SelectTrigger>
            <SelectValue placeholder={t("contact.form.selectSubject")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">{t("contact.form.subjects.general")}</SelectItem>
            <SelectItem value="membership">{t("contact.form.subjects.membership")}</SelectItem>
            <SelectItem value="volunteer">{t("contact.form.subjects.volunteer")}</SelectItem>
            <SelectItem value="donation">{t("contact.form.subjects.donation")}</SelectItem>
            <SelectItem value="partnership">{t("contact.form.subjects.partnership")}</SelectItem>
            <SelectItem value="other">{t("contact.form.subjects.other")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("contact.form.sending") : t("contact.form.send")}
      </Button>
    </form>
  )
}

