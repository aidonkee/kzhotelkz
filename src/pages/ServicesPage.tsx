import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesPage = () => {
  const { t } = useLanguage();

  // Фотографии интерьеров
  const galleryImages = [
    "/image.png",
    "/image copy.png",
    "/image copy 2.png",
    "/image copy 3.png",
    "/image copy 4.png",
    "/image copy 5.png",
    "/image copy 6.png",
    "/image copy 7.png",
  ];

  return (
    // relative z-10 чтобы было видно поверх фона-обоев
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="group relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white/50"
              >
                <img
                  src={src}
                  alt={`Интерьер для фотосессии ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;