import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const ServicesPage = () => {
  const { t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Фотографии интерьеров
  const galleryImages = [
    "/kyzylzharNomera/lux-3-room-number409/IMG_0444.jpg",
    "/kyzylzharNomera/lux-3-room-number409/IMG_0451.jpg",
    "/kyzylzharNomera/lux-3-room-number409/IMG_0431.jpg",
    "/kyzylzharNomera/lux-3-room-number409/IMG_0403.jpg",
    "/kyzylzharNomera/lux-3-room-number409/IMG_0408.jpg",
    "/kyzylzharNomera/lux-2-room/IMG_0383.jpg",
  ];

  const openFullscreen = (index: number) => {
    setCurrentIdx(index);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative z-10">
      <div className="container mx-auto px-6">

        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground uppercase mb-0">
              {t("services.title")}
            </h1>
          </div>
        </div>

        {/* Контент Фотосессии */}
        <div className="max-w-6xl mx-auto">
          {/* Текстовая плашка с ценой */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-luxury border border-white/50 mb-8">
            <p className="text-lg md:text-2xl font-medium text-foreground text-center md:text-left">
              {t("services.photoshoot.text")}
            </p>
          </div>

          {/* Галерея */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openFullscreen(index)}
                className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white/50 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Интерьер для фотосессии ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 drop-shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center overflow-hidden"
            onClick={closeFullscreen}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[10000] p-2"
              onClick={closeFullscreen}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: idx === currentIdx ? 1 : 0.9, opacity: idx === currentIdx ? 1 : 0 }}
                    src={src}
                    className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl rounded-sm"
                    alt={`Fullscreen Gallery ${idx + 1}`}
                  />
                </div>
              ))}

              {/* Navigation Indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? "bg-white w-8" : "bg-white/40 w-2 hover:bg-white/60"
                      }`}
                  />
                ))}
              </div>

              {galleryImages.length > 1 && (
                <>
                  <button
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 backdrop-blur-sm"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                  <button
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 backdrop-blur-sm"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;