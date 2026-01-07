import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Maximize2, ExternalLink } from "lucide-react";

const TourSection = () => {
  const { t } = useLanguage();
  const tourUrl = "https://tour.panoee.net/693b381129219625359974f8/69446c7733446145c5ee28d8";

  return (
    <section id="tour" className="py-16 md:py-24 relative z-10 overflow-hidden">
      
      {/* 1. ЗАГОЛОВОК (Оставляем читаемым по центру) */}
      <div className="container mx-auto px-6 mb-10 text-center max-w-4xl">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
          {t("tour.label")}
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
          {t("tour.title")}
        </h2>
        <p className="text-muted-foreground text-lg">
          {t("tour.desc")}
        </p>
      </div>

      {/* 2. КОНТЕЙНЕР ТУРА (Почти на всю ширину) */}
      {/* px-2 = 8px отступа на мобилке, px-4 = 16px на пк */}
      <div className="w-full px-2 md:px-4 mb-10">
        
        <div className="relative w-full mx-auto">
          {/* Декоративная подложка (Глоу эффект) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-primary/20 to-gold/30 rounded-[2rem] blur-2xl opacity-40 pointer-events-none" />
          
          {/* Сам блок с туром */}
          {/* Убрал max-w-6xl, теперь ширина ограничивается только отступами экрана */}
          <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group">
            
            {/* Высота: 500px на мобилке, 75% высоты экрана на ПК для погружения */}
            <div className="w-full h-[500px] md:h-[75vh] min-h-[500px]">
              <iframe 
                src={tourUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="3D Tour Kyzyl Zhar"
                className="w-full h-full"
              />
            </div>
            
            {/* Оверлей-подсказка */}
            <div className="absolute bottom-6 right-6 pointer-events-none bg-black/60 backdrop-blur-md text-white px-5 py-3 rounded-full text-sm font-medium flex items-center gap-2 opacity-80 group-hover:opacity-0 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" /> 
              {t("tour.fullscreen")}
            </div>
          </div>
        </div>

      </div>

      {/* 3. КНОПКА */}
      <div className="flex justify-center px-6">
        <a href={tourUrl} target="_blank" rel="noopener noreferrer">
          <Button className="btn-luxury h-14 px-10 text-lg rounded-full shadow-xl hover:shadow-gold/20 flex items-center gap-3">
            {t("tour.open_full")}
            <ExternalLink className="w-5 h-5" />
          </Button>
        </a>
      </div>

    </section>
  );
};

export default TourSection;