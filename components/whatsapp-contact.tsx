"use client"

import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

interface WhatsAppContactProps {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  customMessage?: string
  className?: string
  iconOnly?: boolean
}

export function WhatsAppContact({
  variant = "default",
  size = "default",
  customMessage,
  className = "",
  iconOnly = false,
}: WhatsAppContactProps) {
  const handleWhatsAppClick = () => {
    // Get the phone number and clean it (remove spaces, dashes, and plus sign)
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || ""
    const cleanPhoneNumber = phoneNumber.replace(/[\s\-\+]/g, "")
    
    // Get and encode the message
    const message = encodeURIComponent(customMessage || process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "")
    
    // Open WhatsApp with the cleaned phone number
    window.open(`https://wa.me/${cleanPhoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleWhatsAppClick}
      className={`${className} ${variant === "default" ? "bg-[#25D366] hover:bg-[#128C7E] text-white" : ""}`}
    >
      <FaWhatsapp className={`${iconOnly ? "" : "mr-2"} h-4 w-4`} />
      {!iconOnly && "Contact on WhatsApp"}
    </Button>
  )
} 