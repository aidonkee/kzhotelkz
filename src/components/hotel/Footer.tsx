import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-gold-light to-primary" />

      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-semibold mb-6">Кызыл Жар</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Изысканный отдых и безупречный сервис в самом сердце города. Ваш комфорт — наш приоритет.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              {[
                { href: "#hero", label: "Главная" },
                { href: "#about", label: "О нас" },
                { href: "#rooms", label: "Номера" },
                { href: "#amenities", label: "Услуги" },
                { href: "#testimonials", label: "Отзывы" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  г. Петропавловск, ул. Интернациональная, 47
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+77152123456" className="text-background/70 hover:text-primary transition-colors">
                  +7 (7152) 12-34-56
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@kyzylzhar.kz" className="text-background/70 hover:text-primary transition-colors">
                  info@kyzylzhar.kz
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Режим работы</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">Ресепшн</p>
                  <p className="text-background font-medium">Круглосуточно</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/70">Заезд / Выезд</p>
                  <p className="text-background font-medium">14:00 / 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Кызыл Жар. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-background/50 hover:text-primary transition-colors">
              Условия бронирования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
