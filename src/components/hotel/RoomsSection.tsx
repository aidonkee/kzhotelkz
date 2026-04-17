import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// РЕАЛЬНЫЕ ДАННЫЕ (СТРОГО ПО ТВОЕМУ СПИСКУ)
const rooms = [
  {
    id: "lux",
    name: "Люкс (LUX)",
    description: "Роскошные 2-х и 3-х комнатные номера. Гостиная, спальня, полный набор удобств.",
    price: "от 35 000 ₸",
    image: "/3-room-lux/17-photo_5361824987964182350_y (1).jpg",
    link: "/rooms#lux",
    features: ["2-4 чел.", "VIP", "35-45 тыс."],
  },
  {
    id: "family",
    name: "Семейный",
    description: "Просторные 2-х и 3-х комнатные номера. Идеальный выбор для отдыха с семьей.",
    price: "от 25 000 ₸",
    image: "/family-3-room/1-IMAGE 2025-12-25 20:21:35.jpg",
    link: "/rooms#family",
    features: ["4-6 чел.", "Простор", "25-30 тыс."],
  },
  {
    id: "semilux",
    name: "Полулюкс",
    description: "1 и 2-х комнатные номера. Оптимальное сочетание цены и повышенного комфорта.",
    price: "от 19 000 ₸",
    image: "/semi-lux-2-place/10-photo_5361824987964182344_y (1).jpg",
    link: "/rooms#semilux",
    features: ["1-2 чел.", "Комфорт", "19-32 тыс."],
  },
  {
    id: "econom-plus",
    name: "Эконом +",
    description: "Улучшенные номера со свежим ремонтом. Есть 1, 2 и 3-х местные варианты.",
    price: "от 15 000 ₸",
    image: "/2-place-econom+/picture-1.jpg",
    link: "/rooms#econom-plus",
    features: ["Свежий ремонт", "1-3 чел.", "15-33 тыс."],
  },
  {
    id: "standard",
    name: "Стандарт",
    description: "1-местный (17 000 ₸) и 2-местный (27 000 ₸). Уютные номера для командировок.",
    price: "от 17 000 ₸", 
    image: "/one-place-standart/picture-1.jpg",
    link: "/rooms#standard",
    features: ["1-2 чел.", "Рабочая зона", "17-27 тыс."],
  },
  {
    id: "econom",
    name: "Эконом",
    description: "1-мест (12k), Бол. кровать (20k), 2-мест (20k), 3-мест (30k), 4-мест (40k).",
    price: "от 12 000 ₸", 
    image: "/1-place-econom/picture-1.jpg",
    link: "/rooms#standard", // Ссылка на раздел эконом/стандарт
    features: ["1-4 чел.", "Бюджетно", "12-40 тыс."],
  },
];

const RoomsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const visibleCards = 3; 

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 > rooms.length - visibleCards ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? rooms.length - visibleCards : prev - 1
    );
  };

  return (
    <section id="rooms" className="py-24 relative overflow-hidden">
      
      {/* ФОНОВЫЙ ПАТТЕРН */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply" 
        style={{ 
          backgroundImage: "url('/bg-pattern.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px" 
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80 pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* ЗАГОЛОВОК */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-3 block">
              Размещение
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
              Ваш идеальный номер
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Более 140 номеров: от доступного Эконома до роскошных Люксов. Выберите свой уровень комфорта.
            </p>
          </div>

          {/* Кнопки */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold hover:text-white hover:bg-gold transition-all duration-300 group bg-white shadow-sm"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-gold hover:text-white hover:bg-gold transition-all duration-300 group bg-white shadow-sm"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* КАРУСЕЛЬ */}
        <div className="overflow-hidden -mx-4 px-4 py-8">
          <div
            className="flex gap-6 md:gap-8 transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1)"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards + 0.5)}%)` }} 
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-22px)]"
              >
                <Link to={room.link} className="block h-full group">
                  <div className="relative h-[480px] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                    
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/600x800?text=No+Image"; }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute top-6 right-6">
                       <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                         {room.price}
                       </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      
                      <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                        {room.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 mb-4 text-white/70 text-xs font-medium uppercase tracking-wider">
                         {room.features.map((feature, idx) => (
                           <span key={idx} className="flex items-center bg-white/10 px-2 py-1 rounded border border-white/5">
                             {feature}
                           </span>
                         ))}
                      </div>

                      <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        {room.description}
                      </p>

                      <div className="flex items-center text-white font-bold text-sm uppercase tracking-widest gap-2 group-hover:gap-4 transition-all duration-300">
                        Смотреть варианты <ArrowRight className="w-4 h-4 text-gold" />
                      </div>
                    </div>

                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.max(1, rooms.length - visibleCards + 1) }).map((_, i) => ( 
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === i ? "bg-gold w-8" : "bg-gray-300 w-2 hover:bg-gold/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RoomsSection;