import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Maximize2, ExternalLink, Map } from "lucide-react";



  const TOUR_TRANSLATIONS = {
    ru: { badge: "3D-тур", title: "Прогуляйтесь по отелю", fs: "Полный экран", open: "Открыть тур" },
    kz: { badge: "3D-тур", title: "Қонақ үйді аралап көріңіз", fs: "Толық экран", open: "Турды ашу" },
    en: { badge: "3D-Tour", title: "Take a virtual tour", fs: "Fullscreen", open: "Open Tour" },
    zh: { badge: "3D-导览", title: "虚拟参观酒店", fs: "全屏", open: "打开导览" },
    az: { badge: "3D-tur", title: "Oteli virtual gəzin", fs: "Tam ekran", open: "Turu aç" }
  };

  const TourSection = () => {
    const { language } = useLanguage();
    const tourUrl = "https://tour.panoee.net/693b381129219625359974f8/69446c7733446145c5ee28d8"; 
  
    const localT = TOUR_TRANSLATIONS[language as keyof typeof TOUR_TRANSLATIONS] || TOUR_TRANSLATIONS.ru;
  
    return (
      <section className="py-8 md:py-16 bg-gray-50/50">
        {/* КРИТИКА: Убрал px-4 на мобилках (px-0), чтобы тур был во всю ширину экрана.
           На десктопе оставил ограничения.
        */}
        <div className="container mx-auto px-0 md:px-6 max-w-[1920px]">
          <div className="flex flex-col items-center justify-center mb-6 text-center px-4">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-1.5 rounded-full text-primary mb-3">
              <Map className="w-4 h-4" />
              <span className="font-serif font-bold text-xs tracking-widest uppercase">{localT.badge}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary">{localT.title}</h2>
          </div>
  
          <div className="relative w-full">
            {/* Блюр на мобилках лучше скрыть или уменьшить, чтобы не было горизонтального скролла */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-primary/10 to-gold/20 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none hidden md:block" />
            
            {/* ГЛАВНЫЕ ИЗМЕНЕНИЯ ТУТ:
               1. rounded-none на мобилках (чтобы в край экрана), rounded-3xl на десктопе.
               2. mx-0 на мобилках, lg:mx-12 на больших экранах.
               3. h-[450px] для мобилок — теперь тур выше и удобнее для обзора.
            */}
            <div className="relative bg-white md:rounded-3xl overflow-hidden shadow-2xl border border-white/60 h-[450px] md:h-[600px] lg:h-[700px] xl:h-[800px] mx-0 lg:mx-12">
              <iframe 
                  src={tourUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="3D Tour Kyzyl Zhar" 
              />
              
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 pointer-events-none">
                <Maximize2 className="w-3 h-3" />
                <span>{localT.fs}</span>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 relative z-30 px-4">
              <a href={tourUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                <Button className="btn-luxury h-12 w-full md:w-auto px-8 text-sm rounded-xl shadow-xl flex items-center justify-center gap-2">
                  {localT.open} <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default TourSection;