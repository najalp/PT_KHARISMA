import React, { useState } from "react";
import { ChevronRight, ChevronLeft, X, Eye, ImageIcon } from "lucide-react";

interface GalleryViewerProps {
  images: {
    url: string;
    caption: string;
    category: "exterior" | "interior" | "siteplan" | "construction";
  }[];
}

export default function GalleryViewer({ images }: GalleryViewerProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter Categories Indonesian Labels
  const categoriesList = [
    { id: "all", label: "Semua Foto" },
    { id: "exterior", label: "Eksterior" },
    { id: "interior", label: "Interior & Tata Ruang" },
    { id: "siteplan", label: "Site Plan / Lingkungan" },
    { id: "construction", label: "Progres Konstruksi" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (url: string) => {
    const index = images.findIndex((img) => img.url === url);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    }
  };

  const navNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categoriesList.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2 rounded-full text-xs font-medium cursor-pointer transition-all duration-250 ${
                isSelected
                  ? "bg-emerald-accent text-white shadow-xs font-semibold"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200/75"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid Images */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-3xl text-gray-400">
          <ImageIcon className="h-10 w-10 mx-auto mb-3 opacity-60" />
          <p className="text-sm">Belum ada foto dokumentasi untuk kategori ini.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(img.url)}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-xs cursor-zoom-in bg-gray-100 border border-gray-105"
            >
              <img
                src={img.url}
                alt={img.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-emerald-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <div className="mb-2 self-start p-1.5 rounded-lg bg-white/20 backdrop-blur-xs">
                  <Eye className="h-4 w-4" />
                </div>
                <span className="text-xs uppercase tracking-widest font-mono text-gold-accent font-semibold">
                  {img.category === "exterior" ? "Eksterior" : img.category === "interior" ? "Interior" : img.category === "siteplan" ? "Infrastruktur" : "Progres Sipil"}
                </span>
                <p className="font-display font-medium text-sm mt-0.5 leading-snug">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-50 focus:outline-hidden"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Nav buttons */}
          <button 
            onClick={navPrev}
            className="absolute left-4 p-2.5 sm:p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all cursor-pointer z-50 focus:outline-hidden"
          >
            <ChevronLeft className="h-6 sm:h-8 w-6 sm:w-8" />
          </button>

          <button 
            onClick={navNext}
            className="absolute right-4 p-2.5 sm:p-4 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all cursor-pointer z-50 focus:outline-hidden"
          >
            <ChevronRight className="h-6 sm:h-8 w-6 sm:w-8" />
          </button>

          {/* Central image Container */}
          <div className="max-w-5xl max-h-[80vh] flex flex-col items-center">
            <img 
              src={images[lightboxIndex].url} 
              alt={images[lightboxIndex].caption}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // halt closing
            />
            
            {/* Modal captions info */}
            <div 
              className="text-center mt-4 max-w-xl text-white px-4 py-2 bg-zinc-900/40 rounded-xl backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-[10px] uppercase font-mono tracking-widest text-gold-accent font-bold">
                Foto {lightboxIndex + 1} dari {images.length} • {images[lightboxIndex].category.toUpperCase()}
              </span>
              <p className="font-display font-medium text-sm sm:text-base mt-1 text-gray-200">
                {images[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
