import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, Users, CigaretteOff 
} from "lucide-react";

// --- Компонент Карусели ---
const RoomListCarousel = ({ images, alt }: { images: string[], alt: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images?.length]);

  return (
    <div className="relative h-64 md:h-full min-h-[300px] w-full overflow-hidden rounded-3xl bg-gray-100 shadow-inner group">
      {images && images.length > 0 ? (
        <div 
          className="flex h-full w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${alt} ${index + 1}`}
              className="h-full w-full object-cover flex-shrink-0 transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400?text=No+Image"; }}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
           <span className="text-gray-400">Нет фото</span>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-2 h-2 rounded-full transition-all duration-300 shadow-sm ${idx === currentIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const RoomsPage = () => {
  const { t } = useLanguage();

  // --- ДАННЫЕ НОМЕРОВ ---
  const roomCategories = [
    {
      id: "family",
      title: "Семейный (FAMILY)",
      badge: "Популярное",
      coverImages: ["/family-3-room/1-IMAGE 2025-12-25 20:21:35.jpg", "/family-3-room/2-IMAGE 2025-12-25 20:21:34.jpg"],
      description: "Идеальный выбор для семейного отдыха. Простор и уют.",
      rooms: [
        { id: "family-2", name: "СЕМЕЙНЫЙ 2-Х КОМНАТНЫЙ", price: "25 000", capacity: "2-4 чел.", link: "/room/family-2" },
        { id: "family-3", name: "СЕМЕЙНЫЙ 3-Х КОМНАТНЫЙ", price: "30 000", capacity: "4-6 чел.", link: "/room/family" }
      ]
    },
    {
      id: "lux",
      title: "Люкс (LUX)",
      badge: "VIP",
      coverImages: ["/3-room-lux/17-photo_5361824987964182350_y (1).jpg", "/2-room-lux/picture-1.jpg"],
      description: "Высший уровень комфорта. Гостиная, спальня и все удобства.",
      rooms: [
        { id: "lux-2room", name: "ЛЮКС 2-Х КОМНАТНЫЙ", price: "35 000", capacity: "2 чел.", link: "/room/lux-2room" },
        { id: "lux-2room-improved", name: "ЛЮКС 2-Х КОМНАТНЫЙ (УЛУЧШЕННЫЙ)", price: "40 000", capacity: "2 чел.", link: "/room/lux-2room-improved" },
        { id: "lux-3room", name: "ЛЮКС 3-Х КОМНАТНЫЙ", price: "45 000", capacity: "4 чел.", link: "/room/lux-3room" }
      ]
    },
    {
      id: "semilux",
      title: "Полулюкс (SEMI-LUX)",
      badge: "Комфорт",
      coverImages: ["/semi-lux-2-place/10-photo_5361824987964182344_y (1).jpg", "/1-place-semilux/picture-1.jpg"],
      description: "Оптимальное соотношение цены и качества.",
      rooms: [
        { id: "single-semilux", name: "1 МЕСТНЫЙ ОДНОКОМНАТНЫЙ", price: "19 000", capacity: "1 чел.", link: "/room/single-semilux" },
        { id: "semilux-2room-1place", name: "1 МЕСТНЫЙ 2-Х КОМНАТНЫЙ", price: "28 000", capacity: "1 чел.", link: "/room/semilux-2room-1place" },
        { id: "double-semilux", name: "2-Х МЕСТНЫЙ 2-Х КОМНАТНЫЙ", price: "32 000", capacity: "2 чел.", link: "/room/double-semilux" }
      ]
    },
    {
      id: "econom-plus",
      title: "Эконом + (ECONOM+)",
      badge: "",
      coverImages: ["/2-place-econom+/picture-1.jpg", "/1-place-econom+/picture-1.jpg"],
      description: "Уютные номера со свежим ремонтом.",
      rooms: [
        { id: "econom-plus", name: "ЭКОНОМ+ ОДНОКОМНАТНЫЙ", price: "15 000", capacity: "1 чел.", link: "/room/econom-plus" },
        { id: "econom-plus-1-large", name: "ЭКОНОМ+ ОДНОМЕСТНЫЙ (БОЛЬШОЙ)", price: "22 000", capacity: "1 чел.", link: "/room/econom-plus-1-large" },
        { id: "double-econom-plus", name: "ЭКОНОМ+ 2-Х МЕСТНЫЙ", price: "24 000", capacity: "2 чел.", link: "/room/double-econom-plus" },
        { id: "econom-plus-3", name: "ЭКОНОМ+ 3-Х МЕСТНЫЙ", price: "33 000", capacity: "3 чел.", link: "/room/econom-plus-3" }
      ]
    },
    {
      id: "standard",
      title: "Стандарт / Эконом",
      badge: "Выгодно",
      coverImages: ["/one-place-standart/picture-1.jpg", "/1-place-econom/picture-1.jpg"],
      description: "Классические номера для командировок.",
      rooms: [
        { id: "single-econom-wide", name: "ЭКОНОМ ОДНОМЕСТНЫЙ (ШИР. КРОВАТЬ)", price: "9 000", capacity: "1 чел.", link: "/room/single-econom-wide" },
        { id: "double-econom", name: "ЭКОНОМ 2-Х МЕСТНЫЙ", price: "12 000", capacity: "2 чел.", link: "/room/double-econom" },
        { id: "single-standard", name: "СТАНДАРТ ОДНОМЕСТНЫЙ", price: "17 000", capacity: "1 чел.", link: "/room/single-standard" },
        { id: "double-standard", name: "СТАНДАРТ 2-Х МЕСТНЫЙ", price: "27 000", capacity: "2 чел.", link: "/room/double-standard" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-[100px] relative z-10 bg-[#FAFAFA]">
      
      <div className="container mx-auto px-4 md:px-6 pb-12 max-w-6xl">
        
        {/* --- КОМПАКТНЫЙ БЛОК ПРЕДУПРЕЖДЕНИЯ (NO SMOKING) --- */}
        <div className="max-w-3xl mx-auto mb-16 relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-red-100 shadow-sm p-4 md:p-5 flex items-center gap-5 group hover:shadow-md transition-all">
            
            {/* Легкое свечение фона */}
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-red-50 rounded-full blur-xl opacity-60"></div>

            {/* Иконка */}
            <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100 text-red-900/80 group-hover:scale-105 transition-transform">
                <CigaretteOff className="w-5 h-5" />
            </div>

            {/* Текст */}
            <div className="relative z-10 flex-grow">
                <h3 className="font-serif font-bold text-primary text-lg uppercase tracking-wide flex items-center gap-2">
                   Территория без дыма
                </h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                   Курение в номерах <span className="text-red-800 font-medium">запрещено</span>. Для вашего удобства на территории есть оборудованная зона.
                </p>
            </div>
        </div>

        {/* СПИСОК НОМЕРОВ */}
        <div className="space-y-16">
          {roomCategories.map((category) => (
            <section 
              key={category.id} 
              id={category.id} 
              className="scroll-mt-40 bg-white rounded-[3rem] p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                
                {/* ЛЕВАЯ КОЛОНКА: ФОТО */}
                <div className="w-full lg:w-5/12 xl:w-4/12 flex-shrink-0">
                   <RoomListCarousel images={category.coverImages} alt={category.title} />
                   
                   <div className="lg:hidden mt-6 text-center">
                      <h2 className="font-serif text-2xl font-bold text-primary uppercase">{category.title}</h2>
                      <p className="text-muted-foreground text-sm mt-2">{category.description}</p>
                   </div>
                </div>

                {/* ПРАВАЯ КОЛОНКА: СПИСОК НОМЕРОВ */}
                <div className="w-full lg:w-7/12 xl:w-8/12 flex flex-col justify-center">
                  
                  {/* Заголовок категории (Desktop) */}
                  <div className="hidden lg:block mb-8 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-4 mb-2">
                       <h2 className="font-serif text-3xl font-bold text-primary uppercase tracking-wide">
                        {category.title}
                       </h2>
                       {category.badge && (
                         <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full uppercase tracking-wider border border-gold/20">
                           {category.badge}
                         </span>
                       )}
                    </div>
                    <p className="text-muted-foreground text-lg font-light">
                      {category.description}
                    </p>
                  </div>

                  {/* ТАБЛИЦА ЦЕН */}
                  <div className="space-y-6">
                    {category.rooms.map((room) => (
                      <div key={room.id} className="group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
                          
                          {/* Название + Точки */}
                          <div className="flex-grow flex items-baseline overflow-hidden">
                            <h3 className="text-base md:text-lg font-bold text-gray-800 uppercase tracking-tight flex-shrink-0 group-hover:text-gold transition-colors">
                              {room.name}
                            </h3>
                            <div className="hidden md:block flex-grow border-b-2 border-dotted border-gray-300 mx-4 relative -top-1 opacity-50"></div>
                          </div>

                          {/* Цена + Кнопки */}
                          <div className="flex items-center justify-between md:justify-end gap-6 flex-shrink-0">
                            
                            <div className="text-right">
                               <span className="block text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                                 {room.price} ₸
                               </span>
                               <span className="text-xs text-muted-foreground hidden md:block">
                                 за ночь / {room.capacity}
                               </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Link to={room.link}>
                                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-gray-50 hover:bg-gold/10 text-gray-500 hover:text-gold border border-gray-200 hover:border-gold/30 transition-all">
                                  <ChevronRight className="w-5 h-5" />
                                </Button>
                              </Link>

                              <Link to="/rates">
                                <Button className="btn-luxury h-10 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg">
                                  {t("nav.book")}
                                </Button>
                              </Link>
                            </div>

                          </div>
                        </div>
                        
                        <div className="md:hidden text-xs text-muted-foreground mt-1 flex items-center gap-1">
                          <Users className="w-3 h-3" /> {room.capacity}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RoomsPage;