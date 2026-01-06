import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 1. СПИСОК ФОТОГРАФИЙ ДЛЯ ФОНА
  const heroImages = [
    "/picture.png",
    "/image copy 18.png",
    "/image copy 19.png",
  ];

  // 2. Логика переключения каждые 5 секунд
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Функция для ручного переключения
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* 3. КАРУСЕЛЬ ФОНА */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Затемнение фона */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-10 animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white mb-6 leading-tight drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="text-white/90 text-lg md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Buttons Action Area */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" 
          style={{ animationDelay: "0.2s" }}
        >
          <Link to="/booking" className="w-full sm:w-auto">
            <Button className="btn-luxury h-14 px-10 text-lg w-full sm:w-auto shadow-lg hover:shadow-primary/50">
              {t("nav.book")}
            </Button>
          </Link>

          <Link to="/rooms" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="h-14 px-10 text-lg w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/80 text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              {t("nav.rooms")}
            </Button>
          </Link>
        </div>
      </div>

      {/* ОБЪЕДИНЕННЫЙ БЛОК: Мышка + Точки 
          Расположен по центру (left-1/2), выровнен колонкой (flex-col).
          Это гарантирует, что центр мышки и центр ряда точек совпадают идеально.
      */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6 animate-float">
        
        {/* Мышка */}
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
        </div>

        {/* Точки */}
        <div className="flex gap-4 items-center justify-center">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              // Используем w-2 h-2 для ВСЕХ точек, чтобы сетка не дергалась.
              // Увеличение делаем через scale.
              className={`rounded-full transition-all duration-500 ease-in-out w-2 h-2 ${
                index === currentImageIndex 
                  ? "bg-white scale-[1.75] shadow-[0_0_8px_rgba(255,255,255,0.8)] opacity-100" 
                  : "bg-white/40 hover:bg-white/70 hover:scale-125"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;