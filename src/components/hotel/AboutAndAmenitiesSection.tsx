import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Building2, Users, Star, Trophy, 
  Wifi, Car, Utensils, Coffee,
  Scissors, Tv, WashingMachine, Scale, Accessibility, // Иконки для сервисов
  Flower2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

// --- ДАННЫЕ УСЛУГ (БЕГУЩИЕ СТРОКИ) ---
const HOTEL_SERVICES = [
  { icon: Car, label: "Охраняемая парковка" },
  { icon: Utensils, label: "Ресторан Berlin" },
  { icon: Coffee, label: "Буфет" },
  { icon: Wifi, label: "Бесплатный Wi-Fi" },
  { icon: Tv, label: "Кабельное ТВ" },
  { icon: WashingMachine, label: "Прачечная" },
];

const PARTNER_SERVICES = [
  { icon: Scissors, label: "Парикмахерская" },
  { icon: Flower2, label: "Массаж" }, // Используем Accessibility как placeholder для массажа
  { icon: Scissors, label: "Барбершоп" },
  { icon: Scale, label: "Юридические услуги" },
  { icon: Car, label: "Заказ такси" },
  { icon: Users, label: "Салон красоты" },
];

// Компонент одной карточки услуги
// Обновленная карточка с премиум-дизайном (Концепция: Стекло и Глубина)
// Карточка в стиле iOS Glassmorphism (Frosted Glass)
const ServiceCard = ({ icon: Icon, label }: { icon: any, label: string }) => (
    <div className="relative group mx-4 cursor-default py-6">
      {/* Основной контейнер карточки */}
      <div className="
        flex flex-col items-center justify-center 
        w-[180px] h-[180px] md:w-[220px] md:h-[220px]
        
        /* --- CORE IOS GLASS STYLES --- */
        bg-white/30                       /* Сильная прозрачность (30%) */
        backdrop-blur-2xl                 /* Максимальное размытие фона (эффект матового стекла) */
        backdrop-saturate-150             /* Повышенная насыщенность (Vibrancy), как в iOS */
        border border-white/40            /* Полупрозрачная белая граница */
        shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] /* Специфичная мягкая тень для стекла */
        
        rounded-[2.5rem]                  /* Супер-скругленные углы (iOS style) */
        
        /* --- HOVER EFFECTS --- */
        transition-all duration-500 ease-out
        group-hover:-translate-y-2 
        group-hover:bg-white/60           /* При наведении стекло становится 'плотнее' */
        group-hover:border-white/80       /* Граница становится четче */
        group-hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.25)] /* Золотое свечение */
      ">
        
        {/* Блик света (Gradient Overlay) для объема */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
  
        {/* Контейнер иконки (тоже стеклянный, но темнее) */}
        <div className="
          relative z-10
          w-20 h-20 mb-5 
          rounded-3xl                     /* Squircle форма (между кругом и квадратом) */
          bg-white/40                     /* Стекло внутри стекла */
          backdrop-blur-md
          border border-white/50
          flex items-center justify-center 
          shadow-sm
          transition-all duration-500 
          group-hover:scale-110
          group-hover:bg-gold           /* При наведении заливается золотом */
          group-hover:border-gold
          group-hover:shadow-md
        ">
          <Icon 
            strokeWidth={1.5}
            className="w-9 h-9 text-gray-700 transition-colors duration-500 group-hover:text-white" 
          />
        </div>
  
        {/* Текст */}
        <span className="
          relative z-10 
          font-serif font-bold tracking-wide text-base text-center text-gray-800 
          group-hover:text-black transition-colors duration-300
          px-4 leading-tight drop-shadow-sm
        ">
          {label}
        </span>
      </div>
    </div>
  );

// Компонент Бегущей строки
const Marquee = ({ children, direction = "left", speed = 20 }: { children: React.ReactNode, direction?: "left" | "right", speed?: number }) => {
  return (
    <div className="relative flex overflow-hidden w-full py-4 mask-linear-fade">
      <motion.div 
        className="flex flex-nowrap whitespace-nowrap"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
      >
        {children}
        {children} {/* Дублируем для бесшовности */}
        {children}
        {children}
      </motion.div>
    </div>
  );
};


const AboutAndAmenitiesSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  // Параллакс для фоновых элементов (опционально)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-secondary/10 pt-20 pb-32">
      
      {/* --- ЧАСТЬ 1: О НАС И НАГРАДА --- */}
      <div className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Левая колонка: Текст и Статистика */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Building2 className="w-4 h-4" />
              Гостиничный комплекс
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              История уюта <br/>
              <span className="text-gold">с 1986 года</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              «Кызыл Жар» — это не просто отель, это визитная карточка Петропавловска. 
              Расположенный в самом сердце города, наш комплекс сочетает в себе многолетние традиции гостеприимства и современные стандарты комфорта.
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-4 border-gold pl-4">
                <p className="text-4xl font-bold text-primary mb-1">140+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Номеров</p>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <p className="text-4xl font-bold text-primary mb-1">39</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Лет опыта</p>
              </div>
            </div>
          </div>

          {/* Правая колонка: Награда 2ГИС (Интерактивная карточка) */}
          <div className="relative">
             <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full opacity-50 animate-pulse-slow"></div>
             
             <Link to="/news" className="block group">
               <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-gold/20 overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                  
                  {/* Фоновый паттерн */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center shadow-lg text-white">
                      <Trophy className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      18 апреля 2025
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-gold transition-colors">
                    Премия 2GIS Awards
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    Гостиничный комплекс «Кызыл Жар» получил премию 2GIS Awards. Мы признаны лучшими по отзывам пользователей.
                  </p>

                  <div className="flex items-center text-gold font-bold text-sm uppercase tracking-wider group-hover:gap-4 gap-2 transition-all">
                    Смотреть подробнее <span className="text-lg">→</span>
                  </div>

               </div>
             </Link>
          </div>

        </div>
      </div>


      {/* --- ЧАСТЬ 2: УСЛУГИ (БЕГУЩИЕ СТРОКИ) --- */}
      <div className="w-full">
        
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-3">
            Всё для вашего комфорта
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Инфраструктура комплекса
          </h2>
        </div>

        {/* Лента 1: Сервисы отеля (Влево) */}
        <div className="mb-12">
           <div className="container mx-auto px-6 mb-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                 <Star className="w-5 h-5 text-gold fill-gold" />
                 Сервисы отеля
              </h3>
           </div>
           <Marquee direction="left" speed={40}>
              <div className="flex">
                {HOTEL_SERVICES.map((service, idx) => (
                  <ServiceCard key={idx} icon={service.icon} label={service.label} />
                ))}
              </div>
           </Marquee>
        </div>

        {/* Лента 2: Партнеры (Вправо) */}
        <div>
           <div className="container mx-auto px-6 mb-4">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                 <Users className="w-5 h-5 text-gold" />
                 Сервисы внутри комплекса
              </h3>
           </div>
           <Marquee direction="right" speed={45}>
              <div className="flex">
                {PARTNER_SERVICES.map((service, idx) => (
                  <ServiceCard key={idx} icon={service.icon} label={service.label} />
                ))}
              </div>
           </Marquee>
        </div>

      </div>

    </section>
  );
};

export default AboutAndAmenitiesSection;