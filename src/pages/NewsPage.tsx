import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsPage = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      titleKey: "news.item1.title",
      descKey: "news.item1.desc",
      date: "2024-12-20",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      category: "restaurant",
    },
    {
      id: 2,
      titleKey: "news.item2.title",
      descKey: "news.item2.desc",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      category: "hotel",
    },
    {
      id: 3,
      titleKey: "news.item3.title",
      descKey: "news.item3.desc",
      date: "2024-12-10",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80",
      category: "events",
    },
    {
      id: 4,
      titleKey: "news.item4.title",
      descKey: "news.item4.desc",
      date: "2024-12-05",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      category: "conference",
    },
  ];

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
    };
    return labels[category] || category;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
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

        {/* Featured News */}
        {newsItems.length > 0 && (
          <div className="mb-12">
            <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] group">
              <img
                src={newsItems[0].image}
                alt={t(newsItems[0].titleKey)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getCategoryLabel(newsItems[0].category)}
                  </span>
                  <span className="flex items-center gap-1 text-white/80 text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(newsItems[0].date)}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-4">
                  {t(newsItems[0].titleKey)}
                </h2>
                <p className="text-white/80 text-lg mb-6 max-w-2xl">
                  {t(newsItems[0].descKey)}
                </p>
                <Button className="btn-luxury">
                  {t("news.read_more")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(1).map((item) => (
            <article
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                  {getCategoryLabel(item.category)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(item.date)}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-gold transition-colors">
                  {t(item.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {t(item.descKey)}
                </p>
                <Button variant="ghost" className="text-gold hover:text-gold hover:bg-gold/10 p-0 h-auto">
                  {t("news.read_more")}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
