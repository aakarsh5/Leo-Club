"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppContact } from "@/components/whatsapp-contact";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="flex flex-col gap-2 mb-4 items-end animate-fade-in-up">
          <WhatsAppContact 
            variant="default" 
            size="lg" 
            className="rounded-full shadow-lg"
            phoneNumber="+977 984-2023888"
          />
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-[#25D366] hover:bg-[#128C7E]"
        }`}
        aria-label={isOpen ? "Close menu" : "Contact on WhatsApp"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <FaWhatsapp className="h-6 w-6" />}
      </Button>
    </div>
  );
} 