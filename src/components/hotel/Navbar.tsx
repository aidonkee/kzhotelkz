import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Utensils, Users, Briefcase } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const mainNavLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/rooms", label: t("nav.rooms") },
    { href: "/conference", label: t("nav.conference") },
    { href: "/contacts", label: t("nav.contacts") },
    { href: "/news", label: t("nav.news") },
  ];

  const servicesLinks = [
    { href: "/#restaurant", label: t("nav.restaurant"), icon: Utensils },
    { href: "/#sports", label: t("nav.sports"), icon: Users },
    { href: "/#offices", label: t("nav.offices"), icon: Briefcase },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-border py-3">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold tracking-wide text-primary">
            Кызыл Жар
          </span>
        </Link>

        {/* Desktop Navigation - visible on md and up */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                isActive(link.href) 
                  ? "text-primary" 
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary text-foreground">
              {t("nav.amenities")}
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-white border-border min-w-[200px]">
              {servicesLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                  <Link
                    to={link.href}
                    className="flex items-center gap-3 cursor-pointer py-2"
                  >
                    <link.icon className="w-4 h-4 text-primary" />
                    <span>{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right Side - Language & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+77172123456"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 text-foreground hover:text-primary"
          >
            <Phone className="w-4 h-4 text-primary" />
            +7 (7172) 12-34-56
          </a>
          <LanguageSelector />
          <Button className="btn-luxury text-sm py-2 px-6">
            {t("nav.book")}
          </Button>
        </div>

        {/* Mobile Menu Button - only on small screens */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSelector />
          <button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border mt-3 mx-4 rounded-2xl p-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-3">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium py-2 transition-colors ${
                  isActive(link.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <p className="text-sm text-muted-foreground font-medium">{t("nav.amenities")}</p>
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-3 text-foreground py-2 hover:text-primary transition-colors pl-2"
              >
                <link.icon className="w-4 h-4 text-primary" />
                {link.label}
              </Link>
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
