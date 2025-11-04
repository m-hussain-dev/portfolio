"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+923039027037?text=Hi%20Mehdi!%20How%20can%20I%20help%20you?"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5b] p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 flex items-center justify-center"
    >
      {/* WhatsApp Icon from react-icons */}
      <FaWhatsapp size={28} color="white" />

      {/* Optional glow effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-50 -z-10"></span>
    </a>
  );
}
