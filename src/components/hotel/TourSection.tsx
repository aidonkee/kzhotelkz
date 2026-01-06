import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Maximize2, ExternalLink } from "lucide-react";

const TourSection = () => {
  const { t } = useLanguage();
  const tourUrl = "https://tour.panoee.net/693b381129219625359974f8/69446c7733446145c5ee28d8";

  return (
    <section id="tour" className="section-padding relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Заголовок секции */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {t("tour.label")}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            {t("tour.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("tour.desc")}
          </p>
        </div>

        {/* Контейнер с Iframe */}
        <div className="relative w-full max-w-6xl mx-auto mb-10">
          {/* Декоративная подложка */}
          <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-primary/20 to-gold/20 rounded-[2rem] blur-xl opacity-50" />
          
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
            <div className="aspect-[16/9] w-full h-[500px] md:h-[600px]">
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
            <div className="absolute bottom-6 right-6 pointer-events-none bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 opacity-80 group-hover:opacity-0 transition-opacity duration-300">
              <Maximize2 className="w-4 h-4" /> 
              {t("tour.fullscreen")}
            </div>
          </div>
        </div>

        {/* Кнопка открытия на весь экран */}
        <div className="flex justify-center">
          <a href={tourUrl} target="_blank" rel="noopener noreferrer">
            <Button className="btn-luxury h-12 px-8 text-base shadow-lg hover:shadow-gold/20 flex items-center gap-2">
              {t("tour.open_full")}
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default TourSection;