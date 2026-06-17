import React, { useState, useEffect } from "react";
import { Calculator, Percent, Calendar, DollarSign, Send, ArrowRight, Check } from "lucide-react";
import { ACTIVE_PROJECTS, MORTGAGE_BANK_PARTNERS, COMPANY_DETAILS } from "../data/mockData";

export default function MortgageCalculator({ initialProjectSlug }: { initialProjectSlug?: string }) {
  // Find preset options
  const flatPresets = ACTIVE_PROJECTS.flatMap((p) =>
    p.typesList.map((t) => ({
      projectName: p.name,
      typeName: t.nameName,
      price: t.price,
      slug: p.slug,
    }))
  );

  const [price, setPrice] = useState<number>(flatPresets[0].price);
  const [dpPercent, setDpPercent] = useState<number>(10); // default 10% dp
  const [dpValue, setDpValue] = useState<number>(flatPresets[0].price * 0.1);
  const [tenor, setTenor] = useState<number>(15); // default 15 years
  const [interestRate, setInterestRate] = useState<number>(5.75); // BTN default
  const [selectedBank, setSelectedBank] = useState<string>("Bank Mandiri");

  const [installment, setInstallment] = useState<number>(0);
  const [requiredMinIncome, setRequiredMinIncome] = useState<number>(0);
  const [leadSent, setLeadSent] = useState<boolean>(false);

  // Form states for custom calculator lead capture
  const [buyerName, setBuyerName] = useState<string>("");
  const [buyerPhone, setBuyerPhone] = useState<string>("");

  // Populate from initial slug if provided
  useEffect(() => {
    if (initialProjectSlug) {
      const match = flatPresets.find((p) => p.slug === initialProjectSlug);
      if (match) {
        setPrice(match.price);
        const initialDp = match.price * (dpPercent / 100);
        setDpValue(initialDp);
      }
    }
  }, [initialProjectSlug]);

  // Recalculate DP value when price or percent changes
  const handleDpPercentChange = (val: number) => {
    setDpPercent(val);
    setDpValue(Math.floor(price * (val / 100)));
  };

  const handleDpValueChange = (val: number) => {
    setDpValue(val);
    const calculatedPercent = parseFloat(((val / price) * 100).toFixed(1));
    setDpPercent(calculatedPercent > 100 ? 100 : calculatedPercent);
  };

  const handlePriceChange = (val: number) => {
    setPrice(val);
    setDpValue(Math.floor(val * (dpPercent / 100)));
  };

  // Run the annuity formula on modification
  useEffect(() => {
    const loanAmount = price - dpValue;
    if (loanAmount <= 0) {
      setInstallment(0);
      setRequiredMinIncome(0);
      return;
    }

    const r = interestRate / 12 / 100;
    const n = tenor * 12;

    let computedInstallment = 0;
    if (r === 0) {
      computedInstallment = loanAmount / n;
    } else {
      computedInstallment = loanAmount * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    setInstallment(Math.floor(computedInstallment));
    // Generally standard banks rule: installment shouldn't exceed 1/3 of net income
    setRequiredMinIncome(Math.floor(computedInstallment * 3));
  }, [price, dpValue, tenor, interestRate]);

  // Currency Formatter
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

  const handleApplyPreset = (presetPrice: number) => {
    setPrice(presetPrice);
    setDpValue(Math.floor(presetPrice * (dpPercent / 100)));
  };

  const handleBankSelect = (bankName: string, rate: number) => {
    setSelectedBank(bankName);
    setInterestRate(rate);
  };

  const handleWhatsAppSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerPhone) {
      alert("Mohon masukkan Nama dan Nomor WhatsApp Anda untuk memperoleh rincian simulasi.");
      return;
    }

    const textStr = encodeURIComponent(
      `Halo Sales PT Kharisma Bangun Banua,\n\n` +
      `Saya ingin berkonsultasi mengenai rencana pembelian properti dengan rincian berikut:\n` +
      `- Nama: ${buyerName}\n` +
      `- WhatsApp: ${buyerPhone}\n` +
      `- Harga Properti: ${formatIDR(price)}\n` +
      `- Uang Muka (DP): ${formatIDR(dpValue)} (${dpPercent}%)\n` +
      `- Plafond KPR: ${formatIDR(price - dpValue)}\n` +
      `- Tenor Kredit: ${tenor} Tahun (${tenor * 12} bulan)\n` +
      `- Suku Bunga: ${interestRate}% pa (${selectedBank})\n` +
      `- Estimasi Angsuran: ${formatIDR(installment)}/bulan\n\n` +
      `Mohon bantuannya untuk info ketersediaan unit dan opsi pembiayaan terbaik. Terima kasih!`
    );

    setLeadSent(true);
    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_DETAILS.whatsappNumber.replace(/[^0-9]/g, "")}?text=${textStr}`, "_blank");
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {/* Inputs Section */}
      <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-emerald-light text-emerald-accent">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-emerald-primary">Kalkulator KPR Interaktif</h3>
            <p className="text-xs text-gray-500">Hitung simulasi pembiayaan hunian impian Anda secara akurat</p>
          </div>
        </div>

        {/* Presets Grid */}
        <div className="mb-8">
          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
            Pilih Berdasarkan Unit Perumahan:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {flatPresets.map((preset, idx) => {
              const isSelected = price === preset.price;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleApplyPreset(preset.price)}
                  className={`p-2.5 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                    isSelected
                      ? "bg-emerald-primary text-white border-emerald-primary shadow-xs font-semibold"
                      : "bg-white text-gray-700 border-gray-200 hover:border-emerald-accent hover:bg-emerald-light/10"
                  }`}
                >
                  <span className="block font-medium truncate text-[10px] opacity-90">{preset.projectName}</span>
                  <span className="block font-bold mt-0.5 truncate">{preset.typeName}</span>
                  <span className="block font-mono text-[10px] mt-1 opacity-80">{formatIDRCompact(preset.price)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Input sliders */}
        <div className="space-y-6">
          {/* Price Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Harga Rumah (IDR)</span>
              <span className="text-sm font-mono font-bold text-emerald-accent">{formatIDR(price)}</span>
            </div>
            <input
              type="range"
              min={150000000}
              max={1600000000}
              step={10000000}
              value={price}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-accent"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono">
              <span>Rp 150 Jt</span>
              <span>Rp 500 Jt</span>
              <span>Rp 1 Milyar</span>
              <span>Rp 1.6 Milyar</span>
            </div>
          </div>

          {/* Down Payment (DP) Input */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Uang Muka / Down Payment</span>
              <span className="text-sm font-mono font-bold text-gray-900">
                {formatIDR(dpValue)} <span className="text-xs text-gold-accent">({dpPercent}%)</span>
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={50}
              step={5}
              value={dpPercent}
              onChange={(e) => handleDpPercentChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-accent"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono">
              <span>0% (PNS Promo)</span>
              <span>10% (Standar)</span>
              <span>20%</span>
              <span>30%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Tenor KPR */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-700">Tenor Kredit KPR (Tahun)</span>
              <span className="text-sm font-mono font-bold text-emerald-primary">{tenor} Tahun <span className="text-xs text-gray-400">({tenor * 12} Bln)</span></span>
            </div>
            <input
              type="range"
              min={5}
              max={20}
              step={5}
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-accent"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-mono">
              <span>5 Tahun</span>
              <span>10 Thn</span>
              <span>15 Thn</span>
              <span>20 Tahun</span>
            </div>
          </div>

          {/* Suku Bunga Selection */}
          <div>
            <span className="block text-sm font-semibold text-gray-700 mb-2">Suku Bunga KPR & Bank Mitra</span>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {MORTGAGE_BANK_PARTNERS.map((bank, idx) => {
                const isSelected = selectedBank === bank.name;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleBankSelect(bank.name, bank.rate)}
                    className={`p-3 text-left rounded-xl border text-xs transition-all cursor-pointer ${
                      isSelected
                        ? "bg-emerald-light/80 border-emerald-accent text-emerald-primary"
                        : "bg-white text-gray-600 border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold">{bank.name}</span>
                      <span className="font-mono text-emerald-accent font-bold text-xs">{bank.rate}% pa</span>
                    </div>
                    <span className="text-[10px] text-gray-400 leading-tight block">{bank.description}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-emerald-primary text-white">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-gold-accent uppercase mb-2 block">
            ESTIMASI HASIL SIMULASI
          </span>
          <h4 className="font-display font-bold text-2xl text-white mb-6 border-b border-white/10 pb-4">
            Rincian Pembayaran
          </h4>

          <div className="space-y-5">
            <div className="flex justify-between items-center text-sm">
              <span className="text-white/70">Uang Muka {dpPercent}%</span>
              <span className="font-mono text-white font-semibold">{formatIDR(dpValue)}</span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-white/70">Suku Bunga Efektif</span>
              <span className="font-mono text-gold-accent font-bold">{interestRate}% p.a (Flat)</span>
            </div>

            <div className="bg-emerald-950 p-5 rounded-2xl border border-emerald-800/60 mt-4 shadow-inner space-y-4">
              <div>
                <span className="text-[10px] text-white/50 block font-mono">TOTAL PINJAMAN / PLAFOND</span>
                <span className="font-display font-bold text-2xl text-white block mt-0.5 font-mono tracking-tight">
                  {formatIDR(price - dpValue)}
                </span>
              </div>
              
              <div className="border-t border-emerald-800/60 pt-4">
                <span className="text-[10px] text-white/50 block font-mono">ANGSURAN BULANAN ESTIMASI</span>
                <span className="font-display font-extrabold text-3xl text-gold-accent block mt-1 font-mono tracking-tight bg-clip-text">
                  {formatIDR(installment)}
                  <span className="text-sm text-white/70 font-normal"> /bulan</span>
                </span>
              </div>
              
              <div className="border-t border-emerald-800/60 pt-3 mt-3">
                <span className="text-[10px] text-white/50 block font-mono">MINIMUM GABUNGAN PENGHASILAN</span>
                <span className="font-mono font-bold text-sm text-white mt-0.5 block">
                  {formatIDR(requiredMinIncome)} <span className="text-[10px] font-normal text-white/60">/bln</span>
                </span>
                <p className="text-[9px] text-white/40 mt-1 leading-normal">
                  *Rasio aman bank (angsuran maksimal 33% dari pendapatan bersih).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture form for WhatsApp redirection inside calculator */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <h5 className="font-display font-semibold text-sm text-white mb-2 leading-snug">
            Konsultasikan Angsuran Ini
          </h5>
          <p className="text-[11px] text-white/60 mb-4">
            Isi nama Anda untuk mengirim data hitungan ini secara rapi ke Relationship Officer kami.
          </p>

          <form onSubmit={handleWhatsAppSimulation} className="space-y-2.5">
            <input
              type="text"
              required
              placeholder="Nama Lengkap Anda"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-emerald-950 border border-emerald-800 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-gold-accent"
            />
            <input
              type="tel"
              required
              placeholder="No. WhatsApp (Contoh: 0812xxxx)"
              value={buyerPhone}
              onChange={(e) => setBuyerPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-emerald-950 border border-emerald-800 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-gold-accent font-mono"
            />

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-xs font-bold font-display tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer transition-all ${
                leadSent
                  ? "bg-gold-accent text-emerald-primary"
                  : "bg-white text-emerald-primary hover:bg-gold-accent hover:text-white"
              }`}
            >
              {leadSent ? (
                <>
                  <Check className="h-4 w-4 animate-bounce" />
                  Membuka WhatsApp...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Kirim ke Sales WA
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
