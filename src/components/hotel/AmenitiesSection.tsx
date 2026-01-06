import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Car, Utensils, Wifi, CarTaxiFront, Dumbbell, Bath, Coffee, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AmenitiesSection = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const amenities = [
    {
      icon: Car,
      titleKey: "amenities.parking",
      descriptionKey: "amenities.parking.desc",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80", // Парковка
    },
    {
      icon: Utensils,
      titleKey: "amenities.restaurant",
      descriptionKey: "amenities.restaurant.desc",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80", // Ресторан
    },
    {
      icon: Wifi,
      titleKey: "amenities.wifi",
      descriptionKey: "amenities.wifi.desc",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80", // Wi-Fi / Лобби
    },
    {
      icon: CarTaxiFront,
      titleKey: "amenities.taxi",
      descriptionKey: "amenities.taxi.desc",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80", // Такси
    },
    {
      icon: Dumbbell, // Используем иконку гантели для бассейна (как было в прошлом коде) или Waves если есть
      titleKey: "amenities.pool",
      descriptionKey: "amenities.pool.desc",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80", // Бассейн
    },
    {
      icon: Bath,
      titleKey: "amenities.spa",
      descriptionKey: "amenities.spa.desc",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80", // СПА
    },
    {
      icon: Coffee,
      titleKey: "amenities.coffee",
      descriptionKey: "amenities.coffee.desc",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80", // Кофе
    },
    {
      icon: Briefcase,
      titleKey: "amenities.business",
      descriptionKey: "amenities.business.desc",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", // Бизнес
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Ширина карточки + отступ
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="amenities" className="section-padding bg-secondary/30 relative">
      <div className="container mx-auto">
        {/* Header + Navigation Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              {t("amenities.title")}
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
              {t("amenities.subtitle")}
            </h2>
          </div>
          
          {/* Кнопки навигации (видны только на десктопе, на мобилке свайп) */}
          <div className="hidden md:flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("left")}
              className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-colors h-12 w-12"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll("right")}
              className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-colors h-12 w-12"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Скрываем скроллбар
        >
          {amenities.map((amenity, index) => (
            <div
              key={amenity.titleKey}
              className="min-w-[300px] md:min-w-[350px] snap-center group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={amenity.image} 
                  alt={t(amenity.titleKey)} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                  <amenity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 font-serif text-2xl font-semibold">
                  {t(amenity.titleKey)}
                </h3>
                <p className="text-sm text-white/80 line-clamp-2">
                  {t(amenity.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;