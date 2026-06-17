import { Award, ShieldCheck, CheckCircle2, PhoneCall, ArrowRight, Landmark, BadgeCheck, Users, HelpCircle, BedDouble, Bath, LandPlot, MessageCircle, CalendarCheck } from "lucide-react";
import { COMPANY_DETAILS, ACTIVE_PROJECTS, TESTIMONIALS } from "../data/mockData";
import TrustSection from "../components/TrustSection";

interface HomeViewProps {
  setView: (view: string) => void;
  setSelectedProjectSlug?: (slug: string) => void;
}

export default function HomeView({ setView, setSelectedProjectSlug }: HomeViewProps) {
  const handleProjectClick = (slug: string) => {
    if (setSelectedProjectSlug) {
      setSelectedProjectSlug(slug);
    }
    if (slug === "d-royal-kharisma") {
      setView("d-royal");
    } else {
      setView("pondok-kharisma");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppContact = () => {
    const textStr = encodeURIComponent(
      `Halo PT Kharisma Bangun Banua, saya tertarik untuk bertanya mengenai unit perumahan Anda di Banua.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
  };

  // Format monetary figures safely
  const formatIDRCompact = (num: number) => {
    if (num >= 1000000000) {
      return `Rp ${(num / 1000000000).toFixed(2)} Milyar`;
    }
    if (num >= 1000000) {
      return `Rp ${(num / 1000000).toFixed(0)} Juta`;
    }
    return `Rp ${num}`;
  };

  return (
    <div className="space-y-20 pb-16 animate-fadeIn">
      {/* 1. Hero Section */}
      <section className="relative bg-emerald-primary text-white overflow-hidden py-24 lg:py-36 min-h-[80vh] flex items-center">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="KBB Premium Housing"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-15 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-linear-to-t from-emerald-primary via-emerald-primary/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Subtitle badge */}
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-gold-accent/45 text-xs font-semibold text-gold-accent uppercase tracking-wider mb-6">
              <Award className="h-3.5 w-3.5 text-gold-accent" />
              Developer Residensial Terpercaya Banua
            </span>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Membangun Fondasi <br />
              <span className="text-gold-accent relative inline-block">
                Masa Depan Keluarga
                <span className="absolute left-0 bottom-1 w-full h-1 bg-gold-accent/60 rounded-full" />
              </span>{" "}
              Anda di Banua
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
              PT Kharisma Bangun Banua menghadirkan portofolio perumahan modern berlegalitas SHM aman dan konstruksi prima. Mulai dari hunian elite berfasilitas premium hingga rumah tinggal terjangkau bersubsidi hemat.
            </p>

            {/* Checklist Benefits */}
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 text-sm text-gray-200 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" /> Lokasi Strategis</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" /> DP Ringan KPR</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" /> Legalitas SHM Aman</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4.5 w-4.5 text-emerald-400 shrink-0" /> Akses Mudah</div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => handleWhatsAppContact()}
                className="px-8 py-4 rounded-xl bg-gold-accent hover:bg-gold-bright text-emerald-primary font-display font-bold text-sm tracking-wider uppercase shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="h-4.5 w-4.5" />
                Jadwalkan Survey
              </button>
              <button
                onClick={() => handleWhatsAppContact()}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold text-sm tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                Chat Marketing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-20">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_DETAILS.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <span className="block font-display font-extrabold text-3xl sm:text-4xl text-emerald-primary font-mono tracking-tight">
                {stat.value}
              </span>
              <span className="block text-sm font-bold text-gray-800 mt-1">{stat.label}</span>
              <span className="block text-xs text-gray-400 mt-0.5 leading-normal">{stat.subtext}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Values / Why Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase block mb-2">
            KOMITMEN KREDIBILITAS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-primary">
            Mengapa PT Kharisma Bangun Banua Berbeda?
          </h2>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Menjawab kekhawatiran klasik pembeli rumah baru, kami memprioritaskan rasa aman finansial dan kekuatan fisik bangunan jangka panjang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_DETAILS.features.map((feat, idx) => {
            const icons = [ShieldCheck, BadgeCheck, CheckCircle2, Landmark];
            const IconComp = icons[idx] || ShieldCheck;
            return (
              <div 
                key={idx} 
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-105 shadow-xs hover:shadow-md transition-all duration-300 hover:border-emerald-accent/20"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-light text-emerald-accent flex items-center justify-center mb-6 border border-emerald-100">
                  <IconComp className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-emerald-primary mb-3">
                  {feat.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Active Property Listing Highlights */}
      <section className="bg-gray-50 py-20 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase block mb-2">
              PORTFOLIO PERUMAHAN AKTIF
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-primary">
              Kawasan Hunian Pilihan di Banua
            </h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Jelajahi perumahan unggulan kami secara saksama. Kami membangun untuk semua kalangan dengan komitmen mutu material yang sama ketatnya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ACTIVE_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-gray-105 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                {/* Project Frame */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Type Badge */}
                  <span className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-md ${
                    project.type === "premium" 
                      ? "bg-emerald-primary text-gold-accent border border-gold-accent/40" 
                      : "bg-emerald-accent text-white"
                  }`}>
                    {project.type === "premium" ? "Premium Elite" : "Keluarga Muda & ASN"}
                  </span>

                  {/* Location Overlay bottom */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-mono tracking-widest text-gold-accent block font-bold uppercase mb-1">
                      {project.location}
                    </span>
                    <h3 className="font-display font-bold text-2xl truncate">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Project Snippet Body */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Key Features Icons */}
                    <div className="flex items-center gap-4 py-3 border-y border-gray-100">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-600">
                        <BedDouble className="h-3.5 w-3.5 text-emerald-accent" />
                        {project.typesList[0]?.bedrooms || 2} KT
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-600">
                        <Bath className="h-3.5 w-3.5 text-emerald-accent" />
                        {project.typesList[0]?.bathrooms || 1} KM
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-600">
                        <LandPlot className="h-3.5 w-3.5 text-emerald-accent" />
                        LT {project.typesList[0]?.landSize || 90}m²
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="mb-4 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/50">
                      <span className="text-[10px] text-gray-500 block uppercase font-bold tracking-wider mb-0.5">Harga Mulai Dari:</span>
                      <span className="font-display font-extrabold text-2xl font-mono text-emerald-primary tracking-tight">
                        {formatIDRCompact(project.priceStart)}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handleProjectClick(project.slug)}
                      className="w-full py-3.5 rounded-xl bg-emerald-primary hover:bg-emerald-accent text-white text-xs font-bold font-display tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                    >
                      Buka Info Lengkap
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Indonesian Testimonial Grid section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase block mb-2">
            APRESIASI PELANGGAN
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-emerald-primary">
            Apa Kata Keluarga Banua?
          </h2>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed">
            Kepuasan riil dari pembeli yang telah menerima kunci fisik dan mendiami rumah impian mereka bersama keluarga tercinta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-105 flex flex-col justify-between shadow-xs hover:border-gray-200 transition-colors"
            >
              <div>
                <div className="flex items-center gap-1.5 text-amber-500 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-650 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="border-t border-gray-200/60 pt-5 mt-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-emerald-primary text-gold-accent flex items-center justify-center font-bold text-xs shadow-inner">
                  {test.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-emerald-primary">
                    {test.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-medium">
                    {test.role} • <span className="text-emerald-accent">Pemilik Unit {test.project}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insert Trust Section Before Final CTA */}
      <TrustSection />

      {/* 6. Easy Finance Teaser Section */}
      <section className="bg-emerald-950 text-white rounded-3xl max-w-7xl mx-auto px-6 py-12 sm:px-12 sm:py-16 mx-4 relative overflow-hidden shadow-2xl border border-emerald-900 mt-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?auto=format&fit=crop&w=1200&q=80"
            alt="Construction"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase">
              SOLUSI PEMBIAYAAN KPR BANK
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-white leading-tight">
              Ingin Hitung Sendiri Angsuran Bulanan Rumah Anda?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Kami kemitraan resmi Bank BUMN & Bank Daerah Syariah, mempermudah kalkulasi angsuran Anda. Cek kalkulator simulasi KPR kami, tentukan tenor cicilan s.d. 25 tahun, suku bunga bank, dan ketahui minimum pendapatan gabungan Anda seketika.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-end">
            <button
              onClick={() => {
                setView("kpr-simulator");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-accent hover:bg-gold-bright text-emerald-primary font-display font-bold text-sm tracking-widest uppercase shadow-md transition-all text-center cursor-pointer"
            >
              Buka Simulator KPR Now!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
