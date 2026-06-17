import { PhoneCall, CalendarCheck } from "lucide-react";
import { COMPANY_DETAILS } from "../data/mockData";

export default function MobileStickyCTA() {
  const handleWhatsApp = (intent: string) => {
    const textStr = encodeURIComponent(
      `Halo PT Kharisma Bangun Banua, saya ingin ${intent} perumahan.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-40 px-4 py-3 pb-safe">
      <div className="flex gap-3">
        <button
          onClick={() => handleWhatsApp("bertanya mengenai")}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-white border-2 border-emerald-primary text-emerald-primary text-xs font-bold font-display uppercase tracking-wider shadow-sm active:bg-gray-50"
        >
          <PhoneCall className="w-4 h-4" />
          Chat WA
        </button>
        <button
          onClick={() => handleWhatsApp("menjadwalkan survey lokasi")}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-primary text-white text-xs font-bold font-display uppercase tracking-wider shadow-[0_4px_14px_rgba(2,44,34,0.4)] active:scale-98 transition-transform"
        >
          <CalendarCheck className="w-4 h-4" />
          Survey
        </button>
      </div>
    </div>
  );
}
