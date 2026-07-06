import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppButton() {
  const number = siteConfig.phones[0].replace(/[\s+]/g, "");

  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-paper shadow-premium transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
