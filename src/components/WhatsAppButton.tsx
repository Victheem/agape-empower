import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <div
        className={`bg-card border border-border shadow-lg rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 whitespace-nowrap ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        {t("whatsapp.label")}
      </div>
      <a
        href="https://wa.me/2348034725518?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20loan%20services."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-14 h-14 rounded-full bg-emerald-brand text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 whatsapp-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
