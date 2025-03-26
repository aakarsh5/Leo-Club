"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/components/language-provider"
import emailjs from "@emailjs/browser"

export function MembershipForm() {
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
        process.env.NEXT_PUBLIC_EMAILJS_MEMBERSHIP_TEMPLATE_ID || "",
        formRef.current || "",
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
      )

      if (result.text === "OK") {
        toast({
          title: t("join.membership.successTitle"),
          description: t("join.membership.successMessage"),
        })
        // Reset form
        formRef.current?.reset()
      } else {
        throw new Error("Email sending failed")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({
        title: t("join.membership.errorTitle"),
        description: t("join.membership.errorMessage"),
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
          <Label htmlFor="first-name">{t("join.membership.firstName")}</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">{t("join.membership.lastName")}</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t("join.membership.email")}</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">{t("join.membership.phone")}</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dob">{t("join.membership.dob")}</Label>
        <Input id="dob" name="dob" type="date" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">{t("join.membership.address")}</Label>
        <Textarea id="address" name="address" required />
      </div>
      <div className="space-y-2">
        <Label>{t("join.membership.gender")}</Label>
        <RadioGroup defaultValue="male" name="gender">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">{t("join.membership.genderOptions.male")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">{t("join.membership.genderOptions.female")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">{t("join.membership.genderOptions.other")}</Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="occupation">{t("join.membership.occupation")}</Label>
        <Input id="occupation" name="occupation" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reason">{t("join.membership.reason")}</Label>
        <Textarea id="reason" name="reason" required />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("join.membership.submitting") : t("join.membership.submit")}
      </Button>
    </form>
  )
}

