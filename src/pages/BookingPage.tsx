import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";

// 1. Определяем интерфейс для ошибок
interface FormErrors {
  name?: boolean;
  checkIn?: boolean;
  checkOut?: boolean;
}

const BookingPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get("room") || "";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    "/view.jpg",
    "/view2.png",
    "/image copy 18.png",
    "/image copy 19.png",
  ];

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const [name, setName] = useState("");
  // Явно указываем типы для дат, чтобы избежать конфликтов
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [guests, setGuests] = useState("2");
  
  // 2. Указываем тип FormErrors для состояния
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [roomType] = useState(preselectedRoom);

  const roomTypes = [
    { id: "single-econom", name: t("rooms.single_econom.name") },
    { id: "single-econom-wide", name: t("rooms.single_econom_wide.name") },
    { id: "single-two-room", name: t("rooms.single_two_room.name") },
    { id: "econom-plus", name: t("rooms.econom_plus.name") },
    { id: "single-standard", name: t("rooms.single_standard.name") },
    { id: "single-semilux", name: t("rooms.single_semilux.name") },
    { id: "double-econom", name: t("rooms.double_econom.name") },
    { id: "double-econom-plus", name: t("rooms.double_econom_plus.name") },
    { id: "double-standard", name: t("rooms.double_standard.name") },
    { id: "triple-econom", name: t("rooms.triple_econom.name") },
    { id: "triple", name: t("rooms.triple.name") },
    { id: "quadruple-econom", name: t("rooms.quadruple_econom.name") },
    { id: "double-semilux", name: t("rooms.double_semilux.name") },
    { id: "lux-2room", name: t("rooms.lux_2room.name") },
    { id: "lux-3room", name: t("rooms.lux_3room.name") },
    { id: "family", name: t("rooms.family_3room.name") },
    { id: "family-2", name: t("rooms.family_2place.name") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = true;
      hasError = true;
    }
    if (!checkIn) {
      newErrors.checkIn = true;
      hasError = true;
    }
    if (!checkOut) {
      newErrors.checkOut = true;
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError || !checkIn || !checkOut) {
      return;
    }

    let roomNameString = "номер";
    if (roomType) {
        const selectedRoom = roomTypes.find((r) => r.id === roomType);
        if (selectedRoom) {
            roomNameString = `номер ${selectedRoom.name}`;
        }
    }

    const checkInStr = format(checkIn, "dd.MM.yyyy");
    const checkOutStr = format(checkOut, "dd.MM.yyyy");

    const message = `Здравствуйте! Хочу забронировать ${roomNameString} с ${checkInStr} по ${checkOutStr}. Гостей: ${guests}. Меня зовут ${name}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+77055660909?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) setErrors({ ...errors, name: false });
  };
  
  const handleCheckInChange = (date: Date | undefined) => {
    setCheckIn(date);
    if (errors.checkIn) setErrors({ ...errors, checkIn: false });
  };

  const handleCheckOutChange = (date: Date | undefined) => {
    setCheckOut(date);
    if (errors.checkOut) setErrors({ ...errors, checkOut: false });
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Booking background"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out blur-sm scale-105 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 max-w-2xl relative z-10">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-md">
            {t("booking.title")}
          </h1>
          <p className="text-white/80 drop-shadow-sm">
            {t("booking.subtitle")}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t("booking.name")}
            </Label>
            <Input
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder={t("booking.name.placeholder")}
              className={cn(
                "h-11 transition-all",
                errors.name && "border-red-500 focus-visible:ring-red-500"
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Пожалуйста, введите ваше имя</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">{t("hero.checkin")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-11 justify-start text-left font-normal transition-all",
                      !checkIn && "text-muted-foreground",
                      errors.checkIn && "border-red-500 text-red-500 hover:text-red-600"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "dd.MM.yyyy") : t("hero.select_date")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={handleCheckInChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    locale={ru}
                  />
                </PopoverContent>
              </Popover>
              {errors.checkIn && (
                <p className="text-red-500 text-sm">Выберите дату заезда</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">{t("hero.checkout")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-11 justify-start text-left font-normal transition-all",
                      !checkOut && "text-muted-foreground",
                      errors.checkOut && "border-red-500 text-red-500 hover:text-red-600"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "dd.MM.yyyy") : t("hero.select_date")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={handleCheckOutChange}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                    locale={ru}
                  />
                </PopoverContent>
              </Popover>
              {errors.checkOut && (
                <p className="text-red-500 text-sm">Выберите дату выезда</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">{t("hero.guests")}</Label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? t("hero.guest") : t("hero.guests_plural")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="w-full btn-luxury h-12 text-base gap-2 text-white border-none shadow-lg hover:shadow-xl transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {t("booking.send")}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <a
            href="tel:+77055660909"
            className="text-white/90 font-semibold hover:text-white hover:underline drop-shadow-sm"
          >
            +7 (7152) 46-11-84
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;