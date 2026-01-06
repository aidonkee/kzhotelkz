import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/rooms", label: t("nav.rooms") },
    { href: "/conference", label: t("nav.conference") },
    { href: "/contacts", label: t("nav.contacts") },
    { href: "/news", label: t("nav.news") },
  ];

  return (
    // Исправил bg-hrey на !bg-[#000000]
    <footer className="!bg-[#000000] text-white border-t-0">
      
      {/* Ярко-красная линия */}
     

      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div>
            {/* ИЗМЕНЕНИЕ ЗДЕСЬ: Flex контейнер для текста и логотипа */}
            <div className="flex items-center gap-4 mb-6">
              {/* 1. Сначала текст */}
              <h3 className="font-serif text-3xl font-semibold text-white">
                Кызыл Жар
              </h3>
              
              {/* 2. Потом логотип (справа) */}
              <Link to="/" className="inline-block">
                <img 
                  src="/logo.png" 
                  alt="Кызыл Жар" 
                  className="h-12 w-auto object-contain" 
                />
              </Link>
            </div>
           
            <p className="text-gray-400 leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:!bg-[#ff0000] transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:!bg-[#ff0000] transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:!bg-[#ff0000] transition-colors text-white">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">{t("footer.links")}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:!text-[#ff0000] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 !text-[#ff0000] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  {t("footer.address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 !text-[#ff0000] flex-shrink-0" />
                <a href="tel:+77152467391" className="text-gray-400 hover:!text-[#ff0000] transition-colors">
                  +7 (7152) 46-73-91
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 !text-[#ff0000] flex-shrink-0" />
                <a href="mailto:info@kyzylzhar.kz" className="text-gray-400 hover:!text-[#ff0000] transition-colors">
                  info@kyzylzhar.kz
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">{t("footer.hours")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 !text-[#ff0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">{t("footer.reception.label")}</p>
                  <p className="text-white font-medium">{t("footer.reception.value")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 !text-[#ff0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">{t("footer.checkin.label")}</p>
                  <p className="text-white font-medium">14:00 / 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Кызыл Жар. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:!text-[#ff0000] transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-gray-500 hover:!text-[#ff0000] transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;