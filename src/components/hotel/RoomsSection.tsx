import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Maximize, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    id: 1,
    name: "Люкс",
    description: "Просторный номер с панорамным видом на город",
    price: "от 45 000 ₸",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    guests: 2,
    size: "65 м²",
  },
  {
    id: 2,
    name: "Делюкс",
    description: "Элегантный номер с современным дизайном",
    price: "от 35 000 ₸",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
    guests: 2,
    size: "45 м²",
  },
  {
    id: 3,
    name: "Премиум",
    description: "Комфортный номер для идеального отдыха",
    price: "от 28 000 ₸",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    guests: 2,
    size: "35 м²",
  },
  {
    id: 4,
    name: "Стандарт",
    description: "Уютный номер со всеми удобствами",
    price: "от 18 000 ₸",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    guests: 2,
    size: "28 м²",
  },
  {
    id: 5,
    name: "Эконом+",
    description: "Функциональный номер для деловых поездок",
    price: "от 12 000 ₸",
    image: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80",
    guests: 1,
    size: "22 м²",
  },
  {
    id: 6,
    name: "Эконом",
    description: "Комфортный номер по доступной цене",
    price: "от 8 000 ₸",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    guests: 1,
    size: "18 м²",
  },
];

const RoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= rooms.length - visibleCards + 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? rooms.length - visibleCards : prev - 1
    );
  };

  return (
    <section id="rooms" className="section-padding">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Наши номера
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">
              Выберите ваш комфорт
            </h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards + 2)}%)` }}
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-16px)] group"
              >
                <div className="bg-card rounded-3xl overflow-hidden luxury-shadow luxury-shadow-hover transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="text-white font-serif text-xl">{room.name}</span>
                      <span className="text-white/90 font-medium">{room.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {room.description}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        {room.guests} {room.guests === 1 ? "гость" : "гостя"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Maximize className="w-4 h-4" />
                        {room.size}
                      </span>
                    </div>
                    <Button variant="outline" className="w-full rounded-full group/btn">
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: rooms.length - visibleCards + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-primary w-6" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
