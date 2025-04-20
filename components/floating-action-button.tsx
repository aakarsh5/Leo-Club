"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WhatsAppContact } from "@/components/whatsapp-contact"
import { FaWhatsapp } from "react-icons/fa"
import { X } from "lucide-react"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="flex flex-col gap-2 mb-4 items-end">
          <WhatsAppContact 
            variant="default" 
            size="lg" 
            className="rounded-full shadow-lg"
          />
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-[#25D366] hover:bg-[#128C7E]"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <FaWhatsapp className="h-6 w-6" />}
      </Button>
    </div>
  )
} 