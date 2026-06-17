import React, { useState } from "react";
import { Send, CheckCircle2, PhoneCall, Award, HelpCircle } from "lucide-react";
import { InquiryFormData } from "../types";
import { ACTIVE_PROJECTS, COMPANY_DETAILS } from "../data/mockData";

export default function InquiryForm({ defaultProjectSlug }: { defaultProjectSlug?: string }) {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    phoneNumber: "",
    projectSelected: defaultProjectSlug || ACTIVE_PROJECTS[0].slug,
    houseType: "",
    employmentType: "asn",
    estimatedTenor: 15,
    budgetRange: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Get active project lists
  const selectedProjectObj = ACTIVE_PROJECTS.find(p => p.slug === formData.projectSelected);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phoneNumber) {
      alert("Mohon lengkapi Nama Anda dan Nomor WhatsApp aktif.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate real API transmission delay without external dependency and display state-driven mockup
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const projectLabel = selectedProjectObj?.name || "Kharisma Properti";
    const typeLabel = formData.houseType ? `(Tipe ${formData.houseType})` : "";
    const employmentLabels: Record<string, string> = {
      asn: "PNS / ASN Pemerintahan",
      private: "Karyawan Swasta",
      entrepreneur: "Wirausahawan",
      other: "Lainnya"
    };

    const textStr = encodeURIComponent(
      `Halo PT Kharisma Bangun Banua,\n\n` +
      `Saya baru saja mengisi formulir konsultasi minat properti dengan rincian berikut:\n` +
      `- Nama: ${formData.name}\n` +
      `- No. WhatsApp: ${formData.phoneNumber}\n` +
      `- Pekerjaan: ${employmentLabels[formData.employmentType] || formData.employmentType}\n` +
      `- Proyek Minat: ${projectLabel} ${typeLabel}\n` +
      (formData.budgetRange ? `- Range Budget: ${formData.budgetRange}\n` : "") +
      `- Estimasi Rencana Tenor KPR: ${formData.estimatedTenor} Tahun\n` +
      `- Catatan Tambahan: ${formData.message || "Tolong rincian brosur lengkap."}\n\n` +
      `Mohon dihubungi lebih lanjut untuk jadwalkan survey show unit lapangan. Terima kasih!`
    );

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-10 relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-radial from-gold-accent/10 to-transparent rounded-full -mr-20 -mt-20 pointer-events-none" />

      {submitted ? (
        <div className="text-center py-8 animate-fadeIn">
          <div className="mx-auto h-16 w-16 bg-emerald-light rounded-full flex items-center justify-center text-emerald-accent mb-6 shadow-inner border border-emerald-100">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="font-display font-bold text-2xl text-emerald-primary mb-2">Konsultasi Sukses Terkirim!</h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
            Terima kasih <strong className="text-gray-900">{formData.name}</strong>, formulir minat Anda telah masuk ke database PT Kharisma Bangun Banua. Unit Pemasaran kami akan melakukan verifikasi berkas awal.
          </p>

          <div className="p-4 rounded-xl bg-orange-50 text-orange-850 text-xs text-left max-w-md mx-auto mb-8 border border-orange-100 flex items-start gap-3">
            <Award className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block mb-1 text-orange-900 font-semibold">TIPS CEPAT RESPON:</strong>
              Klik tombol hijau di bawah untuk melanjutkan chat langsung dengan Senior Relationship Officer kami via WhatsApp guna memprioritaskan jadwal survey unit Anda!
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppRedirect}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-accent hover:bg-emerald-primary text-white text-sm font-bold font-display rounded-xl tracking-wide uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
            >
              <PhoneCall className="h-4.5 w-4.5" />
              Lanjut via WhatsApp
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phoneNumber: "",
                  projectSelected: defaultProjectSlug || ACTIVE_PROJECTS[0].slug,
                  houseType: "",
                  employmentType: "asn",
                  estimatedTenor: 15,
                  budgetRange: "",
                  message: "",
                });
              }}
              className="w-full sm:w-auto px-6 py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-xl transition-all cursor-pointer"
            >
              Isi Ulang Form
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-wider text-gold-accent uppercase mb-1 block">
              Dapatkan Brosur & Rekomendasi
            </span>
            <h3 className="font-display font-bold text-2xl text-emerald-primary">Formulir Minat Unit</h3>
            <p className="text-xs text-gray-500 mt-1">Kami rincikan analisis kecocokan akad kredit draf KPR Bank secara gratis</p>
          </div>

          {/* Form Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Nama Lengkap Anda</label>
              <input
                type="text"
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Contoh: Hendra Saputra, S.Kom."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-gray-50/30"
              />
            </div>

            {/* WA number */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Nomor WhatsApp Aktif</label>
              <input
                type="tel"
                required
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Contoh: 08125555123"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-gray-50/30 font-mono"
              />
            </div>

            {/* Project Selection */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Perumahan yang Diminati</label>
              <select
                name="projectSelected"
                value={formData.projectSelected}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-white"
              >
                {ACTIVE_PROJECTS.map(p => (
                  <option key={p.id} value={p.slug}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* House Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Pilihan Tipe Unit</label>
              <select
                name="houseType"
                value={formData.houseType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-white"
              >
                <option value="">-- Pilih Tipe Rumah --</option>
                {selectedProjectObj?.typesList.map((type, idx) => (
                  <option key={idx} value={type.nameName.replace(/[^0-9]/g, "")}>
                    {type.nameName}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Class */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                Kategori Pekerjaan / Pendapatan
                <HelpCircle className="h-3.5 w-3.5 text-gray-400 cursor-help" title="Membantu kami merekomendasikan skema subsidi atau komersil bank terbaik." />
              </label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-white"
              >
                <option value="asn">PNS / ASN / PPPK / Guru</option>
                <option value="private">Karyawan Swasta Tetap</option>
                <option value="entrepreneur">Wiraswasta / Pengusaha</option>
                <option value="other">Honorer / TNI / Polri / Lainnya</option>
              </select>
            </div>

            {/* Tenor preferences */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Rencana Jangka Tenor KPR</label>
              <select
                name="estimatedTenor"
                value={formData.estimatedTenor}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-white"
              >
                <option value={5}>5 Tahun (Cicilan Cepat)</option>
                <option value={10}>10 Tahun</option>
                <option value={15}>15 Tahun (Rekomendasi Utama)</option>
                <option value={20}>20 Tahun</option>
                <option value={25}>25 Tahun (Cicilan Termurah)</option>
              </select>
            </div>

            {/* Budget Range (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Estimasi Budget / Harga (Opsional)</label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-white"
              >
                <option value="">-- Belum Menentukan --</option>
                <option value="< 300 Juta">Di bawah Rp 300 Juta</option>
                <option value="300-500 Juta">Rp 300 - 500 Juta</option>
                <option value="500-800 Juta">Rp 500 - 800 Juta</option>
                <option value="800-1.5 Milyar">Rp 800 Jt - 1.5 Milyar</option>
                <option value="> 1.5 Milyar">Di atas Rp 1.5 Milyar</option>
              </select>
            </div>
          </div>

          {/* Special Incentive Display based on occupation */}
          {formData.employmentType === "asn" && (
            <div className="p-4 rounded-2xl bg-emerald-light/60 border border-emerald-200 text-xs text-emerald-primary leading-relaxed flex items-start gap-3">
              <span className="p-1.5 rounded-lg bg-emerald-accent text-white text-[10px] font-bold shrink-0">ASN BENEFIT</span>
              <div>
                <strong className="block text-emerald-primary font-semibold mb-0.5">TERSEDIA PROMO KHUSUS ASN:</strong>
                Anda dapat mengajukan <strong>KPR Bunga Tetap 5% Flat</strong>, DP minimum mulai 1% (beberapa tipe DP 0%), serta keringanan biaya provisi admin dan diskon asuransi dari bank mitra (BTN & Bank Kalsel).
              </div>
            </div>
          )}

          {formData.employmentType === "entrepreneur" && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-850 leading-relaxed flex items-start gap-3">
              <span className="p-1.5 rounded-lg bg-amber-500 text-white text-[10px] font-bold shrink-0">WIRASWASTA FIT</span>
              <div>
                <strong className="block text-amber-900 font-semibold mb-0.5">AKAD PEMBIAYAAN WIRASWASTA:</strong>
                Tim legal kami siap mendampingi penataan dokumen laporan keuangan, rekening koran 3-6 bulan terakhir, serta SIUP/NIB guna mensukseskan proses <strong className="text-amber-900">Spesial Wiraswasta Scoring</strong> di bank syariah.
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-2">Catatan Kebutuhan Anda / Jam Survey yang Diinginkan (Opsional)</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Contoh: Saya berencana survey lokasi hari Sabtu sore jam 3..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-hidden focus:border-emerald-accent bg-gray-50/30"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-emerald-primary text-white font-display text-sm font-bold tracking-wider uppercase rounded-xl shadow-lg transition-all hover:bg-emerald-accent hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="inline-block h-5 w-5 rounded-full border-2 border-t-transparent border-white animate-spin" />
            ) : (
              <>
                <Send className="h-4.5 w-4.5" />
                Saya Tertarik
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
