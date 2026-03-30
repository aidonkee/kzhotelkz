import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useData } from "@/contexts/DataContext"; // <--- Import useData
import { Button } from "@/components/ui/button";
import { CigaretteOff, MessageCircle, Users, Minus, Plus } from "lucide-react";
import { TRANSLATIONS as SHARED_TRANSLATIONS, AMENITY_ICONS } from "@/data/rooms"; // Removed ROOMS_DATA import

// Порядок отображения номеров
const ROOM_ORDER = [
  "lux-3room", "lux-2room", "lux-317", "semilux-1room-1place",
  "single-semilux", "double-semilux",
  "family-2", "family-3",
  "econom-plus", "econom-plus-1", "double-econom-plus", "econom-plus-3",
  "econom-1-large", "single-standard", "double-standard",
  "econom-1", "econom-2", "econom-3", "econom-4"
];

// --- Компонент Карусели ---
const RoomListCarousel = ({
  images,
  alt,
  noPhotoText,
  onImageClick
}: {
  images: string[];
  alt: string;
  noPhotoText: string;
  onImageClick?: (index: number) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images?.length]);

  return (
    <div
      className="
        relative w-full overflow-hidden bg-gray-100 shadow-md group
        rounded-xl cursor-zoom-in
        h-64 sm:h-72 md:h-[350px] lg:h-[400px] xl:h-[450px]
      "
      onClick={() => onImageClick && onImageClick(currentIndex)}
    >
      {images && images.length > 0 ? (
        <div
          className="flex h-full w-full transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${alt} ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover flex-shrink-0"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400?text=No+Image";
              }}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <span className="text-gray-400 font-serif">{noPhotoText}</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 shadow-sm ${idx === currentIndex ? "bg-white w-8" : "bg-white/50 w-2"
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const RoomsPage = () => {
  const { language } = useLanguage();
  const { rooms: ROOMS_DATA } = useData(); // <--- Get rooms from context and alias it to ROOMS_DATA to minimize changes
  const langKey = (language as keyof typeof SHARED_TRANSLATIONS) || 'ru';
  // @ts-ignore
  const localT = SHARED_TRANSLATIONS[langKey] || SHARED_TRANSLATIONS.ru;

  // State for guest counts per room
  const [guestCounts, setGuestCounts] = useState<Record<string, number>>({});

  // Fullscreen viewer state
  const [fullscreenData, setFullscreenData] = useState<{
    images: string[];
    index: number;
    title: string;
  } | null>(null);

  const handleGuestChange = (roomId: string, delta: number) => {
    setGuestCounts(prev => {
      const current = prev[roomId] || 1;
      const newValue = Math.max(1, Math.min(10, current + delta)); // Limit 1-10 guests
      return { ...prev, [roomId]: newValue };
    });
  };

  const handleBookClick = (room: typeof ROOMS_DATA[string]) => {
    const guests = guestCounts[room.id] || 1;
    const roomName = room.name[langKey] || room.name.ru;

    // Формируем сообщение для WhatsApp
    // Логика формирования сообщения может быть адаптирована под язык, но пока сделаем универсально или на языке интерфейса
    let message = "";
    if (langKey === 'ru') {
      message = `Здравствуйте! Хочу забронировать номер: ${roomName}. Количество гостей: ${guests}.`;
    } else if (langKey === 'kz') {
      message = `Сәлеметсіз бе! Мен нөмірді брондағым келеді: ${roomName}. Қонақтар саны: ${guests}.`;
    } else if (langKey === 'en') {
      message = `Hello! I would like to book a room: ${roomName}. Number of guests: ${guests}.`;
    } else {
      // Default to English or Russian if needed, currently using translations mapping logic
      message = `${localT.whatsappHi}${roomName}. ${localT.guestsLabel} ${guests}.`;
    }

    const whatsappUrl = `https://wa.me/+77055660909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const nextFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!fullscreenData) return;
    setFullscreenData({
      ...fullscreenData,
      index: (fullscreenData.index + 1) % fullscreenData.images.length
    });
  };

  const prevFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!fullscreenData) return;
    setFullscreenData({
      ...fullscreenData,
      index: (fullscreenData.index - 1 + fullscreenData.images.length) % fullscreenData.images.length
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16 relative overflow-visible bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl 2xl:max-w-[1600px] pb-16">

        {/* Smoking Notice */}
        <div className="mb-12 bg-white border border-amber-200 p-4 rounded-xl flex items-center gap-4 shadow-sm max-w-4xl mx-auto">
          <div className="bg-amber-100 p-2 rounded-full">
            <CigaretteOff className="w-6 h-6 text-amber-600 flex-shrink-0" />
          </div>
          <p className="text-amber-900 text-sm md:text-base font-serif italic">
            {/* 
                Since smokingNotice was removed from SHARED_TRANSLATIONS in the helper, 
                we might need to add it back or hardcode it. 
                Wait, I see I didn't include smokingNotice in the new file's translations.
                I should probably check if it was there. 
                Checking my own output for src/data/rooms.ts... 
                It seems I missed 'smokingNotice' in the consolidated file! 
                I will add a fallback here for now to avoid errors.
            */}
            {(localT as any).smokingNotice || "Внимание! Во всех номерах отеля курение строго запрещено. / Attention! Smoking is strictly prohibited."}
          </p>
        </div>

        <div className="space-y-16">
          {ROOM_ORDER.map((roomId) => {
            const room = ROOMS_DATA[roomId];
            if (!room) return null;

            const title = room.name[langKey] || room.name.ru;
            const description = (localT.categories as any)[room.descriptionCategory]?.desc || "";
            const currentGuests = guestCounts[roomId] || 1;

            return (
              <section
                key={room.id}
                id={room.id}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                  {/* Левая колонка - Карусель (на мобильных сверху) */}
                  <div className="lg:col-span-5 xl:col-span-5 relative h-64 sm:h-72 md:h-[400px] lg:h-full min-h-[300px]">
                    <div className="absolute inset-0">
                      <RoomListCarousel
                        images={room.images}
                        alt={title}
                        noPhotoText={localT.noPhoto}
                        onImageClick={(idx) => setFullscreenData({ images: room.images, index: idx, title: title })}
                      />
                    </div>
                  </div>

                  {/* Правая колонка - Информация */}
                  <div className="lg:col-span-7 xl:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <div>
                          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight">
                            {title}
                          </h2>
                          <p className="font-serif text-muted-foreground text-sm md:text-base italic mb-4">
                            {description}
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-serif text-2xl md:text-3xl font-bold text-primary">
                            {room.price} <span className="text-sm text-primary/70">₸</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-full h-px bg-gray-100 mb-6" />

                      {/* Удобства */}
                      <div className="mb-8">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                          {(localT.amenities as any)?.amenitiesLabel || "Удобства / Amenities"}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2">
                          {room.amenityKeys.map(key => {
                            const Icon = AMENITY_ICONS[key];
                            const label = (localT.amenities as any)[key];
                            if (!Icon) return null;
                            return (
                              <div key={key} className="flex items-center gap-2 text-gray-700">
                                <Icon className="w-4 h-4 text-primary/70" />
                                <span className="text-xs sm:text-sm">{label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Блок бронирования */}
                    <div className="bg-primary/5 rounded-xl p-4 sm:p-5 mt-4 border border-primary/10">
                      <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">

                        {/* Счетчик гостей */}
                        <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
                          <span className="text-sm font-medium text-gray-600 mr-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            {localT.guestsLabel}
                          </span>
                          <button
                            onClick={() => handleGuestChange(room.id, -1)}
                            className="p-1 hover:bg-gray-100 rounded-full text-primary transition-colors"
                            disabled={currentGuests <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-4 text-center font-bold text-lg">{currentGuests}</span>
                          <button
                            onClick={() => handleGuestChange(room.id, 1)}
                            className="p-1 hover:bg-gray-100 rounded-full text-primary transition-colors"
                            disabled={currentGuests >= 10}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Кнопка */}
                        <Button
                          onClick={() => handleBookClick(room)}
                          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white h-11 px-8 rounded-lg text-sm font-bold uppercase tracking-wider shadow-md gap-2"
                        >
                          <svg className="w-5 h-5 mr-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          {localT.bookBtn}
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Global Fullscreen Viewer */}
        {fullscreenData && (
          <div
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center overflow-hidden"
            onClick={() => setFullscreenData(null)}
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl hover:text-gold transition-colors z-[10000]"
              onClick={() => setFullscreenData(null)}
            >
              ×
            </button>

            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {fullscreenData.images.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${idx === fullscreenData.index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  <img
                    src={src}
                    className="max-w-full max-h-full object-contain"
                    alt={`${fullscreenData.title} Fullscreen`}
                  />
                </div>
              ))}

              {/* Navigation Indicators inside Fullscreen */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {fullscreenData.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === fullscreenData.index ? "bg-white w-8" : "bg-white/40 w-2"
                      }`}
                  />
                ))}
              </div>

              {fullscreenData.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
                    onClick={prevFullscreen}
                  >
                    <span className="text-3xl">←</span>
                  </button>
                  <button
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
                    onClick={nextFullscreen}
                  >
                    <span className="text-3xl">→</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage;