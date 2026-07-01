import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, Users, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TRANSLATIONS = {
  ru: {
    checkIn: "Дата заезда",
    checkOut: "Дата выезда",
    guestsPlaceholder: "Гости...",
    g_1: "1 гость", g_2: "2 гостя", g_3: "3 гостя", g_4: "4 гостя", g_5: "5+ гостей",
    showRooms: "Показать номера"
  },
  kz: {
    checkIn: "Келу күні",
    checkOut: "Кету күні",
    guestsPlaceholder: "Қонақтар...",
    g_1: "1 қонақ", g_2: "2 қонақ", g_3: "3 қонақ", g_4: "4 қонақ", g_5: "5+ қонақ",
    showRooms: "Нөмірлерді көрсету"
  },
  en: {
    checkIn: "Check-in",
    checkOut: "Check-out",
    guestsPlaceholder: "Guests...",
    g_1: "1 guest", g_2: "2 guests", g_3: "3 guests", g_4: "4 guests", g_5: "5+ guests",
    showRooms: "Show Rooms"
  },
  zh: {
    checkIn: "入住日期",
    checkOut: "退房日期",
    guestsPlaceholder: "客人...",
    g_1: "1 位客人", g_2: "2 位客人", g_3: "3 位客人", g_4: "4 位客人", g_5: "5 位以上",
    showRooms: "查看房型"
  },
  az: {
    checkIn: "Giriş tarixi",
    checkOut: "Çıxış tarixi",
    guestsPlaceholder: "Qonaqlar...",
    g_1: "1 qonaq", g_2: "2 qonaq", g_3: "3 qonaq", g_4: "4 qonaq", g_5: "5+ qonaq",
    showRooms: "Otaqları göstər"
  }
};

const HeroSection = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const heroImages = [
    "/kyzylzharNomera/dron-1.JPG",
    "/kyzylzharNomera/dron-4.png",
    "/reception-new.jpeg",
    "/kyzylzharNomera/reception/IMG_9921.jpg",
    "/kyzylzharNomera/reception/IMG_9928.jpg"
  ];

  const localT = TRANSLATIONS[language as keyof typeof TRANSLATIONS] || TRANSLATIONS.ru;

  // Функции переключения
  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Calculate minimum checkout date (checkIn + 1 or today + 1)
  const minCheckOutOffset = checkIn ? new Date(new Date(checkIn).getTime() + 86400000) : new Date(new Date().getTime() + 86400000);
  const minCheckOut = minCheckOutOffset.toISOString().split('T')[0];

  const handleBookingSubmit = () => {
    if (!checkIn || !checkOut) {
      alert(language === 'kz' ? "Күндерді таңдаңыз" : "Выберите даты");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      alert(language === 'kz' ? "Кету күні келу күнінен кейін болуы керек" : "Дата выезда должна быть после даты заезда");
      return;
    }

    const params = new URLSearchParams();
    params.set("checkIn", checkIn);
    params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    navigate(`/rooms?${params.toString()}`);
  };

  return (
    <section id="hero" className="relative h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`absolute left-0 right-0 top-0 w-full h-full object-cover ${currentImageIndex === 0 ? 'object-[center_35%]' :
              currentImageIndex === 1 ? 'object-center' :
                'object-center'
              }`}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      </div>

      {/* Стрелки по бокам */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 text-white/50 hover:text-white transition-colors hidden md:block"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center h-full pb-20">
        <div className="max-w-4xl mx-auto mb-8 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-white mb-4 drop-shadow-lg leading-[1.1]">
            {t("hero.title")}
          </h1>
          <p className="text-white/90 text-sm sm:text-lg font-light max-w-2xl mx-auto drop-shadow-md">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Форма бронирования */}
        <div className="w-full max-w-4xl mx-auto animate-fade-up bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full p-4 md:p-3 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-2">
            <div className="w-full md:flex-1 relative group">
              <div className="flex items-center gap-3 px-4 py-3 md:py-2 hover:bg-black/5 rounded-xl md:rounded-full transition-colors cursor-pointer">
                <Calendar className="w-5 h-5 text-primary" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">{localT.checkIn}</span>
                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val) {
                        const year = new Date(val).getFullYear();
                        if (year > 9999) {
                          // If user typed a 5th digit, revert to 2026
                          const dateParts = val.split('-');
                          dateParts[0] = '2026';
                          setCheckIn(dateParts.join('-'));
                        } else {
                          setCheckIn(val);
                          if (checkOut && new Date(val) >= new Date(checkOut)) {
                            setCheckOut("");
                          }
                        }
                      } else {
                        setCheckIn("");
                      }
                    }}
                    className="w-full bg-transparent text-sm focus:outline-none font-bold text-primary cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200" />

            <div className="w-full md:flex-1 relative group">
              <div className="flex items-center gap-3 px-4 py-3 md:py-2 hover:bg-black/5 rounded-xl md:rounded-full transition-colors cursor-pointer">
                <Calendar className="w-5 h-5 text-primary" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">{localT.checkOut}</span>
                  <input
                    type="date"
                    min={checkIn || minCheckOut}
                    value={checkOut}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val) {
                        const year = new Date(val).getFullYear();
                        if (year > 9999) {
                          const dateParts = val.split('-');
                          dateParts[0] = '2026';
                          setCheckOut(dateParts.join('-'));
                        } else {
                          setCheckOut(val);
                        }
                      } else {
                        setCheckOut("");
                      }
                    }}
                    className="w-full bg-transparent text-sm focus:outline-none font-bold text-primary cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200" />

            <div className="w-full md:flex-1 relative group">
              <div className="flex items-center gap-3 px-4 py-3 md:py-2 hover:bg-black/5 rounded-xl md:rounded-full transition-colors cursor-pointer">
                <Users className="w-5 h-5 text-primary" />
                <div className="flex flex-col items-start w-full">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">{t("nav.rooms") === "Нөмірлер" ? "Қонақтар" : "Гости"}</span>
                  <select value={guests} onChange={(e) => setGuests(e.target.value)} className="w-full bg-transparent text-sm focus:outline-none cursor-pointer font-bold text-primary appearance-none">
                    <option value="">{localT.guestsPlaceholder}</option>
                    {[1, 2, 3, 4, "5+"].map(num => (
                      <option key={num} value={num}>{localT[`g_${num === "5+" ? 5 : num}` as keyof typeof localT]}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <Button onClick={handleBookingSubmit} className="w-full md:w-auto btn-luxury h-14 md:h-12 px-10 text-sm font-black uppercase rounded-xl md:rounded-full shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              {localT.showRooms}
            </Button>
          </div>
        </div>
      </div>

      {/* НИЖНЯЯ ПАНЕЛЬ: ТОЧКИ И МЫШКА */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
        {/* Точки */}
        <div className="flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentImageIndex ? "w-8 bg-white" : "w-2 bg-white/40"
                }`}
            />
          ))}
        </div>

        {/* Анимированная мышка */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;