"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import emailjs from "@emailjs/browser"

export function VolunteerForm() {
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
        process.env.NEXT_PUBLIC_EMAILJS_VOLUNTEER_TEMPLATE_ID || "",
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      if (result.text === "OK") {
        toast({
          title: t("join.volunteer.successTitle"),
          description: t("join.volunteer.successMessage"),
        })
        // Reset form
        formRef.current?.reset()
      } else {
        throw new Error("Email sending failed")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: t("join.volunteer.errorTitle"),
        description: t("join.volunteer.errorMessage"),
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
          <Label htmlFor="first-name">{t("join.volunteer.firstName")}</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">{t("join.volunteer.lastName")}</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t("join.volunteer.email")}</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">{t("join.volunteer.phone")}</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label>{t("join.volunteer.areasOfInterest")}</Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "Health & Wellness",
            "Education",
            "Environment",
            "Community Development",
            "Event Planning",
            "Marketing & Communications",
            "Photography & Design",
            "Fundraising",
          ].map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox id={area.toLowerCase().replace(/\s+/g, "-")} name="areas_of_interest" value={area} />
              <Label htmlFor={area.toLowerCase().replace(/\s+/g, "-")}>{area}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="availability">{t("join.volunteer.availability")}</Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "Weekday Mornings",
            "Weekday Afternoons",
            "Weekday Evenings",
            "Weekend Mornings",
            "Weekend Afternoons",
            "Weekend Evenings",
          ].map((time) => (
            <div key={time} className="flex items-center space-x-2">
              <Checkbox id={time.toLowerCase().replace(/\s+/g, "-")} name="availability" value={time} />
              <Label htmlFor={time.toLowerCase().replace(/\s+/g, "-")}>{time}</Label>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="skills">{t("join.volunteer.skills")}</Label>
        <Textarea id="skills" name="skills" placeholder={t("join.volunteer.skillsPlaceholder")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t("join.volunteer.reason")}</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("join.volunteer.submitting") : t("join.volunteer.submit")}
      </Button>
    </form>
  )
}

