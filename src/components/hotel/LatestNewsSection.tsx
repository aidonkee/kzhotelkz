import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";

// 1. Выносим переводы за пределы компонента
const NEWS_T = {
  ru: {
    subtitle: "События и обновления",
    title: "Жизнь отеля",
    allNews: "Все новости",
    read: "Читать",
    archive: "Архив новостей"
  },
  kz: {
    subtitle: "Оқиғалар мен жаңартулар",
    title: "Қонақ үй тынысы",
    allNews: "Барлық жаңалықтар",
    read: "Оқу",
    archive: "Жаңалықтар мұрағаты"
  },
  en: {
    subtitle: "Events and Updates",
    title: "Hotel Life",
    allNews: "All News",
    read: "Read",
    archive: "News Archive"
  },
  zh: {
    subtitle: "活动与更新",
    title: "酒店生活",
    allNews: "所有新闻",
    read: "阅读",
    archive: "新闻存档"
  },
  az: {
    subtitle: "Hadisələr və Yeniliklər",
    title: "Otel Həyatı",
    allNews: "Bütün xəbərlər",
    read: "Oxu",
    archive: "Xəbər arxivi"
  }
};

const LatestNewsSection = () => {
  const { language, t } = useLanguage();

  // 2. Безопасно получаем нужный перевод
  const lang = (language as keyof typeof NEWS_T) || 'ru';
  const localT = NEWS_T[lang];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(language === 'kz' ? 'kk-KZ' : language === 'ru' ? 'ru-RU' : 'en-US', {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const carouselItems = [...newsData, ...newsData];

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden h-full flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-6 md:mb-8 lg:mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-4">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-[10px] md:text-xs mb-1 block">
              {localT.subtitle}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              {localT.title}
            </h2>
          </div>
          <Link to="/news" className="hidden md:block">
            <Button variant="ghost" className="text-gray-400 hover:text-gold hover:bg-transparent font-bold uppercase text-[10px] md:text-xs tracking-wider transition-colors">
              {localT.allNews} <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex-1 flex items-center">
        <div 
          className="flex gap-6 md:gap-8 px-4"
          style={{ width: 'max-content', animation: 'infiniteScroll 60s linear infinite' }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          {carouselItems.map((item, index) => (
            <Link key={`${item.id}-${index}`} to={`/news/${item.id}`} className="group relative flex-shrink-0 w-[240px] sm:w-[350px] md:w-[400px] lg:w-[450px] block">
              <article className="h-full flex flex-col bg-white rounded-xl md:rounded-2xl transition-transform duration-300 hover:scale-[1.02] shadow-lg">
                <div className="overflow-hidden rounded-xl md:rounded-2xl mb-3 md:mb-4 shadow-md relative aspect-[4/3]">
                  <img src={item.image} alt={t(item.titleKey)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] md:text-xs font-bold text-primary flex items-center gap-1.5 shadow-sm">
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-gold" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <div className="flex-grow px-2 md:px-3">
                  <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors line-clamp-2 leading-tight">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-2 mb-3 leading-relaxed hidden sm:block">
                    {t(item.descKey)}
                  </p>
                </div>
                <div className="px-2 md:px-3 mt-auto pb-2">
                  <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                    {localT.read} <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 md:mt-8 text-center md:hidden px-4">
        <Link to="/news">
          <Button variant="outline" className="w-full rounded-full border-gray-200 text-xs uppercase font-bold tracking-widest h-12">
            {localT.archive}
          </Button>
        </Link>
      </div>
      <style>{`@keyframes infiniteScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
};

export default LatestNewsSection;