import { useState } from "react";
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
import { CalendarIcon, Send, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";

const BookingPage = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const preselectedRoom = searchParams.get("room") || "";

  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(preselectedRoom);

  const roomTypes = [
    { id: "family", name: t("rooms.family.name") },
    { id: "lux", name: t("rooms.lux.name") },
    { id: "semilux", name: t("rooms.semilux.name") },
    { id: "standard", name: t("rooms.standard.name") },
    { id: "econom_plus", name: t("rooms.econom_plus.name") },
    { id: "econom", name: t("rooms.econom.name") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !checkIn || !checkOut || !roomType) {
      return;
    }

    const selectedRoom = roomTypes.find((r) => r.id === roomType);
    const roomName = selectedRoom?.name || roomType;

    const checkInStr = format(checkIn, "dd.MM.yyyy");
    const checkOutStr = format(checkOut, "dd.MM.yyyy");

    const message = `Здравствуйте! Хочу забронировать номер ${roomName} с ${checkInStr} по ${checkOutStr}. Гостей: ${guests}. Меня зовут ${name}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/77152461184?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen pt-20 pb-16 relative z-10">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">
            {t("booking.title")}
          </h1>
          <p className="text-muted-foreground">
            {t("booking.subtitle")}
          </p>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border space-y-6"
        >
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t("booking.name")}
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("booking.name.placeholder")}
              required
              className="h-11"
            />
          </div>

          {/* Dates Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Check-in Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">{t("hero.checkin")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-11 justify-start text-left font-normal",
                      !checkIn && "text-muted-foreground"
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
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    locale={ru}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">{t("hero.checkout")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full h-11 justify-start text-left font-normal",
                      !checkOut && "text-muted-foreground"
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
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                    locale={ru}
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Guests & Room Type Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Guests */}
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

            {/* Room Type */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">{t("booking.room_type")}</Label>
              <Select value={roomType} onValueChange={setRoomType}>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder={t("booking.select_room")} />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((room) => (
                    <SelectItem key={room.id} value={room.id}>
                      {room.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* WhatsApp Info */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-green-800">
              {t("booking.whatsapp_info")}
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full btn-luxury h-12 text-base gap-2"
            disabled={!name || !checkIn || !checkOut || !roomType}
          >
            <Send className="w-4 h-4" />
            {t("booking.send")}
          </Button>
        </form>

        {/* Direct Contact */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            {t("booking.prefer_call")}
          </p>
          <a
            href="tel:+77152461184"
            className="text-primary font-semibold hover:underline"
          >
            +7 (7152) 46-11-84
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
