import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Utensils, Users, Building, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { href: "#hero", label: t("nav.home") },
    { href: "#rooms", label: t("nav.rooms") },
    { href: "#amenities", label: t("nav.amenities") },
    { href: "#testimonials", label: t("nav.testimonials") },
  ];

  const servicesLinks = [
    { href: "#restaurant", label: t("nav.restaurant"), icon: Utensils },
    { href: "#sports", label: t("nav.sports"), icon: Users },
    { href: "#conference", label: t("nav.conference"), icon: Building },
    { href: "#offices", label: t("nav.offices"), icon: Briefcase },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-white"
          }`}>
            Кызыл Жар
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              {t("nav.amenities")}
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-white/95 backdrop-blur-md border-gold/20 min-w-[200px]">
              {servicesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 cursor-pointer py-2"
                  >
                    <link.icon className="w-4 h-4 text-gold" />
                    <span>{link.label}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side - Language & CTA */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="tel:+77172123456"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone className="w-4 h-4" />
            +7 (7172) 12-34-56
          </a>
          <LanguageSelector isScrolled={isScrolled} />
          <Button className="btn-luxury text-sm py-2 px-6">
            {t("nav.book")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center gap-3">
          <LanguageSelector isScrolled={isScrolled} />
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
          <nav className="flex flex-col gap-3">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-medium py-2 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-border my-2" />
            <p className="text-sm text-muted-foreground font-medium">{t("nav.amenities")}</p>
            {servicesLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-foreground py-2 hover:text-gold transition-colors pl-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <link.icon className="w-4 h-4 text-gold" />
                {link.label}
              </a>
            ))}
            <Button className="btn-luxury mt-4">
              {t("nav.book")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
