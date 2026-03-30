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
    <footer className="! bg-[#000000] text-white border-t-0">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                Кызыл Жар
              </h3>
              <Link to="/" className="inline-block">
                <img
                  src="/logo.png"
                  alt="Кызыл Жар"
                  className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 max-w-xs">
              {t("footer.description")}
            </p>

            <div className="flex gap-3">
              <a href="https://vk.ru/kyzylzhar1984" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:!bg-[#4C75A3] transition-colors text-white">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.14 7.02c.13-.44 0-.76-.62-.76h-2.07c-.52 0-.76.28-.89.58 0 0-1.05 2.57-2.55 4.25-.49.49-.71.64-.98.64-.13 0-.33-.15-.33-.58V7.02c0-.52-.16-.76-.59-.76h-3.26c-.33 0-.52.24-.52.48 0 .5.73.61.81 2.01v3.01c0 .66-.12.78-.38.78-.71 0-2.43-2.59-3.45-5.55-.2-.58-.4-.81-.92-.81H4.4c-.58 0-.7.28-.7.58 0 .54.7 3.22 3.28 6.84 1.72 2.47 4.14 3.8 6.34 3.8 1.32 0 1.48-.3 1.48-.81v-1.86c0-.6.13-.72.55-.72.31 0 .84.15 2.09 1.35 1.42 1.42 1.66 2.06 2.45 2.06h2.07c.58 0 .87-.3.7-.86-.18-.57-.84-1.39-1.72-2.38-.48-.57-1.2-1.18-1.42-1.48-.3-.39-.22-.57 0-1.1s2.51-3.6 2.76-4.7z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/hotel.kz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/10 flex items-center justify-center hover:!bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600 transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4 text-white">
              {t("footer.links")}
            </h4>
            <ul className="space-y-1. 5 md:space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:! text-[#ff0000] transition-colors text-xs md:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4 text-white">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 !text-[#ff0000] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-xs md:text-sm leading-tight">
                  {t("footer.address")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 !text-[#ff0000] mt-1 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+77152461184" className="text-gray-400 hover:!text-[#ff0000] transition-colors text-xs md:text-sm">
                    +7 (7152) 46-11-84
                  </a>
                  <a href="tel:+77055660909" className="text-gray-400 hover:!text-[#ff0000] transition-colors text-xs md:text-sm">
                    +7 (705) 566-09-09
                  </a>
                  <a href="tel:+77152464629" className="text-gray-400 hover:!text-[#ff0000] transition-colors text-xs md:text-sm">
                    +7 (7152) 46-46-29
                  </a>
                  <a href="tel:+77084321631" className="text-gray-400 hover:!text-[#ff0000] transition-colors text-xs md:text-sm">
                    +7 (708) 432-16-31
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 !text-[#ff0000] flex-shrink-0" />
                <a href="mailto:kz-hotel@mail.ru" className="text-gray-400 hover:!text-[#ff0000] transition-colors text-xs md:text-sm">
                  kz-hotel@mail.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-sm md:text-base lg:text-lg font-semibold mb-3 md:mb-4 text-white">
              {t("footer.hours")}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 !text-[#ff0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs">{t("footer.reception.label")}</p>
                  <p className="text-white font-medium text-xs md:text-sm">{t("footer.reception.value")}</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 !text-[#ff0000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs">{t("footer.checkin.label")}</p>
                  <p className="text-white font-medium text-xs md: text-sm">14:00 / 12:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-6 md:mt-8 pt-4 md:pt-6 flex flex-col md: flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-[10px] md: text-xs">
            © 2024 Кызыл Жар. {t("footer.rights")}
          </p>
          <div className="flex gap-4 md:gap-6 text-[10px] md: text-xs">
            <a href="#" className="text-gray-500 hover:! text-[#ff0000] transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-gray-500 hover:! text-[#ff0000] transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;