import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";

const LatestNewsSection = () => {
  const { t } = useLanguage();

  const originalNews = newsData;
  const carouselItems = [...originalNews, ...originalNews];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">
              События и обновления
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary leading-tight">
              Жизнь отеля
            </h2>
          </div>
          
          <Link to="/news" className="hidden md:block">
             <Button variant="ghost" className="text-gray-400 hover:text-gold hover:bg-transparent font-bold uppercase text-xs tracking-wider transition-colors">
                Все новости <ArrowRight className="w-4 h-4 ml-2" />
             </Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div 
          className="flex gap-6 md:gap-8 px-4"
          style={{
            width: 'max-content',
            animation: 'infiniteScroll 60s linear infinite'
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {carouselItems.map((item, index) => (
            <Link 
              key={`${item.id}-${index}`} 
              to={`/news/${item.id}`}
              className="group relative flex-shrink-0 w-[280px] md:w-[400px] block"
            >
              <article className="h-full flex flex-col bg-white rounded-2xl transition-transform duration-300 hover:scale-[1.02]">
                <div className="overflow-hidden rounded-2xl mb-4 shadow-md relative aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={t(item.titleKey)} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                    <Calendar className="w-3 h-3 text-gold" />
                    {formatDate(item.date)}
                  </div>
                </div>

                <div className="flex-grow px-1">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors line-clamp-2 leading-tight">
                    {t(item.titleKey)}
                  </h3>
                  
                  <p className="text-gray-500 text-xs md:text-sm line-clamp-2 mb-3 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>

                <div className="px-1 mt-auto">
                   <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    Читать <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center md:hidden px-6">
        <Link to="/news">
          <Button variant="outline" className="w-full rounded-full border-gray-200 text-xs uppercase font-bold tracking-widest h-12">
            Архив новостей
          </Button>
        </Link>
      </div>

      <style>{`
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LatestNewsSection;