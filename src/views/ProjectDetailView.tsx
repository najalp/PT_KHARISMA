import { useState } from "react";
import { 
  Building, MapPin, CheckCircle, Flame, Grid, Compass, LandPlot, ShieldAlert,
  BedDouble, Bath, ChevronRight, PhoneCall, FileText, Map, Sparkles, ShieldCheck
} from "lucide-react";
import { ACTIVE_PROJECTS, COMPANY_DETAILS } from "../data/mockData";
import GalleryViewer from "../components/GalleryViewer";
import InquiryForm from "../components/InquiryForm";

interface ProjectDetailViewProps {
  projectSlug: string;
  setView: (view: string) => void;
}

export default function ProjectDetailView({ projectSlug, setView }: ProjectDetailViewProps) {
  const project = ACTIVE_PROJECTS.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-gray-850">Proyek tidak ditemukan</h2>
        <button onClick={() => setView("home")} className="mt-4 px-6 py-2 bg-emerald-accent text-white rounded-lg">
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const [selectedTypeIdx, setSelectedTypeIdx] = useState<number>(0);
  const selectedType = project.typesList[selectedTypeIdx];

  const handleWhatsAppInquiry = (typeName?: string) => {
    const textStr = encodeURIComponent(
      `Halo Sales PT Kharisma Bangun Banua, saya tertarik dengan informasi perumahan ${project.name} ${
        typeName ? `khususnya Tipe ${typeName}` : ""
      }. Boleh rincikan brosur lengkap, spesifikasi ulin, dan detail angsuran KPR-nya?`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
  };

  // Safe currency formatted string
  const formatIDR = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatIDRCompact = (num: number) => {
    if (num >= 1000000000) {
      return `Rp ${(num / 1000000000).toFixed(2)} Milyar`;
    }
    if (num >= 1000000) {
      return `Rp ${(num / 1000000).toFixed(0)} Juta`;
    }
    return formatIDR(num);
  };

  const isRoyal = project.id === "d-royal-kharisma";

  return (
    <div className="pb-20 animate-fadeIn">
      {/* 1. Project Landscaping Hero Banner */}
      <section className={`relative text-white overflow-hidden py-24 sm:py-32 ${
        isRoyal ? "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-900 via-emerald-primary to-emerald-primary" : "bg-emerald-primary"
      }`}>
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={project.mainImage}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-100" />
        {/* Dynamic Dark Gradient shading for clear text visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/75 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <button
              onClick={() => setView("home")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-gray-200 border border-white/10 transition-colors cursor-pointer"
            >
              ← Kembali ke Beranda
            </button>

            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs ${
              isRoyal 
                ? "bg-gold-accent text-emerald-primary" 
                : "bg-emerald-accent text-white"
            }`}>
              {project.type === "premium" ? "RESIDENSI EKSEKUTIF" : "HUNIAN STRATEGIS SUBSIDI & KOMERSIL"}
            </span>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              {project.name}
            </h1>

            <p className="text-xl font-medium text-gold-accent block font-display leading-snug">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-350 max-w-2xl leading-relaxed mt-4">
              {project.shortDescription}
            </p>

            <div className="pt-6 flex flex-wrap gap-4 items-center">
              <div>
                <span className="text-[10px] text-gray-400 block uppercase font-medium">Investasi Mulai Dari:</span>
                <span className="font-display font-extrabold text-2xl text-white font-mono">
                  {formatIDRCompact(project.priceStart)}
                </span>
              </div>
              <span className="text-gray-600 hidden sm:block">|</span>
              <button
                onClick={() => handleWhatsAppInquiry()}
                className="px-6 py-3 rounded-xl bg-emerald-accent hover:bg-gold-accent text-white hover:text-emerald-primary text-xs font-bold font-display tracking-wider uppercase shadow-md flex items-center gap-2 transition-all cursor-pointer"
              >
                <PhoneCall className="h-4.5 w-4.5" />
                Dapatkan e-Brosur (WA)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Core specs, galleries */}
        <div className="lg:col-span-8 space-y-16">
          
          {/* Section A: Long detailed overview */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-emerald-primary border-b border-gray-100 pb-3">
              Mengenai Kawasan
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed indent-8">
              {project.longDescription}
            </p>

            {/* Spec / Fact Bullet badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-105 text-center">
                <LandPlot className="h-5 w-5 text-emerald-accent mx-auto mb-1.5" />
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Legalitas Kawasan</span>
                <span className="text-xs font-bold text-gray-800">SHM Siap Balik Nama</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-105 text-center">
                <Grid className="h-5 w-5 text-emerald-accent mx-auto mb-1.5" />
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Lebar Jalan Kompleks</span>
                <span className="text-xs font-bold text-gray-800">8 Meter (Medium Row)</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-105 text-center">
                <Compass className="h-5 w-5 text-emerald-accent mx-auto mb-1.5" />
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Saluran Air Kompleks</span>
                <span className="text-xs font-bold text-gray-800">Sistem Drainase Dalam</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-105 text-center">
                <Flame className="h-5 w-5 text-emerald-accent mx-auto mb-1.5" />
                <span className="text-[10px] text-gray-400 block font-semibold uppercase">Struktur Istimewa</span>
                <span className="text-xs font-bold text-gray-800">Kayu Galam Ulin Kuat</span>
              </div>
            </div>
          </section>

          {/* Section B: Property Type selector */}
          <section className="space-y-6 bg-slate-50/50 p-6 sm:p-8 rounded-3xl border border-gray-150">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-accent font-bold uppercase block mb-1">
                DAFTAR PILIHAN TIPE RUMAH
              </span>
              <h2 className="font-display font-bold text-2xl text-emerald-primary">
                Tipe Unit & Layout Desain
              </h2>
              <p className="text-xs text-gray-500 mt-1">Sengaja ditawarkan berbagai varian ukuran demi menyelaraskan anggaran serta ruang tumbuh keluarga Anda.</p>
            </div>

            {/* Toggle buttons for types */}
            <div className="flex flex-wrap gap-2.5">
              {project.typesList.map((type, idx) => {
                const isActive = selectedTypeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedTypeIdx(idx)}
                    className={`px-5 py-3 rounded-xl text-xs font-bold font-display cursor-pointer transition-all ${
                      isActive 
                        ? "bg-emerald-primary text-white shadow-md border border-emerald-primary" 
                        : "bg-white text-gray-700 border border-gray-200 hover:border-emerald-accent"
                    }`}
                  >
                    {type.nameName.split(" ")[0]} {type.nameName.split(" ")[1]}
                    <span className="block text-[9px] font-normal opacity-70">LT {type.landSize}m² / LB {type.buildingSize}m²</span>
                  </button>
                );
              })}
            </div>

            {/* Selected type layout */}
            <div className="bg-white rounded-2xl border border-gray-105 p-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
              {/* Type photo */}
              <div className="md:col-span-5 h-64 rounded-xl overflow-hidden bg-gray-50 border border-gray-105 relative">
                <img
                  src={selectedType.gallery[0] || project.mainImage}
                  alt={selectedType.nameName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 px-2 py-1 rounded-sm bg-black/60 text-white font-mono text-[9px]">
                  Foto Unit Showcase
                </span>
              </div>

              {/* Type dimensions */}
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs text-emerald-accent font-bold uppercase tracking-wider block">Spesifikasi Tata Ruang:</span>
                <h3 className="font-display font-extrabold text-xl text-gray-900 border-b border-gray-100 pb-2 flex justify-between items-center">
                  <span>{selectedType.nameName}</span>
                  <span className="text-xs font-mono font-normal text-gray-400">Halaman Kosong Belakang Luas</span>
                </h3>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2 text-gray-650">
                    <Building className="h-4.5 w-4.5 text-gold-accent" />
                    <span>Luas Bangunan: <strong>{selectedType.buildingSize} m²</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-650">
                    <LandPlot className="h-4.5 w-4.5 text-gold-accent" />
                    <span>Luas Tanah: <strong>{selectedType.landSize} m²</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-650">
                    <BedDouble className="h-4.5 w-4.5 text-gold-accent" />
                    <span>Kamar Tidur Utama: <strong>{selectedType.bedrooms} Ruang</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-650">
                    <Bath className="h-4.5 w-4.5 text-gold-accent" />
                    <span>Kamar Mandi: <strong>{selectedType.bathrooms} Toilet</strong></span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-semibold uppercase">Estimasi Angsuran KPR:</span>
                    <span className="text-base font-bold text-emerald-primary font-mono block">
                      Mulai {formatIDR(selectedType.installmentsMonthEst)}<span className="text-[10px] text-gray-400 font-normal">/bulan</span>
                    </span>
                  </div>

                  <button
                    onClick={() => handleWhatsAppInquiry(selectedType.nameName)}
                    className="px-5 py-3 rounded-lg bg-emerald-accent hover:bg-emerald-primary text-white text-[11px] font-bold font-display tracking-wider uppercase shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    Tanyakan Unit Ini (WA)
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Section C: Bento-style specifications */}
          <section className="space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-accent font-bold uppercase block mb-1">
                MATERIAL & DETAIL SIPIL
              </span>
              <h2 className="font-display font-bold text-2xl text-emerald-primary">
                Spesifikasi Teknis Premium
              </h2>
              <p className="text-xs text-gray-500 mt-1">Kami transparan mengenai material yang dipasang. Menjamin fondasi ulin ulet dan ketahanan beton bertulang.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50/60 p-6 sm:p-8 rounded-3xl border border-gray-105">
              {project.specifications.map((spec) => (
                <div key={spec.id} className="py-2.5 border-b border-gray-200/50 flex flex-col justify-between text-xs">
                  <span className="text-gray-400 font-medium">{spec.label}</span>
                  <span className="text-gray-800 font-semibold mt-0.5 leading-snug">{spec.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section D: Filterable Gallery Viewer */}
          <section className="space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-accent font-bold uppercase block mb-1">
                DOKUMENTASI RIIL LAPANGAN
              </span>
              <h2 className="font-display font-bold text-2xl text-emerald-primary">
                Galeri Visual Proyek
              </h2>
              <p className="text-xs text-gray-500 mt-1">Foto aktual unit contoh (show unit), detail interior, site plan, serta kemajuan pekerjaan tukang di lapangan.</p>
            </div>

            <GalleryViewer images={project.imagesGallery} />
          </section>

          {/* Section E: Interactive Proximity Map of Amenities */}
          <section className="space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-gold-accent font-bold uppercase block mb-1">
                ANALISIS AKSESIBILITAS LOKASI
              </span>
              <h2 className="font-display font-bold text-2xl text-emerald-primary">
                Konektivitas Strategis & Fasilitas Umum
              </h2>
              <p className="text-xs text-gray-500 mt-1">Dikelilingi kawasan bisnis, pusat jajan pasar rakyat, institusi pendidikan unggulan, dan jaminan bebas macet menuju pusat administrasi.</p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-105 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start shadow-xs">
              <div className="space-y-4">
                <span className="text-xs text-emerald-accent font-bold uppercase tracking-wider block">Waktu Tempuh Kendaraan Santai:</span>
                
                {/* Proximity rows */}
                <div className="space-y-3.5">
                  {project.nearbyAmenities.map((amenity, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs pb-2 border-b border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-accent" />
                        <span className="text-gray-700 font-medium">{amenity.name}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 font-mono font-bold">
                        {amenity.distanceMinutes} Menit
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geographic Visual card (Interactive Mock) */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 h-64 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                  {/* Grid layout serving as mock blueprint map */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                </div>
                
                <div className="relative z-10">
                  <span className="text-[9px] font-mono tracking-wider font-bold text-gold-accent uppercase block mb-1">
                     INTEGRASI PETA NAVIGASI GPS
                  </span>
                  <p className="text-xs text-gray-350 leading-relaxed font-sans mt-1">
                    <strong className="text-white block font-semibold mb-1">Koordinat Lokasi Terverifikasi:</strong>
                    {project.fullAddress}
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-sm bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-semibold self-start font-mono">
                    <Map className="h-3 h-3 text-emerald-400" />
                    GPS Tagged & Verified Security
                  </span>
                  
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${project.name} ${project.location}`)}`, "_blank")}
                    className="w-full py-3 bg-white hover:bg-gold-accent hover:text-white text-emerald-primary text-xs font-bold font-display rounded-lg tracking-wide uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    Buka Peta Google Maps Asli
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Right Column: Dynamic floating Sidebar components (Inquiry, Spec triggers) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Inquiry form section */}
          <div className="sticky top-24">
            <InquiryForm defaultProjectSlug={project.slug} />

            {/* Quick trust bullet block below form */}
            <div className="mt-6 border border-gray-250 p-6 rounded-2xl space-y-4">
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-accent block">PT Kharisma Trust Guarantee</span>
              
              <div className="flex gap-3 text-xs">
                <ShieldCheck className="h-5 w-5 text-emerald-accent shrink-0" />
                <p className="text-gray-600">Sertifikat Hak Milik (SHM) sudah split per kavling, bebas sengketa lahan ahli waris.</p>
              </div>
              <div className="flex gap-3 text-xs">
                <FileText className="h-5 w-5 text-emerald-accent shrink-0" />
                <p className="text-gray-600">Persetujuan Bangunan Gedung (PBG/IMB) terbit lengkap per unit rumah.</p>
              </div>
              <div className="flex gap-3 text-xs">
                <CheckCircle className="h-5 w-5 text-emerald-accent shrink-0" />
                <p className="text-gray-600">Kemitraan luas KPR bank BTN, Mandiri, BNI, Bank Kalsel.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
