/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView";
import ProjectDetailView from "./views/ProjectDetailView";
import AboutView from "./views/AboutView";
import MortgageCalculator from "./components/MortgageCalculator";
import { Landmark, ArrowRight, ShieldCheck, BadgeCheck } from "lucide-react";
import { COMPANY_DETAILS } from "./data/mockData";

export default function App() {
  const [currentView, setView] = useState<string>("home");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState<string>("d-royal-kharisma");

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans select-none antialiased">
      {/* 1. Header Navigation Component */}
      <Header currentView={currentView} setView={setView} />

      {/* 2. Main Page rendering */}
      <main className="flex-1">
        {currentView === "home" && (
          <HomeView setView={setView} setSelectedProjectSlug={setSelectedProjectSlug} />
        )}

        {currentView === "d-royal" && (
          <ProjectDetailView projectSlug="d-royal-kharisma" setView={setView} />
        )}

        {currentView === "pondok-kharisma" && (
          <ProjectDetailView projectSlug="pondok-kharisma" setView={setView} />
        )}

        {currentView === "kpr-simulator" && (
          <div className="space-y-16 py-12 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header intro */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase block mb-1">
                KONSULTASI FINANSIAL
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-emerald-primary mb-3">
                Kalkulasi Kredit KPR Mandiri
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Kami siap membantu kalkulasi keuangan keluarga Anda secara presisi. Integrasi draf simulasi ini langsung terkoneksi ke Relationship Officer perumahan kami demi proses persetujuan berkas yang mulus.
              </p>
            </div>

            {/* Main Interactive widget */}
            <MortgageCalculator initialProjectSlug={selectedProjectSlug} />

            {/* Supporting Information: Partner Banks details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/40">
                <div className="h-10 w-10 bg-emerald-light text-emerald-accent rounded-xl flex items-center justify-center mb-4 border border-emerald-100">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-base text-emerald-primary mb-2">Bungaflat KPR Subsidi ASN</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Para Aparatur Sipil Negara (ASN / PNS), PPPK, Guru, dan Pegawai Honorer berkesempatan memperoleh bunga flat khusus 5% s.d. berakhirnya masa tenor. Konsultasikan draf SK kepegawaian Anda kepada sales kami.
                </p>
              </div>

              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/40">
                <div className="h-10 w-10 bg-emerald-light text-emerald-accent rounded-xl flex items-center justify-center mb-4 border border-emerald-100">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-base text-emerald-primary mb-2">Tanpa Biaya Tersembunyi</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Semua transaksi tanda jadi di luar bank terdokumentasikan rapi secara tertulis. Kami menjamin bebas biaya siluman yang tidak tertera di Surat Pemesanan Rumah (SPR) awal.
                </p>
              </div>

              <div className="border border-gray-150 p-6 rounded-2xl bg-gray-50/40">
                <div className="h-10 w-10 bg-emerald-light text-emerald-accent rounded-xl flex items-center justify-center mb-4 border border-emerald-100">
                  <Landmark className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-base text-emerald-primary mb-2">Kemitraan Bank Daerah & BUMN</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Hubungan andalan dekat kami dengan BTN, Mandiri, BNI, dan Bank Syariah Kalsel menjamin berkas Anda dianalisis secara humanis dan fleksibel demi masa depan keluarga Anda.
                </p>
              </div>
            </div>
          </div>
        )}

        {currentView === "about" && <AboutView />}
      </main>

      {/* 3. Footer Branding Component */}
      <Footer setView={setView} />
    </div>
  );
}

