import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsData } from "@/data/newsData";

const NewsDetailPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const newsItem = newsData.find((item) => item.id === Number(id));

  if (!newsItem) {
    return (
      <div className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-serif font-bold mb-4">Новость не найдена</h1>
        <Link to="/news">
          <Button variant="outline">Вернуться к новостям</Button>
        </Link>
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 1. ВЕРХНИЙ БЛОК */}
      <div className="relative w-full bg-gray-900 pt-24 pb-12 md:pt-32 md:pb-16 px-6">
        
        {/* Фоновая картинка */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={newsItem.image} 
            // Используем t() для alt
            alt={t(newsItem.titleKey)} 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </div>

        {/* Контент заголовка */}
        <div className="relative z-10 container mx-auto max-w-4xl">
          <Link 
            to="/news" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md w-fit border border-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к новостям
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm mb-4 font-medium">
            <span className="bg-gold text-white px-3 py-1 rounded-md uppercase tracking-wider text-xs font-bold">
              {newsItem.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              {formatDate(newsItem.date)}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            {/* ПЕРЕВОД ЗАГОЛОВКА ДЕТАЛЬНОЙ НОВОСТИ */}
            {t(newsItem.titleKey)}
          </h1>
        </div>
      </div>

      {/* 2. НИЖНИЙ БЛОК (Контент) */}
      <div className="flex-grow bg-white">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          
          {/* Текст новости (HTML остается как есть) */}
          <div 
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-serif prose-headings:text-gray-900 
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-img:rounded-xl prose-img:shadow-lg prose-img:w-full prose-img:my-8
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: newsItem.content }} 
          />

          {/* Подвал новости */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/news">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Все новости
              </Button>
            </Link>
            <div className="flex gap-2">
              <span className="text-sm text-gray-400 py-2">Поделиться:</span>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gold hover:bg-gold/10 rounded-full">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;