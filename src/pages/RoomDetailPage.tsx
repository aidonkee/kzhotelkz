import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, CheckCircle2, MessageCircle,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useData } from "@/contexts/DataContext";
import { motion, AnimatePresence } from "framer-motion";
import { TRANSLATIONS as SHARED_TRANSLATIONS, AMENITY_ICONS } from "@/data/rooms";

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const { rooms: ROOMS_DATA } = useData(); // <--- Get rooms from context
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0); // Состояние для подложки
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const langKey = (language as keyof typeof SHARED_TRANSLATIONS) || 'ru';
  // @ts-ignore
  const localT = SHARED_TRANSLATIONS[langKey] || SHARED_TRANSLATIONS.ru;
  const room = id ? ROOMS_DATA[id] : undefined;

  useEffect(() => {
    setCurrentIdx(0);
    setPrevIdx(0);
  }, [id]);

  // Логика автопрокрутки
  useEffect(() => {
    if (isPaused || !room?.images || room.images.length <= 1) return;
    const interval = setInterval(() => {
      setPrevIdx(currentIdx); // Сохраняем текущую как фоновую
      setCurrentIdx((prev) => (prev + 1) % room.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIdx, isPaused, room?.images]);

  if (!room) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center">
        <h1 className="font-serif text-3xl text-primary">{localT.notFound}</h1>
        <Link to="/rooms" className="text-muted-foreground hover:text-primary mt-4 inline-block">{localT.backBtn}</Link>
      </div>
    );
  }

  const images = room.images || [];
  const currentRoomName = room.name[langKey] || room.name.ru;

  const nextImage = () => {
    setPrevIdx(currentIdx);
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setPrevIdx(currentIdx);
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const getThumbnailIndices = () => {
    if (images.length <= 1) return [];
    return [
      (currentIdx + 1) % images.length,
      (currentIdx + 2) % images.length,
      (currentIdx + 3) % images.length,
    ];
  };

  const handleBookClick = () => {
    // Basic booking link for details page, maybe without guest count for now or default to 1
    // Or we could add guest counter here too? The request was specifically for /rooms page to add guest count.
    // For now, I'll keep the basic "I want to book..." message.
    let message = "";
    if (langKey === 'ru') {
      message = `Здравствуйте! Хочу забронировать номер: ${currentRoomName}.`;
    } else if (langKey === 'kz') {
      message = `Сәлеметсіз бе! Мен нөмірді брондағым келеді: ${currentRoomName}.`;
    } else if (langKey === 'en') {
      message = `Hello! I would like to book a room: ${currentRoomName}.`;
    } else {
      message = `${localT.whatsappHi}${currentRoomName}.`;
    }

    const whatsappUrl = `https://wa.me/+77055660909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        <Link to="/rooms" className="inline-flex items-center text-muted-foreground hover:text-primary font-serif text-sm tracking-wide mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> {localT.backBtn}
        </Link>

        <div className="bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/60 p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* ГАЛЕРЕЯ */}
            <div
              className="w-full lg:w-1/2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative rounded-lg overflow-hidden shadow-md mb-4 h-[300px] md:h-[400px] border border-gray-100 group cursor-zoom-in">
                {images.length > 0 ? (
                  <>
                    {/* ФОНОВЫЙ СЛОЙ (Предыдущее фото) */}
                    <img
                      src={images[prevIdx]}
                      alt="bg-prev"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* АНИМИРОВАННЫЙ СЛОЙ (Текущее фото) */}
                    <AnimatePresence initial={false}>
                      <motion.img
                        key={currentIdx}
                        src={images[currentIdx]}
                        alt={currentRoomName}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.0, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover z-10"
                        onClick={() => setIsFullscreen(true)}
                      />
                    </AnimatePresence>

                    {/* КНОПКИ */}
                    <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-2">
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevImage(); }}
                        className="pointer-events-auto bg-black/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/90"
                      >
                        <ChevronLeft className="w-5 h-5 text-white group-hover:text-primary" />
                      </button>
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextImage(); }}
                        className="pointer-events-auto bg-black/10 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/90"
                      >
                        <ChevronRight className="w-5 h-5 text-white group-hover:text-primary" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 font-serif">{localT.noPhoto}</div>
                )}
              </div>

              {/* МИНИАТЮРЫ */}
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {getThumbnailIndices().map((imgIdx) => (
                    <div
                      key={imgIdx}
                      onClick={() => { setPrevIdx(currentIdx); setCurrentIdx(imgIdx); }}
                      className={`h-20 sm:h-24 w-full relative cursor-pointer rounded-md overflow-hidden border-2 transition-all group ${currentIdx === imgIdx ? 'border-primary' : 'border-transparent'}`}
                    >
                      <img
                        src={images[imgIdx]}
                        alt="thumb"
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Fullscreen Overlay */}
              {isFullscreen && images.length > 0 && (
                <div
                  className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center overflow-hidden"
                  onClick={() => setIsFullscreen(false)}
                >
                  <button
                    className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors z-[10000]"
                    onClick={() => setIsFullscreen(false)}
                  >
                    ×
                  </button>

                  <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    {images.map((src: string, idx: number) => (
                      <div
                        key={idx}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                          }`}
                      >
                        <img
                          src={src}
                          className="max-w-full max-h-full w-auto h-auto object-contain"
                          alt={`${currentRoomName} Fullscreen`}
                        />
                      </div>
                    ))}

                    {/* Navigation Indicators inside Fullscreen */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {images.map((_: any, idx: number) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIdx ? "bg-white w-8" : "bg-white/40 w-2"
                            }`}
                        />
                      ))}
                    </div>

                    {images.length > 1 && (
                      <>
                        <button
                          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                        >
                          <span className="text-3xl">←</span>
                        </button>
                        <button
                          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                        >
                          <span className="text-3xl">→</span>
                        </button>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ИНФОРМАЦИЯ */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="border-b border-primary/10 pb-6 mb-6">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3 uppercase">
                  {currentRoomName}
                </h1>
              </div>

              <div className="mb-8">
                <div className="flex flex-col gap-3">
                  {room.amenityKeys.map((key: string) => {
                    const Icon = AMENITY_ICONS[key];
                    const label = (localT.amenities as any)[key];
                    if (!Icon) return null;
                    return (
                      <div key={key} className="flex items-center gap-3 text-gray-800">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-serif text-lg font-medium">{label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-auto bg-primary/5 rounded-xl p-6 border border-primary/10">
                <div className="flex flex-col items-start gap-4">
                  <div>
                    <p className="text-xs font-serif text-muted-foreground uppercase tracking-widest mb-1 font-bold">
                      <CheckCircle2 className="w-3 h-3 inline mr-1" /> {localT.priceLabel}
                    </p>
                    <p className="font-serif text-4xl font-bold text-primary">
                      {room.price} <span className="text-2xl text-primary/70">₸</span>
                    </p>
                  </div>
                  <Button
                    onClick={handleBookClick}
                    className="w-full bg-primary hover:bg-primary/90 text-white h-12 px-10 rounded-md text-sm font-serif font-bold uppercase tracking-widest shadow-lg transition-transform hover:scale-105 gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {localT.bookBtn}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
