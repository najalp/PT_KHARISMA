import { Landmark, Mail, Phone, MapPin, Award, ShieldCheck, CheckCircle } from "lucide-react";
import { COMPANY_DETAILS } from "../data/mockData";

interface FooterProps {
  setView: (view: string) => void;
}

export default function Footer({ setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (viewId: string) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-emerald-primary text-gray-300 pt-16 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-emerald-accent flex items-center justify-center border border-gold-accent/40">
                <Landmark className="h-5 w-5 text-gold-accent" />
              </div>
              <div>
                <span className="font-display font-bold text-base leading-tight text-white block tracking-tight">
                  PT KHARISMA
                </span>
                <span className="text-[10px] font-mono tracking-wider font-semibold text-gold-accent block -mt-1 uppercase">
                  Bangun Banua
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Developer properti residensial terpercaya di Kalimantan Selatan. Berkomitmen menghadirkan hunian berkualitas tinggi, legalitas SHM aman, dan bernilai investasi tinggi demi masa depan keluarga Banua.
            </p>

            {/* Credibility / Trust badges list in footer */}
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/80 text-xs font-semibold text-gold-accent border border-emerald-800">
                <Award className="h-3.5 w-3.5 text-gold-accent" />
                Anggota REI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/80 text-xs font-semibold text-gold-accent border border-emerald-800">
                <ShieldCheck className="h-3.5 w-3.5 text-gold-accent" />
                Sertifikat SHM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-950/80 text-xs font-semibold text-gold-accent border border-emerald-800">
                <CheckCircle className="h-3.5 w-3.5 text-gold-accent" />
                Mitra KPR BTN
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-6 border-l-2 border-gold-accent pl-3">
              Proyek Developer
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick("d-royal")}
                  className="text-gray-400 hover:text-gold-accent transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  D'Royal Kharisma (Hunian Elite)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("pondok-kharisma")}
                  className="text-gray-400 hover:text-gold-accent transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  Pondok Kharisma (Keluarga Muda & ASN)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("kpr-simulator")}
                  className="text-gray-400 hover:text-gold-accent transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  Simulator KPR & Angsuran
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-gray-400 hover:text-gold-accent transition-colors cursor-pointer text-left focus:outline-hidden"
                >
                  Profil Developer & Legalitas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Office */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-6 border-l-2 border-gold-accent pl-3">
              Kantor Pemasaran
            </h4>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs">
                  {COMPANY_DETAILS.officeAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-accent shrink-0" />
                <span className="text-gray-400 font-mono text-xs">
                  {COMPANY_DETAILS.officePhone}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-accent shrink-0" />
                <span className="text-gray-400 text-xs hover:text-gold-accent transition-colors">
                  {COMPANY_DETAILS.officeEmail}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Operational & Bank Association */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-6 border-l-2 border-gold-accent pl-3">
              Jam Operasional
            </h4>
            <div className="bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/40 text-xs text-gray-400 mb-4">
              <p className="mb-2"><strong className="text-gray-300">Senin - Sabtu:</strong> 08.30 - 17.00 WITA</p>
              <p className="mb-2"><strong className="text-gray-300">Minggu:</strong> 10.00 - 16.00 WITA (Show Unit Buka)</p>
              <p className="text-emerald-400 italic">Disarankan membuat janji kunjungan Show Unit terlebih dahulu via WhatsApp sales.</p>
            </div>
            
            <p className="text-[11px] text-gray-500 leading-normal">
              Seluruh transaksi booking fee & cicilan DP wajib ditransfer ke Rekening Resmi PT Kharisma Bangun Banua. Kami tidak bertanggung jawab atas pembayaran cash di luar kantor pemasaran.
            </p>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-emerald-900/80 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {currentYear} PT Kharisma Bangun Banua. All Rights Reserved. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-4">
            <span className="hover:text-gray-400 transition-colors">Persyaratan & Ketentuan</span>
            <span>•</span>
            <span className="hover:text-gray-400 transition-colors">Kebijakan Privasi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
