import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";

const NewsPage = () => {
  const { t } = useLanguage();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      restaurant: t("news.category.restaurant"),
      hotel: t("news.category.hotel"),
      events: t("news.category.events"),
      conference: t("news.category.conference"),
      video: t("news.category.video"),
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("news.title")}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("news.subtitle")}
          </p>
        </div>

        {/* Featured News (Первая новость) */}
        {newsData.length > 0 && (
          <div className="mb-12">
            <Link to={`/news/${newsData[0].id}`} className="block group">
              <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
                <img
                  src={newsData[0].image}
                  // Используем t() для перевода заголовка
                  alt={t(newsData[0].titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                      {getCategoryLabel(newsData[0].category)}
                    </span>
                    <span className="flex items-center gap-1 text-white/80 text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(newsData[0].date)}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {/* ПЕРЕВОД ЗАГОЛОВКА */}
                    {t(newsData[0].titleKey)}
                  </h2>
                  <p className="text-white/80 text-lg mb-6 max-w-2xl line-clamp-2">
                    {/* ПЕРЕВОД ОПИСАНИЯ */}
                    {t(newsData[0].descKey)}
                  </p>
                  <Button className="btn-luxury pointer-events-none">
                    {t("news.read_more")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* News Grid (Остальные новости) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.slice(1).map((item) => (
            <Link to={`/news/${item.id}`} key={item.id} className="group">
              <article className="bg-card h-full flex flex-col rounded-2xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.category === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <PlayCircle className="w-12 h-12 text-white opacity-90" />
                    </div>
                  )}
                  <span className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                    {/* ПЕРЕВОД ЗАГОЛОВКА */}
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                    {/* ПЕРЕВОД ОПИСАНИЯ */}
                    {t(item.descKey)}
                  </p>
                  <div className="flex items-center text-gold font-medium text-sm mt-auto">
                    {t("news.read_more")}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;