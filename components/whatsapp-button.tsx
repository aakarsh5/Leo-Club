"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Get phone number from environment variable
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </button>
  );
} 