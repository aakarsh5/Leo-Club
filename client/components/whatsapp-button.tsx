"use client"

import { PhoneIcon as WhatsApp } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function WhatsAppButton() {
  const { t } = useLanguage()
  const phoneNumber = "9771234567890" // Replace with actual phone number
  const message = encodeURIComponent(t("common.whatsappMessage"))
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
      aria-label={t("common.contactViaWhatsApp")}
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  )
}

