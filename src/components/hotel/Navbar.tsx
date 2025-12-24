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
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-border/50 py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-xl lg:text-2xl font-semibold tracking-wide text-primary">
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
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary text-muted-foreground">
              {t("nav.amenities")}
              <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-white/95 backdrop-blur-md border-border min-w-[200px]">
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
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+77152461184"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 text-muted-foreground hover:text-primary"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span className="hidden lg:inline">+7 (7152) 46-11-84</span>
          </a>
          <LanguageSelector />
          <Link to="/booking">
            <Button className="btn-luxury text-sm py-1.5 px-4">
              {t("nav.book")}
            </Button>
          </Link>
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 mt-2 mx-3 rounded-xl p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-2">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium py-2 transition-colors ${
                  isActive(link.href) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <p className="text-xs text-muted-foreground font-medium">{t("nav.amenities")}</p>
            {servicesLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-3 text-muted-foreground py-2 hover:text-primary transition-colors pl-2 text-sm"
              >
                <link.icon className="w-4 h-4 text-primary" />
                {link.label}
              </Link>
            ))}
            <Link to="/booking" className="mt-3">
              <Button className="btn-luxury w-full text-sm py-2">
                {t("nav.book")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
