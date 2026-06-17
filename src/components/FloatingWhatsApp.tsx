import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_DETAILS } from "../data/mockData";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance so it doesn't distract immediately on load
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const handleWhatsAppClick = () => {
    const textStr = encodeURIComponent(
      `Halo Marketing ${COMPANY_DETAILS.name}, saya ingin konsultasi mengenai perumahan.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-end">
      {/* Tooltip */}
      <div className="mr-4 px-3 py-1.5 bg-white text-emerald-primary text-[10px] font-bold tracking-wider rounded-lg shadow-xl border border-gray-100 hidden sm:block animate-bounce">
        Chat Marketing
        {/* Right arrow tail */}
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-gray-100 rotate-45"></div>
      </div>
      
      {/* Button */}
      <button
        onClick={handleWhatsAppClick}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,211,102,0.5)] transition-all cursor-pointer group"
        aria-label="Chat WhatsApp"
      >
        {/* Pulse effect rings */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping duration-1000"></span>
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30"></span>
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
}
