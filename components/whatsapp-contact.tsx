"use client"

import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

interface WhatsAppContactProps {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  customMessage?: string
  className?: string
  iconOnly?: boolean
  phoneNumber?: string
}

export function WhatsAppContact({
  variant = "default",
  size = "default",
  customMessage,
  className = "",
  iconOnly = false,
  phoneNumber,
}: WhatsAppContactProps) {
  const handleWhatsAppClick = () => {
    // Use provided phone number or env variable or fallback to hardcoded number
    const phone = phoneNumber || 
                  process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || 
                  "+977 984-2023888"
    
    // Clean the number (remove spaces, dashes, and plus sign)
    const cleanPhoneNumber = phone.replace(/[\s\-\+]/g, "")
    
    // Get and encode the message
    const defaultMessage = "Hello, I'm interested in learning more about Leo Club of Biratnagar Central Megha."
    const message = encodeURIComponent(
      customMessage || 
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 
      defaultMessage
    )
    
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