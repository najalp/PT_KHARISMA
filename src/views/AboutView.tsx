import { useState } from "react";
import { Landmark, Award, ShieldCheck, Mail, Phone, MapPin, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { COMPANY_DETAILS, FAQS } from "../data/mockData";

export default function AboutView() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-16 pb-16 animate-fadeIn">
      {/* 1. Header Banner */}
      <section className="bg-emerald-primary text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a85a_1px,transparent_1px),linear-gradient(to_bottom,#c5a85a_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase">
            PROFIL CORPORATE DEVELOPER
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
            PT Kharisma Bangun Banua
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Menghadirkan kenyamanan, ketentraman bermukim, serta kepastian legalitas mutlak bagi keluarga di Kalimantan Selatan.
          </p>
        </div>
      </section>

      {/* 2. Management Statement & Legality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Decriptive story */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold text-gold-accent uppercase block">
            PESAN DIREKSI UTAMA
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-emerald-primary">
            Dedikasi Menghadirkan Pondasi Masa Depan yang Kokoh
          </h2>
          
          <div className="space-y-4 text-sm text-gray-650 leading-relaxed text-justify">
            <p>
              Didirikan dengan visi luhur memajukan sektor pemukiman di Kalimantan Selatan, <strong>PT Kharisma Bangun Banua (KBB)</strong> tumbuh sebagai developer tepercaya yang mengedepankan kearifan lokal Banua serta kualitas properti bernilai tinggi. Kami memahami bahwa rumah merupakan pembelian penting sekali dalam hidup seseorang, sehingga integritas moral dan profesionalisme kami pertahankan sepenuhnya.
            </p>
            <p>
              Kami bangga memegang komitmen 100% legalitas tanpa sengketa. Pembeli perumahan kami, baik perumahan elit <em>D'Royal Kharisma</em> maupun subsidi modern <em>Pondok Kharisma</em>, terjamin memperoleh sertifikat pecah Kavling Sertifikat Hak Milik (SHM) yang clean, bebas masalah ahli waris, serta berizin Persetujuan Bangunan Gedung (PBG) resmi.
            </p>
            <p className="italic font-medium text-emerald-primary border-l-4 border-gold-accent pl-4">
              "Kami tidak sekadar melapis bata dan semen. Kami membentuk peradaban bertetangga yang asri, rukun, dan Islami, demi tumbuh kembang generasi penerus Banua yang sehat dan religius."
            </p>
          </div>
        </div>

        {/* Corporate Legal Card */}
        <div className="lg:col-span-5 bg-gray-50 border border-gray-105 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs relative">
          <h3 className="font-display font-bold text-lg text-emerald-primary border-b border-gray-200 pb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-gold-accent" />
            Legalitas & Asosiasi Resmi
          </h3>

          <div className="space-y-4 text-xs text-gray-600">
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-accent shrink-0" />
              <div>
                <strong className="block text-gray-900 font-semibold uppercase">Nomor Anggota REI:</strong>
                <span className="font-mono">REI-Kalsel No. 12.043.2019</span>
                <p className="text-gray-400 mt-0.5">Terdaftar resmi sebagai pengembang perumahan sehat aman di dewan pengurus daerah REI.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-accent shrink-0" />
              <div>
                <strong className="block text-gray-900 font-semibold uppercase">Legalitas Lahan Mandiri:</strong>
                <span>Sertifikat Hak Milik (SHM) Induk & Pecah Kavling atas nama Perseroan</span>
                <p className="text-gray-400 mt-0.5">Bebas agunan bank pihak ketiga, menjamin kepastian balik nama sertifikat Anda.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-accent shrink-0" />
              <div>
                <strong className="block text-gray-900 font-semibold uppercase">Mitra KPR Prioritas:</strong>
                <span className="font-medium">PT Bank Tabungan Negara (Persero) Tbk</span>
                <p className="text-gray-400 mt-0.5">Tingkat kelulusan berkas nasabah tinggi dengan proses cepat terkoordinasi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Physical Office details */}
      <section className="bg-gray-50 py-16 border-y border-gray-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-gold-accent uppercase block">
              KUNJUNGI KAMI
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-emerald-primary">
              Kantor Pemasaran Pusat
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Tim Relationship Manager kami melayani pemrosesan dokumen KPR, verifikasi tanda jadi (booking fee), sertifikasi AJB, serta mengantar Anda melakukan survey show unit langsung di lokasi komplek.
            </p>

            <ul className="space-y-4 text-xs font-medium text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-accent shrink-0" />
                <span className="leading-relaxed text-gray-600">{COMPANY_DETAILS.officeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-accent shrink-0" />
                <span className="font-mono text-gray-600">{COMPANY_DETAILS.officePhone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-accent shrink-0" />
                <span className="text-gray-650">{COMPANY_DETAILS.officeEmail}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 h-80 rounded-3xl bg-slate-200 overflow-hidden relative border border-gray-200">
            {/* Visual Location Mock */}
            <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-8 text-white z-10">
              <div className="glassmorphism-dark border border-white/10 p-5 rounded-2xl max-w-sm">
                <span className="inline-block p-1 rounded-sm bg-gold-accent text-emerald-primary font-mono text-[8px] font-bold uppercase mb-2">Google Maps Terintegrasi</span>
                <h4 className="font-display font-bold text-sm text-white">Office Location & Showroom PT KBB</h4>
                <p className="text-xs text-gray-350 leading-relaxed mt-1">
                  Terletak strategis di Jalan Trans Kalimantan Jenderal Ahmad Yani Km 8.2, Kertak Hanyar. Akses cepat mudah dicapai dari Banjarmasin Selatan maupun Banjarbaru.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-md mt-6">
                <button
                  onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DETAILS.officeAddress)}`, "_blank")}
                  className="px-5 py-3 rounded-lg bg-emerald-accent hover:bg-gold-accent text-white hover:text-emerald-primary text-xs font-bold font-display uppercase tracking-wider text-center cursor-pointer transition-colors shadow-md"
                >
                  Panduan GPS Navigasi
                </button>
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
          </div>

        </div>
      </section>

      {/* 4. Comprehensive FAQ Board */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase block mb-2">
            JAWABAN PERTANYAAN
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-emerald-primary">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-xs text-gray-500">
            Beberapa informasi penting mengenai teknis pemesanan, perbankan, dan kesiapan serah terima bangunan.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-gray-150 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between text-sm sm:text-base font-bold text-gray-900 hover:text-emerald-primary transition-colors focus:outline-hidden cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-gold-accent" /> : <ChevronDown className="h-5 w-5 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-650 leading-relaxed border-t border-gray-100/60 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
