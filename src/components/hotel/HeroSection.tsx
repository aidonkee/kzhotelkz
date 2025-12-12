import { useState } from "react";
import { Calendar, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
          alt="Отель Кызыл Жар - Лобби"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Headline */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-up">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
            Добро пожаловать в
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white mb-6 leading-tight">
            Кызыл Жар
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Откройте для себя безупречный сервис и изысканный комфорт в самом сердце города
          </p>
        </div>

        {/* Booking Form */}
        <div className="glass rounded-3xl p-6 md:p-8 max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Check-in */}
            <div className="text-left">
              <label className="text-sm text-muted-foreground font-medium mb-2 block">
                Заезд
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors text-left">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-foreground">
                      {checkIn ? format(checkIn, "dd MMM yyyy", { locale: ru }) : "Выберите дату"}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background border-border z-50" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out */}
            <div className="text-left">
              <label className="text-sm text-muted-foreground font-medium mb-2 block">
                Выезд
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full flex items-center gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors text-left">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-foreground">
                      {checkOut ? format(checkOut, "dd MMM yyyy", { locale: ru }) : "Выберите дату"}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background border-border z-50" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="text-left">
              <label className="text-sm text-muted-foreground font-medium mb-2 block">
                Гости
              </label>
              <Popover open={isGuestsOpen} onOpenChange={setIsGuestsOpen}>
                <PopoverTrigger asChild>
                  <button className="w-full flex items-center justify-between gap-3 p-4 bg-background rounded-xl border border-border hover:border-primary transition-colors text-left">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{guests} {guests === 1 ? "гость" : guests < 5 ? "гостя" : "гостей"}</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-4 bg-background border-border z-50" align="start">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Гости</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{guests}</span>
                      <button
                        onClick={() => setGuests(Math.min(10, guests + 1))}
                        className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Search Button */}
            <Button className="btn-luxury h-[58px] text-base">
              Проверить наличие
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
