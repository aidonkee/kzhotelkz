import { useState, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useData } from "@/contexts/DataContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart, BedDouble, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Translations ---
const TRANSLATIONS = {
  // ... (keeping translations as they are, just collapsing for brevity in replacement if possible, but replace_file_content needs exact match. 
  // I will rely on the fact that I'm replacing the top part and removing calculatorData constant)
  ru: {
    title: "Онлайн-Бронирование",
    subtitle: "Выберите тариф (за номер или за место) и укажите количество.",
    colCategory: "Категория",
    colName: "Наименование номера",
    colTariff: "Выберите тариф",
    colQty: "Количество",
    night: "За номер",
    place: "За место",
    total: "Итоговая стоимость",
    bookBtn: "ЗАБРОНИРОВАТЬ ЧЕРЕЗ WHATSAPP",
    catLabel: "Категория",
    waInit: "Здравствуйте! Я использовал онлайн-калькулятор на сайте и хочу забронировать:\n\n",
    waTypeNight: "За номер (Ночь)",
    waTypePlace: "За место",
    waTotal: "ИТОГО",
    waTotalSum: "Сумма"
  },
  kz: {
    title: "Онлайн Брондау",
    subtitle: "Тарифті таңдаңыз (нөмір үшін немесе орын үшін) және санын көрсетіңіз.",
    colCategory: "Санат",
    colName: "Нөмір атауы",
    colTariff: "Тарифті таңдаңыз",
    colQty: "Саны",
    night: "Нөмір үшін",
    place: "Орын үшін",
    total: "Жалпы құны",
    bookBtn: "WHATSAPP АРҚЫЛЫ БРОНДАУ",
    catLabel: "Санат",
    waInit: "Сәлеметсіз бе! Мен сайттағы онлайн-калькуляторды қолдандым және брондағым келеді:\n\n",
    waTypeNight: "Нөмір үшін (Түн)",
    waTypePlace: "Орын үшін",
    waTotal: "ЖАЛПЫ",
    waTotalSum: "Сомасы"
  },
  en: {
    title: "Online Booking",
    subtitle: "Choose a rate (per room or per person) and specify quantity.",
    colCategory: "Category",
    colName: "Room Name",
    colTariff: "Choose Rate",
    colQty: "Quantity",
    night: "Per Room",
    place: "Per Person",
    total: "Total Cost",
    bookBtn: "BOOK VIA WHATSAPP",
    catLabel: "Category",
    waInit: "Hello! I used the online calculator on the website and want to book:\n\n",
    waTypeNight: "Per Room (Night)",
    waTypePlace: "Per Person",
    waTotal: "TOTAL",
    waTotalSum: "Sum"
  },
  zh: {
    title: "在线预订",
    subtitle: "选择费率（按房间或按人）并指定数量。",
    colCategory: "类别",
    colName: "房间名称",
    colTariff: "选择费率",
    colQty: "数量",
    night: "每间房",
    place: "每人",
    total: "总费用",
    bookBtn: "通过 WHATSAPP 预订",
    catLabel: "类别",
    waInit: "您好！我使用了网站上的在线计算器，想预订：\n\n",
    waTypeNight: "每间房（晚）",
    waTypePlace: "每人",
    waTotal: "总计",
    waTotalSum: "金额"
  },
  az: {
    title: "Onlayn Bronlaşdırma",
    subtitle: "Tarifi seçin (otaq üçün və ya yer üçün) və sayı göstərin.",
    colCategory: "Kateqoriya",
    colName: "Otaq adı",
    colTariff: "Tarifi seçin",
    colQty: "Say",
    night: "Otaq üçün",
    place: "Yer üçün",
    total: "Yekun qiymət",
    bookBtn: "WHATSAPP İLƏ BRON ET",
    catLabel: "Kateqoriya",
    waInit: "Salam! Saytdakı onlayn kalkulyatordan istifadə etdim və bron etmək istəyirəm:\n\n",
    waTypeNight: "Otaq üçün (Gecə)",
    waTypePlace: "Yer üçün",
    waTotal: "CƏMİ",
    waTotalSum: "Məbləğ"
  }
};


const BookingCalculatorPage = () => {
  const { language } = useLanguage();
  const { calculatorData } = useData(); // <--- Get data from context
  const langKey = (language as keyof typeof TRANSLATIONS) || 'ru';
  const localT = TRANSLATIONS[langKey];

  // Состояние: ID номера -> количество
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  // Состояние: ID номера -> тип цены ('night' | 'place')
  // По умолчанию ставим 'night'
  const [priceTypes, setPriceTypes] = useState<Record<string, 'night' | 'place'>>({});

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

  const togglePriceType = (id: string, type: 'night' | 'place') => {
    setPriceTypes(prev => ({ ...prev, [id]: type }));
  };

  // Подсчет итоговой суммы
  const totalSum = useMemo(() => {
    let sum = 0;
    calculatorData.forEach(cat => {
      cat.rooms.forEach(room => {
        const qty = quantities[room.id] || 0;
        const type = priceTypes[room.id] || 'night';
        const price = type === 'night' ? room.priceNight : room.pricePlace;
        sum += qty * price;
      });
    });
    return sum;
  }, [quantities, priceTypes]);

  const handleWhatsAppOrder = () => {
    let message = localT.waInit;
    let hasItems = false;

    calculatorData.forEach(cat => {
      cat.rooms.forEach(room => {
        const qty = quantities[room.id] || 0;
        if (qty > 0) {
          hasItems = true;
          const type = priceTypes[room.id] || 'night';
          const price = type === 'night' ? room.priceNight : room.pricePlace;
          const typeLabel = type === 'night' ? localT.waTypeNight : localT.waTypePlace;
          const roomName = (room.name as any)[langKey] || room.name.ru;
          const catTitle = (cat.title as any)[langKey] || cat.title.ru;

          message += `🔹 *${roomName}* (${catTitle})\n   Tip: ${typeLabel}\n   Qty: ${qty} | ${localT.waTotalSum}: ${qty * price} ₸\n\n`;
        }
      });
    });

    if (!hasItems) return;

    message += `💰 *${localT.waTotal}: ${totalSum.toLocaleString()} ₸*`;

    const whatsappUrl = `https://wa.me/+77055660909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-[80px] pb-32 relative bg-[#FAFAFA]">

      {/* Заголовок */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-wide">
          {localT.title}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {localT.subtitle}
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl space-y-8">

        {/* Шапка таблицы */}
        <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider px-8 pb-2 border-b border-gray-200">
          <div className="col-span-3">{localT.colCategory}</div>
          <div className="col-span-4">{localT.colName}</div>
          <div className="col-span-3 text-center">{localT.colTariff}</div>
          <div className="col-span-2 text-right">{localT.colQty}</div>
        </div>

        {calculatorData.map((category) => {
          const categoryTitle = (category.title as any)[langKey] || category.title.ru;
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              key={category.id}
              className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-all duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 items-center">

                {/* Левая часть: Фото и Название */}
                <div className="md:col-span-3 flex md:flex-col items-center md:items-center gap-4 md:border-r md:border-gray-100 md:pr-6 h-full">
                  <div className="relative w-24 h-24 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg border border-gray-100 aspect-square">
                    <img
                      src={category.image}
                      alt={categoryTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/400?text=No+Image"; }}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-serif text-sm font-bold bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm">
                        {categoryTitle}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary mb-1">{categoryTitle}</h2>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest hidden md:block">{localT.catLabel}</span>
                  </div>
                </div>

                {/* Правая часть: Список номеров */}
                <div className="md:col-span-9 space-y-6 md:space-y-0">
                  {category.rooms.map((room, idx) => {
                    const currentType = priceTypes[room.id] || 'night';
                    const roomName = (room.name as any)[langKey] || room.name.ru;

                    return (
                      <div
                        key={room.id}
                        className={`flex flex-col md:grid md:grid-cols-9 gap-4 items-start md:items-center py-5 ${idx !== category.rooms.length - 1 ? "md:border-b md:border-gray-50" : ""
                          }`}
                      >
                        {/* Название */}
                        <div className="md:col-span-4 font-medium text-gray-800 text-sm md:text-base pr-2">
                          {roomName}
                        </div>

                        {/* Выбор тарифа (Ночь / Место) */}
                        <div className="md:col-span-3 flex justify-center w-full">
                          <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-100 w-full max-w-[240px]">
                            {/* Кнопка НОЧЬ */}
                            <button
                              onClick={() => togglePriceType(room.id, 'night')}
                              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg text-xs transition-all duration-300 ${currentType === 'night'
                                ? 'bg-white shadow-sm text-primary font-bold border border-gray-100'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                              <span className="flex items-center gap-1 mb-0.5"><BedDouble className="w-3 h-3" /> {localT.night}</span>
                              <span>{room.priceNight.toLocaleString()} ₸</span>
                            </button>

                            {/* Кнопка МЕСТО */}
                            <button
                              onClick={() => togglePriceType(room.id, 'place')}
                              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg text-xs transition-all duration-300 ${currentType === 'place'
                                ? 'bg-white shadow-sm text-primary font-bold border border-gray-100'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                              <span className="flex items-center gap-1 mb-0.5"><User className="w-3 h-3" /> {localT.place}</span>
                              <span>{room.pricePlace.toLocaleString()} ₸</span>
                            </button>
                          </div>
                        </div>

                        {/* Контрол количества */}
                        <div className="md:col-span-2 w-full flex justify-end">
                          <div className="flex items-center bg-gray-50 rounded-xl p-1.5 shadow-inner border border-gray-200">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDecrement(room.id)}
                              className="h-9 w-9 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-500"
                              disabled={!quantities[room.id]}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="w-10 text-center font-bold text-lg text-primary">
                              {quantities[room.id] || 0}
                            </span>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleIncrement(room.id)}
                              className="h-9 w-9 rounded-lg hover:bg-white hover:shadow-sm transition-all text-primary"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </motion.div>
          )
        })}

      </div>

      {/* --- FLOATING TOTAL BAR --- */}
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
                  <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">{localT.total}</p>
                  <p className="text-3xl font-bold text-primary leading-none">{totalSum.toLocaleString()} ₸</p>
                </div>
              </div>

              <Button
                onClick={handleWhatsAppOrder}
                className="w-full md:w-auto btn-luxury h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-primary/40 animate-pulse-slow uppercase"
              >
                {localT.bookBtn}
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingCalculatorPage;