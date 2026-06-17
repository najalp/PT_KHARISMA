import { useState } from "react";
import { Menu, X, Landmark, PhoneCall } from "lucide-react";
import { COMPANY_DETAILS } from "../data/mockData";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "d-royal", label: "D'Royal Kharisma" },
    { id: "pondok-kharisma", label: "Pondok Kharisma" },
    { id: "kpr-simulator", label: "Simulasi KPR" },
    { id: "about", label: "Tentang Kami" },
  ];

  const handleNavClick = (viewId: string) => {
    setView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppContact = () => {
    const textStr = encodeURIComponent(
      `Halo PT Kharisma Bangun Banua, saya tertarik dengan informasi perumahan Anda dan ingin berkonsultasi mengenai unit di Banua.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism border-b border-gray-200/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="h-11 w-11 rounded-lg bg-emerald-primary flex items-center justify-center shadow-md border border-gold-accent/40 group-hover:scale-105 transition-transform duration-300">
              <Landmark className="h-6 w-6 text-gold-accent" />
            </div>
            <div>
              <span className="font-display font-bold text-lg leading-tight text-emerald-primary block tracking-tight group-hover:text-emerald-accent transition-colors">
                KHARISMA
              </span>
              <span className="text-xs font-mono tracking-wider font-semibold text-gold-accent block -mt-1 uppercase">
                Bangun Banua
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-emerald-accent bg-emerald-light/60 font-semibold border-b-2 border-emerald-accent"
                      : "text-gray-600 hover:text-emerald-primary hover:bg-gray-100/50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call To Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleWhatsAppContact}
              className="px-5 py-2.5 rounded-full bg-emerald-accent hover:bg-emerald-primary text-white text-xs font-bold font-display tracking-wide uppercase shadow-md flex items-center gap-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4" />
              Kontak Sales (WA)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-500 hover:text-emerald-primary hover:bg-emerald-light/30 focus:outline-hidden cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl z-50 animate-fadeIn overflow-hidden">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => {
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-emerald-accent text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-50 active:bg-emerald-light/20"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  handleWhatsAppContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-4 rounded-xl bg-emerald-accent hover:bg-emerald-primary text-white font-bold font-display text-sm tracking-wide uppercase shadow-md flex items-center justify-center gap-3 active:scale-98 transition-all cursor-pointer"
              >
                <PhoneCall className="h-5 w-5" />
                Hubungi via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
