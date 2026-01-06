import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- ДАННЫЕ (Взяты с твоих скриншотов) ---
const calculatorData = [
  {
    id: "family",
    title: "СЕМЕЙНЫЙ",
    image: "/family-3-room/1-IMAGE 2025-12-25 20:21:35.jpg", // Используем фото из предыдущих шагов
    rooms: [
      { id: "fam-2", name: "Семейный 2-х комнатный", priceNight: 25000, pricePlace: 25000 },
      { id: "fam-3", name: "Семейный 3-х комнатный", priceNight: 30000, pricePlace: 10000 },
    ]
  },
  {
    id: "lux",
    title: "ЛЮКС",
    image: "/3-room-lux/17-photo_5361824987964182350_y (1).jpg",
    rooms: [
      { id: "lux-2-imp", name: "Люкс 2-х комнатный (Улучшенный)", priceNight: 40000, pricePlace: 40000 },
      { id: "lux-3", name: "Люкс 3-х комнатный", priceNight: 45000, pricePlace: 45000 },
      { id: "lux-2", name: "Люкс 2-х комнатный", priceNight: 35000, pricePlace: 35000 },
    ]
  },
  {
    id: "semilux",
    title: "ПОЛУЛЮКС",
    image: "/semi-lux-2-place/10-photo_5361824987964182344_y (1).jpg",
    rooms: [
      { id: "semi-1", name: "1 местный однокомнатный", priceNight: 19000, pricePlace: 19000 },
      { id: "semi-1-2room", name: "1 местный 2-х комнатный", priceNight: 28000, pricePlace: 28000 },
      { id: "semi-2-2room", name: "2-х местный 2-х комнатный", priceNight: 32000, pricePlace: 16000 },
    ]
  },
  {
    id: "econom-plus",
    title: "ЭКОНОМ +",
    image: "/2-place-econom+/picture-1.jpg",
    rooms: [
      { id: "eco-p-3", name: "Эконом+ 3-х местный", priceNight: 33000, pricePlace: 11000 },
      { id: "eco-p-1", name: "Эконом+ Однокомнатный", priceNight: 15000, pricePlace: 15000 },
      { id: "eco-p-2", name: "Эконом+ 2-х местный", priceNight: 24000, pricePlace: 12000 },
      { id: "eco-p-1-large", name: "Эконом+ Одноместный (Большой)", priceNight: 22000, pricePlace: 22000 },
    ]
  },
  {
    id: "standard",
    title: "СТАНДАРТ",
    image: "/one-place-standart/picture-1.jpg",
    rooms: [
      { id: "std-1", name: "1 местный", priceNight: 17000, pricePlace: 17000 },
      { id: "std-2", name: "2-х местный", priceNight: 27000, pricePlace: 13500 },
    ]
  },
  {
    id: "econom",
    title: "ЭКОНОМ",
    image: "/1-place-econom/picture-1.jpg",
    rooms: [
      { id: "eco-1-l", name: "Одноместный Эконом с большой кроватью", priceNight: 20000, pricePlace: 20000 },
      { id: "eco-2", name: "Эконом 2-х местный", priceNight: 20000, pricePlace: 10000 },
      { id: "eco-1", name: "Эконом 1-о местный", priceNight: 12000, pricePlace: 12000 },
      { id: "eco-4", name: "4-х местный", priceNight: 40000, pricePlace: 10000 },
      { id: "eco-3", name: "3-х местный", priceNight: 30000, pricePlace: 10000 },
    ]
  }
];

const BookingCalculatorPage = () => {
  const { t } = useLanguage();
  
  // Состояние: ID номера -> количество
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleIncrement = (id: string) => {
    setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id: string) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });
  };

  // Подсчет итоговой суммы
  const totalSum = useMemo(() => {
    let sum = 0;
    calculatorData.forEach(cat => {
      cat.rooms.forEach(room => {
        const qty = quantities[room.id] || 0;
        sum += qty * room.priceNight;
      });
    });
    return sum;
  }, [quantities]);

  const handleWhatsAppOrder = () => {
    // Формируем красивое сообщение для WhatsApp
    let message = "Здравствуйте! Я использовал онлайн-калькулятор на сайте и хочу забронировать:\n\n";
    let hasItems = false;

    calculatorData.forEach(cat => {
      cat.rooms.forEach(room => {
        const qty = quantities[room.id] || 0;
        if (qty > 0) {
          hasItems = true;
          message += `🔹 *${room.name}* (${cat.title})\n   Кол-во: ${qty} | Сумма: ${qty * room.priceNight} ₸\n`;
        }
      });
    });

    if (!hasItems) return;

    message += `\n💰 *ИТОГО: ${totalSum} ₸*`;
    
    const whatsappUrl = `https://wa.me/+77055660909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-[80px] pb-32 relative bg-[#FAFAFA]">
      
      {/* Заголовок */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-wide">
          Онлайн-Бронирование
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Выберите необходимое количество номеров. Итоговая стоимость рассчитается автоматически.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        
        {/* Шапка таблицы (скрыта на мобильных, видна на ПК) */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider px-8 pb-2 border-b border-gray-200">
          <div className="col-span-3">Категория</div>
          <div className="col-span-4">Наименование номера</div>
          <div className="col-span-3 text-center flex justify-around">
            <span>Ночь</span>
            <span>Место</span>
          </div>
          <div className="col-span-2 text-right">Количество</div>
        </div>

        {calculatorData.map((category) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={category.id}
            className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 p-6 items-center">
              
              {/* Левая часть: Фото и Название категории */}
              <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-4 md:border-r md:border-gray-100 md:pr-4">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/150"; }}
                  />
                  {/* Бейдж категории */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-serif text-xs font-bold bg-black/50 px-2 py-1 rounded backdrop-blur-sm">
                      {category.title}
                    </span>
                  </div>
                </div>
                <h2 className="font-serif text-xl font-bold text-primary md:hidden">{category.title}</h2>
                <div className="hidden md:block">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">{category.title}</h2>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Категория</span>
                </div>
              </div>

              {/* Правая часть: Список номеров */}
              <div className="md:col-span-9 space-y-6 md:space-y-0">
                {category.rooms.map((room, idx) => (
                  <div 
                    key={room.id} 
                    className={`flex flex-col md:grid md:grid-cols-9 gap-4 items-start md:items-center py-4 ${
                      idx !== category.rooms.length - 1 ? "md:border-b md:border-gray-50" : ""
                    }`}
                  >
                    {/* Название */}
                    <div className="md:col-span-4 font-medium text-gray-800 text-sm md:text-base pr-2">
                      {room.name}
                    </div>

                    {/* Цены */}
                    <div className="md:col-span-3 flex justify-between w-full md:justify-around text-sm">
                      <div className="flex flex-col items-center gap-1">
                         <span className="md:hidden text-xs text-gray-400 uppercase">За ночь</span>
                         <div className="flex items-center gap-1.5 font-bold text-primary bg-primary/5 px-2 py-1 rounded-md">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                            {room.priceNight.toLocaleString()} ₸
                         </div>
                      </div>
                      <div className="flex flex-col items-center gap-1 opacity-60 grayscale hover:grayscale-0 transition-all">
                         <span className="md:hidden text-xs text-gray-400 uppercase">За место</span>
                         <div className="flex items-center gap-1.5 font-medium text-gray-600 px-2 py-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {room.pricePlace.toLocaleString()} ₸
                         </div>
                      </div>
                    </div>

                    {/* Контрол количества */}
                    <div className="md:col-span-2 w-full flex justify-end">
                      <div className="flex items-center bg-gray-50 rounded-xl p-1 shadow-inner border border-gray-100">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDecrement(room.id)}
                          className="h-8 w-8 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-500"
                          disabled={!quantities[room.id]}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center font-bold text-primary">
                          {quantities[room.id] || 0}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleIncrement(room.id)}
                          className="h-8 w-8 rounded-lg hover:bg-white hover:shadow-sm transition-all text-primary"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* --- FLOATING TOTAL BAR (Липкий подвал с итогом) --- */}
      <AnimatePresence>
        {totalSum > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-50 py-4 px-6 md:px-0"
          >
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Итоговая стоимость</p>
                  <p className="text-3xl font-bold text-primary leading-none">{totalSum.toLocaleString()} ₸</p>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppOrder}
                className="w-full md:w-auto btn-luxury h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-primary/40 animate-pulse-slow"
              >
                ЗАБРОНИРОВАТЬ ЧЕРЕЗ WHATSAPP
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingCalculatorPage;