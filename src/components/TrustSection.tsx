import { useEffect, useState, useRef } from "react";
import { Users, Building2, Home, Star } from "lucide-react";

const Counter = ({ target, duration, label, suffix = "", icon: Icon }: any) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <div ref={counterRef} className="flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-md hover:-translate-y-1 transition-transform">
      <div className="h-12 w-12 rounded-full bg-emerald-light text-emerald-accent flex items-center justify-center mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <span className="font-display font-extrabold text-4xl text-emerald-primary mb-1">
        {count}{suffix}
      </span>
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">{label}</span>
    </div>
  );
};

export default function TrustSection() {
  return (
    <section className="bg-emerald-950 text-white py-20 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-950/80 to-emerald-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-accent uppercase block mb-2 flex items-center justify-center gap-1">
            <Star className="h-3.5 w-3.5 fill-gold-accent" />
            Kepercayaan Telah Terbukti
            <Star className="h-3.5 w-3.5 fill-gold-accent" />
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Komitmen Nyata Kami Untuk Banua
          </h2>
          <p className="text-sm text-gray-400">
            Angka-angka ini adalah bukti kerja keras dan komitmen kami dalam menghadirkan perumahan berkualitas dan tepat waktu bagi keluarga Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Counter target={100} duration={2000} suffix="+" label="Unit Terjual" icon={Home} />
          <Counter target={2} duration={1500} suffix="+" label="Proyek Aktif" icon={Building2} />
          <Counter target={150} duration={2500} suffix="+" label="Keluarga Mempercayai Kami" icon={Users} />
        </div>
      </div>
    </section>
  );
}
